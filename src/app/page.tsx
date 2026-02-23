"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Landmark } from "@/types";
import LandmarkCard from "@/components/ui/LandmarkCard";
import LandmarkOverlay from "@/components/ui/LandmarkOverlay";

const MapCanvas = dynamic(() => import("@/components/map/MapCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <p className="text-green-400 tracking-widest text-sm animate-pulse">Loading Kemlipur...</p>
    </div>
  ),
});

export default function Home() {
  const [landmarks, setLandmarks] = useState<Landmark[]>([]);

  useEffect(() => {
    fetch("/api/landmarks")
      .then((r) => r.json())
      .then((data) => { if (data.success) setLandmarks(data.data); });
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <LandmarkOverlay />
      <section className="relative w-full h-screen">
        <MapCanvas />
        <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center pointer-events-none z-10">
          <p className="text-green-400 tracking-widest text-xs uppercase mb-1">Dhalkebar, Dhanusha, Nepal</p>
          <h1 className="text-4xl font-bold tracking-tight">Kemlipur</h1>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <p className="text-gray-500 text-xs tracking-widest">Explore on foot</p>
          <button
            onClick={() => document.getElementById("landmarks")?.scrollIntoView({ behavior: "smooth" })}
            className="flex flex-col items-center animate-bounce text-green-400 hover:text-green-300 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </section>
      <section id="landmarks" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-2">Landmarks</h2>
        <p className="text-gray-400 mb-10">Click on a landmark to learn more.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {landmarks.map((landmark) => (
            <LandmarkCard key={landmark._id} landmark={landmark} />
          ))}
        </div>
      </section>
      <footer className="border-t border-white/10 py-8 px-6 text-center">
        <p className="text-gray-500 text-sm">
          Designed & built by{" "}
          <a href="https://soyambajgain.com.np"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition-colors font-medium"
          > Heisenberg
          </a>
          {" "}— Preserving village stories, one landmark at a time.
        </p>
      </footer>
    </main >
  );
}