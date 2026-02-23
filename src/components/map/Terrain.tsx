"use client";

import { useTexture } from "@react-three/drei";

export default function Terrain() {
  const texture = useTexture("/images/map/kemlipur-map.png");

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}