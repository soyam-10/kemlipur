"use client";

import { Landmark } from "@/types";
import { useMapStore } from "@/store/mapStore";
import Image from "next/image";

interface Props {
  landmark: Landmark;
}

export default function LandmarkCard({ landmark }: Props) {
  const { setActiveLandmark } = useMapStore();

  return (
    <div
      onClick={() => setActiveLandmark(landmark._id!)}
      className="group cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 hover:border-green-500/50 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 w-full bg-green-950/40">
        <Image
          src={landmark.coverImage}
          alt={landmark.name}
          fill
          className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          onError={(e) => {
            // hide broken image, show fallback bg
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Nepali name badge */}
        <span className="absolute top-3 right-3 text-xs bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full text-green-300">
          {landmark.nepaliName}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-2">
        <h3 className="text-lg font-semibold group-hover:text-green-400 transition-colors">
          {landmark.name}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {landmark.description}
        </p>
        <span className="inline-block mt-2 text-xs text-green-500 group-hover:text-green-300 transition-colors">
          Explore →
        </span>
      </div>
    </div>
  );
}