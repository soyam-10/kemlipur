export type VillageConfig = {
  name: string;
  nameNepali: string;
  tagline: string;               // one-line poetic description
  location: string;              // district · province · Nepal
  locationShort: string;         // e.g. "Rautahat" — shown on landmark overlay
  mapImage: string;              // path under /images/map/
  accentColor: string;           // hex — unique per village (used as CSS var)
  footerAttribution: string;     // village · district, Nepal
  loadingLabel: string;          // text shown while 3D map loads
};

// ─── Kemlipur ────────────────────────────────────────────────────────────────
export const kemlipur: VillageConfig = {
  name: "Kemlipur",
  nameNepali: "केम्लीपुर",
  tagline: "A forest village in the Dhanusha hills",
  location: "Dhalkebar · Dhanusha · Nepal",
  locationShort: "Dhanusha",
  mapImage: "/images/map/kemlipur-map.png",
  accentColor: "#4D8C57",    // deep forest green — samudayik ban
  footerAttribution: "Kemlipur Village · Dhalkebar, Dhanusha, Nepal",
  loadingLabel: "Kemlipur",
};

export const village: VillageConfig = kemlipur;
