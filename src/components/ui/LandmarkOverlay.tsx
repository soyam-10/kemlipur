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
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-50 overflow-y-auto"
          style={{ fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}
        >
          {/* Full bleed background image */}
          <div className="relative min-h-screen">

            {/* Hero — full viewport image */}
            <div className="relative w-full h-screen sticky top-0 overflow-hidden">
              {landmark && (
                <Image
                  src={landmark.coverImage}
                  alt={landmark.name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                  priority
                />
              )}

              {/* Gradient overlay — bottom heavy */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

              {/* Top bar — floating back button */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="absolute top-0 left-0 right-0 px-6 pt-8 flex items-center justify-between"
              >
                <button
                  onClick={closeOverlay}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white transition-all duration-200 hover:bg-white/10 active:scale-95"
                  style={{ backdropFilter: "blur(20px)", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>

                {landmark && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-xs tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
                    style={{ backdropFilter: "blur(20px)", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)" }}
                  >
                    {landmark.nepaliName}
                  </motion.span>
                )}
              </motion.div>

              {/* Hero text — bottom of image */}
              {loading || !landmark ? (
                <div className="absolute bottom-12 left-8 right-8">
                  <div className="h-3 w-24 bg-white/10 rounded-full animate-pulse mb-4" />
                  <div className="h-10 w-64 bg-white/10 rounded-xl animate-pulse" />
                </div>
              ) : (
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute bottom-25 left-8 right-8"
                >
                  <p className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Kemlipur · Dhanusha
                  </p>
                  <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight tracking-tight">
                    {landmark.name}
                  </h1>
                </motion.div>
              )}

              {/* Scroll hint */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
              >
                <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>Scroll</span>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: "rgba(255,255,255,0.3)" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </motion.div>
            </div>

            {/* Content — slides up over the image */}
            <div className="relative z-10 -mt-24 bg-black rounded-t-[2.5rem] min-h-screen">
              {!loading && landmark && (
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  className="max-w-2xl mx-auto px-6 pt-10 pb-24 space-y-12"
                >
                  {/* Drag handle */}
                  <div className="flex justify-center -mt-2">
                    <div className="w-10 h-1 rounded-full bg-white/20" />
                  </div>

                  {/* About */}
                  <section className="space-y-4">
                    <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>About</p>
                    <p className="text-lg leading-relaxed font-light" style={{ color: "rgba(255,255,255,0.85)" }}>
                      {landmark.description}
                    </p>
                  </section>

                  {/* Location pill */}
                  <section>
                    <div
                      className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>
                        {Math.abs(landmark.lat).toFixed(6)}° N &nbsp;·&nbsp; {Math.abs(landmark.lng).toFixed(6)}° E
                      </span>
                    </div>
                  </section>

                  {/* Divider */}
                  <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.06)" }} />

                  {/* News */}
                  <section className="space-y-5">
                    <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>Latest News</p>
                    {news.length > 0 ? (
                      <div className="space-y-3">
                        {news.map((item, i) => (
                          <motion.div
                            key={item._id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i }}
                            className="p-5 rounded-2xl space-y-2.5"
                            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                          >
                            <span
                              className="inline-block text-xs px-2.5 py-1 rounded-full capitalize tracking-wide"
                              style={{ background: "rgba(74,222,128,0.12)", color: "#4ade80", border: "1px solid rgba(74,222,128,0.2)" }}
                            >
                              {item.category}
                            </span>
                            <h3 className="font-semibold text-white">{item.title}</h3>
                            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{item.body}</p>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div
                        className="py-10 rounded-2xl text-center"
                        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                      >
                        <p className="text-sm text-muted-foreground">No news yet. Check back soon.</p>
                      </div>
                    )}
                  </section>

                  {/* Events */}
                  <section className="space-y-5">
                    <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>Upcoming Events</p>
                    {events.length > 0 ? (
                      <div className="space-y-3">
                        {events.map((event, i) => (
                          <motion.div
                            key={event._id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i }}
                            className="p-5 rounded-2xl space-y-2.5"
                            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                          >
                            <div className="flex items-start justify-between gap-4">
                              <h3 className="font-semibold text-white">{event.title}</h3>
                              <span
                                className="text-xs px-2.5 py-1 rounded-full shrink-0"
                                style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }}
                              >
                                {event.date}
                              </span>
                            </div>
                            <p className="text-sm leading-relaxed text-muted-foreground">{event.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div
                        className="py-10 rounded-2xl text-center"
                        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                      >
                        <p className="text-sm text-muted-foreground">No upcoming events.</p>
                      </div>
                    )}
                  </section>

                  {/* Footer credit */}
                  <div className="text-center pt-6">
                    <p className="text-xs text-muted-foreground">
                      Kemlipur Village · Dhalkebar, Dhanusha, Nepal
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}