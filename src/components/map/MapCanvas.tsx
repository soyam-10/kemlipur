"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import Terrain from "./Terrain";
import LandmarkMarker from "./LandmarkMarker";
import CameraController from "./CameraController";
import { Landmark } from "@/types";

export default function MapCanvas() {
  const [landmarks, setLandmarks] = useState<Landmark[]>([]);

  useEffect(() => {
    fetch("/api/landmarks")
      .then((r) => r.json())
      .then((data) => { if (data.success) setLandmarks(data.data); });
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 8, 6], fov: 50, near: 0.1, far: 100 }} gl={{ antialias: true }} shadows>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
        <Suspense fallback={null}>
          <Terrain />
          {landmarks.map((landmark) => (
            <LandmarkMarker key={landmark._id} landmark={landmark} />
          ))}
        </Suspense>
        <CameraController />
        <OrbitControls enablePan enableZoom enableRotate minDistance={2} maxDistance={20} maxPolarAngle={Math.PI / 2.2} makeDefault />
      </Canvas>
    </div>
  );
}