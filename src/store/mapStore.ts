import { create } from "zustand";

interface MapState {
  activeLandmark: string | null;
  isOverlayOpen: boolean;
  isCameraZooming: boolean;
  setActiveLandmark: (id: string) => void;
  closeOverlay: () => void;
  setIsCameraZooming: (value: boolean) => void;
}

export const useMapStore = create<MapState>((set) => ({
  activeLandmark: null,
  isOverlayOpen: false,
  isCameraZooming: false,
  setActiveLandmark: (id) =>
    set({ activeLandmark: id, isOverlayOpen: true, isCameraZooming: true }),
  closeOverlay: () =>
    set({ activeLandmark: null, isOverlayOpen: false, isCameraZooming: false }),
  setIsCameraZooming: (value) => set({ isCameraZooming: value }),
}));