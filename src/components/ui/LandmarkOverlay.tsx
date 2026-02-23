"use client";

import { useMapStore } from "@/store/mapStore";
import { useLandmarkData } from "@/hooks/UseLandmarkData";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LandmarkOverlay() {
  const { activeLandmark, isOverlayOpen, closeOverlay } = useMapStore();
  const { landmark, events, news, loading } = useLandmarkData(activeLandmark);

  return (
    <AnimatePresence>
      {isOverlayOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex flex-col bg-black/80 backdrop-blur-md overflow-y-auto"
        >
          {/* Back Button */}
          <div className="sticky top-0 z-10 px-6 py-4 flex items-center gap-3 bg-black/60 backdrop-blur-sm border-b border-white/10">
            <button
              onClick={closeOverlay}
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors group"
            >
              <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
              Back to Village
            </button>
            {landmark && (
              <>
                <span className="text-white/20">|</span>
                <span className="text-green-400 text-sm">{landmark.nepaliName}</span>
              </>
            )}
          </div>

          {loading || !landmark ? (
            /* Loading skeleton */
            <div className="flex-1 flex items-center justify-center">
              <p className="text-green-400 text-sm tracking-widest animate-pulse">Loading...</p>
            </div>
          ) : (
            <>
              {/* Hero Image */}
              <div className="relative w-full h-72 md:h-96 bg-green-950/40 shrink-0">
                <Image
                  src={landmark.coverImage}
                  alt={landmark.name}
                  fill
                  className="object-cover opacity-70"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-green-400 text-xs tracking-widest uppercase mb-1">Kemlipur</p>
                  <h1 className="text-3xl md:text-4xl font-bold">{landmark.name}</h1>
                </div>
              </div>

              {/* Content */}
              <div className="max-w-3xl mx-auto w-full px-6 py-10 space-y-10">
                {/* About */}
                <div className="space-y-3">
                  <h2 className="text-green-400 text-xs tracking-widest uppercase">About</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">{landmark.description}</p>
                </div>

                {/* Location */}
                <div className="space-y-3">
                  <h2 className="text-green-400 text-xs tracking-widest uppercase">Location</h2>
                  <p className="text-gray-500 text-sm font-mono">
                    {landmark.position[2]}° N, {landmark.position[0]}° E
                  </p>
                </div>

                {/* News */}
                <div className="space-y-4">
                  <h2 className="text-green-400 text-xs tracking-widest uppercase">Latest News</h2>
                  {news.length > 0 ? (
                    news.map((item) => (
                      <div key={item._id} className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-green-900/60 text-green-300 px-2 py-0.5 rounded-full capitalize">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                      </div>
                    ))
                  ) : (
                    <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-8 text-center text-gray-500 text-sm">
                      No news yet. Check back soon.
                    </div>
                  )}
                </div>

                {/* Events */}
                <div className="space-y-4">
                  <h2 className="text-green-400 text-xs tracking-widest uppercase">Upcoming Events</h2>
                  {events.length > 0 ? (
                    events.map((event) => (
                      <div key={event._id} className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-2">
                        <h3 className="font-semibold">{event.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>
                        <p className="text-gray-600 text-xs">{event.date}</p>
                      </div>
                    ))
                  ) : (
                    <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-8 text-center text-gray-500 text-sm">
                      No upcoming events.
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}