import { geoToPlane } from "@/lib/geoUtils";

type LandmarkSeed = {
  name: string;
  nepaliName: string;
  description: string;
  position: [number, number, number];
  lat: number;
  lng: number;
  coverImage: string;
};

function makeLandmark(
  name: string,
  nepaliName: string,
  description: string,
  lat: number,
  lng: number,
  coverImage: string
): LandmarkSeed {
  return { name, nepaliName, description, position: geoToPlane(lat, lng), lat, lng, coverImage };
}

export const landmarks: LandmarkSeed[] = [
  makeLandmark(
    "Shree Rastriya Aadharbhut Vidhyalaya Kemlipur",
    "श्री राष्ट्रिय आधारभूत विद्यालय केम्लीपुर",
    "Established in 2037 B.S., this community school has been the foundation of education in Kemlipur, offering classes up to Grade 8 (Basic Level Examination). It has shaped generations of students from the village and surrounding areas.",
    26.940287424958523, 85.96619773850125,
    "/images/landmarks/school.jpg"
  ),
  makeLandmark(
    "Kemlipur Bal Club",
    "केम्लीपुर बाल क्लब",
    "The youth club of Kemlipur is the hub of community energy. It organizes cultural programs, sports tournaments, and community service activities that bring the village together and keep the spirit of youth alive.",
    26.946699957369535, 85.97275832071226,
    "/images/landmarks/youth-club.jpg"
  ),
  makeLandmark(
    "Kemlipur Chautari",
    "केम्लीपुर चौतारी",
    "The social heart of Kemlipur. Villagers gather at the Chautari under the shade of a grand Peepal tree near the temple to share stories, rest, and discuss community matters.",
    26.946769700464408, 85.97210982811345,
    "/images/landmarks/chautari.jpg"
  ),
  makeLandmark(
    "Kemlipur Sports Ground",
    "केम्लीपुर खेल मैदान",
    "Kemlipur's sports ground is where the village comes alive with competition and camaraderie. Cricket, football, and volleyball matches are held here regularly.",
    26.94778634896064, 85.97056991926327,
    "/images/landmarks/sports-ground.jpg"
  ),
  makeLandmark(
    "Kemlipur Mandir",
    "केम्लीपुर मन्दिर",
    "A Hindu temple that stands as the spiritual center of Kemlipur. All major Hindu festivals including Dashain, Tihar, and Teej are celebrated here with great devotion.",
    26.94685381199779, 85.97243081989205,
    "/images/landmarks/temple.jpg"
  ),
  makeLandmark(
    "Kemlipur Sahakari Sanstha",
    "केम्लीपुर सहकारी संस्था",
    "A community cooperative where villagers save money together on a weekly basis. It provides financial support and a safety net for local families.",
    26.946575730465362, 85.97193632356449,
    "/images/landmarks/sahakari.jpg"
  ),
  makeLandmark(
    "Kemlipur View Tower",
    "केम्लीपुर भ्यू टावर",
    "A two-story view tower perched on a hill, offering a breathtaking panoramic view of almost every house in Kemlipur village.",
    26.947954054276664, 85.97435536842781,
    "/images/landmarks/view-tower.jpg"
  ),
  makeLandmark(
    "Sharma Nursery",
    "शर्मा नर्सरी",
    "Run by the Sharma family, this mango nursery is a green gem of Kemlipur. It cultivates and supplies mango saplings and is a testament to the agricultural spirit of the village.",
    26.946707896016633, 85.97810102799755,
    "/images/landmarks/mango-nursery.jpg"
  ),
  makeLandmark(
    "Dhalkebar Pokhariya",
    "धलकेबार पोखरिया",
    "A serene and sacred Hindu temple situated at the center of a beautiful pond. Dhalkebar Pokhariya is a beloved spot for worship, picnics, and peaceful reflection.",
    26.95916063554474, 85.96960736119121,
    "/images/landmarks/pokharia.jpg"
  ),
  makeLandmark(
    "Pakhapokhari Kemlipakha",
    "पाखापोखरी केम्लीपाखा",
    "A calm and peaceful pond nestled in the natural landscape of Kemlipur. Pakhapokhari is a quiet retreat where villagers come to relax and connect with nature.",
    26.947058906024296, 85.97176099173137,
    "/images/landmarks/pakhapokhari.jpg"
  ),
  makeLandmark(
    "Kemlipur Samudayik Ban",
    "केम्लीपुर सामुदायिक वन",
    "A community forest managed collectively by the villagers of Kemlipur. The forest office oversees conservation and sustainable use of this green resource.",
    26.947809847415925, 85.9683547386873,
    "/images/landmarks/samudayik-ban.jpg"
  ),
  makeLandmark(
    "Dundkholi Picnic Spot",
    "डुन्डखोली पिकनिक स्पट",
    "A popular picnic destination near Dhalkebar Pokhariya, featuring two scenic ponds surrounded by natural beauty.",
    26.958609398581466, 85.97362869006524,
    "/images/landmarks/dundkholi.jpg"
  ),
];

export const VILLAGE_CENTER = geoToPlane(26.9475, 85.9715);