/**
 * POST /api/landmarks/migrate
 *
 * One-time migration: backfills `lat` and `lng` on any Landmark documents
 * that are missing those fields by deriving them from the stored `position`
 * array and the known MAP_BOUNDS used at seed time.
 *
 * Run once from an admin script or curl:
 *   curl -X POST https://<your-domain>/api/landmarks/migrate
 *
 * Safe to run multiple times — only updates documents where lat/lng are missing.
 */

import { connectToDatabase } from "@/lib/mongodb";
import LandmarkModel from "@/models/Landmark";
import { NextResponse } from "next/server";
import { MAP_BOUNDS, PLANE_SIZE } from "@/lib/geoUtils";

/** Inverse of geoToPlane — converts 3-D plane coords back to lat/lng */
function planeToGeo(x: number, z: number): { lat: number; lng: number } {
  const lng =
    ((x + PLANE_SIZE / 2) / PLANE_SIZE) * (MAP_BOUNDS.maxLng - MAP_BOUNDS.minLng) +
    MAP_BOUNDS.minLng;

  // z is stored as -z in geoToPlane, so invert
  const lat =
    ((-z + PLANE_SIZE / 2) / PLANE_SIZE) * (MAP_BOUNDS.maxLat - MAP_BOUNDS.minLat) +
    MAP_BOUNDS.minLat;

  return { lat, lng };
}

export async function POST() {
  try {
    await connectToDatabase();

    // Find all documents missing lat or lng
    const broken = await LandmarkModel.find({
      $or: [{ lat: { $exists: false } }, { lng: { $exists: false } }],
    }).lean();

    if (broken.length === 0) {
      return NextResponse.json({ success: true, message: "Nothing to migrate.", updated: 0 });
    }

    let updated = 0;
    const errors: string[] = [];

    for (const doc of broken) {
      const [x, , z] = doc.position as [number, number, number];
      if (x == null || z == null) {
        errors.push(`${doc._id}: missing position data, skipped`);
        continue;
      }

      const { lat, lng } = planeToGeo(x, z);

      await LandmarkModel.findByIdAndUpdate(doc._id, { lat, lng });
      updated++;
    }

    return NextResponse.json({ success: true, updated, errors });
  } catch (error) {
    console.error("Migration error:", error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
