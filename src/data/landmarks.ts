import { Landmark } from "@/types";
import { geoToPlane } from "@/lib/geoUtils";

export const landmarks: Omit<Landmark, "_id">[] = [
  {
    name: "Shree Rastriya Aadharbhut Vidhyalaya Kemlipur",
    nepaliName: "श्री राष्ट्रिय आधारभूत विद्यालय केम्लीपुर",
    description:
      "Established in 2037 B.S., this community school has been the foundation of education in Kemlipur, offering classes up to Grade 8 (Basic Level Examination). It has shaped generations of students from the village and surrounding areas.",
    position: geoToPlane(26.940287424958523, 85.96619773850125),
    coverImage: "/images/landmarks/school.jpg",
  },
  {
    name: "Kemlipur Bal Club",
    nepaliName: "केम्लीपुर बाल क्लब",
    description:
      "The youth club of Kemlipur is the hub of community energy. It organizes cultural programs, sports tournaments, and community service activities that bring the village together and keep the spirit of youth alive.",
    position: geoToPlane(26.946699957369535, 85.97275832071226),
    coverImage: "/images/landmarks/youth-club.jpg",
  },
  {
    name: "Kemlipur Chautari",
    nepaliName: "केम्लीपुर चौतारी",
    description:
      "The social heart of Kemlipur. Villagers gather at the Chautari under the shade of a grand Peepal tree near the temple to share stories, rest, and discuss community matters. The ancient Peepal tree adds a timeless, sacred character to this beloved gathering spot.",
    position: geoToPlane(26.946769700464408, 85.97210982811345),
    coverImage: "/images/landmarks/chautari.jpg",
  },
  {
    name: "Kemlipur Sports Ground",
    nepaliName: "केम्लीपुर खेल मैदान",
    description:
      "Kemlipur's sports ground is where the village comes alive with competition and camaraderie. Cricket, football, and volleyball matches are held here regularly, drawing players and spectators from across the village.",
    position: geoToPlane(26.94778634896064, 85.97056991926327),
    coverImage: "/images/landmarks/sports-ground.jpg",
  },
  {
    name: "Kemlipur Mandir",
    nepaliName: "केम्लीपुर मन्दिर",
    description:
      "A Hindu temple that stands as the spiritual center of Kemlipur. All major Hindu festivals including Dashain, Tihar, and Teej are celebrated here with great devotion. A large, ancient Peepal tree stands nearby, adding sacred beauty and shade to the temple grounds.",
    position: geoToPlane(26.94685381199779, 85.97243081989205),
    coverImage: "/images/landmarks/temple.jpg",
  },
  {
    name: "Kemlipur Sahakari Sanstha",
    nepaliName: "केम्लीपुर सहकारी संस्था",
    description:
      "A community cooperative where villagers save money together on a weekly basis. It provides financial support and a safety net for local families, strengthening the economic foundation of Kemlipur from within.",
    position: geoToPlane(26.946575730465362, 85.97193632356449),
    coverImage: "/images/landmarks/sahakari.jpg",
  },
  {
    name: "Kemlipur View Tower",
    nepaliName: "केम्लीपुर भ्यू टावर",
    description:
      "A two-story view tower perched on a hill, offering a breathtaking panoramic view of almost every house in Kemlipur village. Though partially framed by trees, the tower gives visitors a rare bird's eye perspective of the entire village and its surrounding landscape.",
    position: geoToPlane(26.947954054276664, 85.97435536842781),
    coverImage: "/images/landmarks/view-tower.jpg",
  },
  {
    name: "Sharma Nursery",
    nepaliName: "शर्मा नर्सरी",
    description:
      "Run by the Sharma family, this mango nursery is a green gem of Kemlipur. It cultivates and supplies mango saplings and is a testament to the agricultural spirit of the village.",
    position: geoToPlane(26.946707896016633, 85.97810102799755),
    coverImage: "/images/landmarks/mango-nursery.jpg",
  },
  {
    name: "Dhalkebar Pokhariya",
    nepaliName: "धलकेबार पोखरिया",
    description:
      "A serene and sacred Hindu temple situated at the center of a beautiful pond. Dhalkebar Pokhariya is a beloved spot for worship, picnics, and peaceful reflection. The sight of the temple surrounded by water makes it one of the most unique and beautiful landmarks in the region.",
    position: geoToPlane(26.95916063554474, 85.96960736119121),
    coverImage: "/images/landmarks/pokharia.jpg",
  },
  {
    name: "Pakhapokhari Kemlipakha",
    nepaliName: "पाखापोखरी केम्लीपाखा",
    description:
      "A calm and peaceful pond nestled in the natural landscape of Kemlipur. Pakhapokhari is a quiet retreat where villagers come to relax and connect with nature.",
    position: geoToPlane(26.947058906024296, 85.97176099173137),
    coverImage: "/images/landmarks/pakhapokhari.jpg",
  },
  {
    name: "Kemlipur Samudayik Ban",
    nepaliName: "केम्लीपुर सामुदायिक वन",
    description:
      "A community forest managed collectively by the villagers of Kemlipur. The forest office oversees conservation and sustainable use of this green resource, which plays a vital role in the local ecosystem.",
    position: geoToPlane(26.947809847415925, 85.9683547386873),
    coverImage: "/images/landmarks/samudayik-ban.jpg",
  },
  {
    name: "Dundkholi Picnic Spot",
    nepaliName: "डुन्डखोली पिकनिक स्पट",
    description:
      "A popular picnic destination near Dhalkebar Pokhariya, featuring two scenic ponds surrounded by natural beauty. Dundkholi is a favourite escape for families and friends looking to enjoy nature and spend quality time together.",
    position: geoToPlane(26.958609398581466, 85.97362869006524),
    coverImage: "/images/landmarks/dundkholi.jpg",
  },
];

export const VILLAGE_CENTER = geoToPlane(26.9475, 85.9715);