"use client";

import { useRef, useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import { useMapStore } from "@/store/mapStore";

const DEFAULT_POSITION = new Vector3(0, 8, 6);
const DEFAULT_TARGET = new Vector3(0, 0, 0);

export default function CameraController() {
  const { camera, controls } = useThree();
  const { activeLandmark, isOverlayOpen, setIsCameraZooming } = useMapStore();

  const targetPosition = useRef(DEFAULT_POSITION.clone());
  const targetLookAt = useRef(DEFAULT_TARGET.clone());
  const currentLookAt = useRef(DEFAULT_TARGET.clone());
  const isAnimating = useRef(false);

  useEffect(() => {
    if (activeLandmark) {
      fetch(`/api/landmarks/${activeLandmark}`)
        .then((r) => r.json())
        .then((data) => {
          if (!data.success || !data.data) return;
          const [x, , z] = data.data.position;
          targetPosition.current.set(x, 2.5, z + 2);
          targetLookAt.current.set(x, 0, z);
          setIsCameraZooming(true);
          isAnimating.current = true;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          if (controls) (controls as any).enabled = false;
          setTimeout(() => {
            setIsCameraZooming(false);
            isAnimating.current = false;
          }, 900);
        });
    } else {
      targetPosition.current.copy(DEFAULT_POSITION);
      targetLookAt.current.copy(DEFAULT_TARGET);
      isAnimating.current = true;
      setTimeout(() => {
        isAnimating.current = false;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (controls) (controls as any).enabled = true;
      }, 900);
    }
  }, [activeLandmark]);

  useFrame(() => {
    if (!isAnimating.current) return;
    camera.position.lerp(targetPosition.current, 0.05);
    currentLookAt.current.lerp(targetLookAt.current, 0.05);
    camera.lookAt(currentLookAt.current);
  });

  return null;
}