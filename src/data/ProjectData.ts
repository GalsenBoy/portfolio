export type Project = {
  image: string;
  title: string;
  tagline: string;
  kind: string;
  tags: string[];
  links: { label: string; href: string }[];
  alt: string;
  surface: string;
  accent: string;
  status?: string;
};

export const projects: Project[] = [
  {
    image: "/jadr.webp",
    title: "Jadr",
    tagline: "Apprendre l'arabe par le vocabulaire du Coran.",
    kind: "App mobile",
    tags: ["iOS", "Android", "Éducation"],
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.jadr.app" },
      { label: "App Store", href: "https://apps.apple.com/fr/app/jadr-arabe-du-coran/id6799447359" },
    ],
    alt: "Jadr - Application pour apprendre l'arabe par le vocabulaire du Coran",
    surface: "#0f3524",
    accent: "#e9c46a",
  },
  {
    image: "/bunker.webp",
    title: "Bunker",
    tagline: "Défends ton bunker contre la horde.",
    kind: "Jeu mobile",
    tags: ["Jeu", "Action"],
    links: [],
    alt: "Bunker - Jeu mobile : défends ton bunker contre la horde",
    surface: "#211843",
    accent: "#ffd23f",
    status: "Bientôt",
  },
  {
    image: "/salat.webp",
    title: "Salat Lock",
    tagline: "Prie d'abord, scroll après. Ton temps d'écran devient un moment de connexion spirituelle.",
    kind: "App mobile",
    tags: ["iOS", "Android", "Temps d'écran"],
    links: [
      { label: "App Store", href: "https://apps.apple.com/app/id6758557464" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.galsenboy.salatlock" },
      { label: "Site", href: "https://salatlock.net/" },
    ],
    alt: "Salat Lock - Application de rappel de prière pour les musulmans",
    surface: "#0c1a1d",
    accent: "#10b981",
  },
  {
    image: "/red.webp",
    title: "RedFlag Detector",
    tagline: "L'IA qui repère les red flags dans tes conversations, avant qu'il soit trop tard.",
    kind: "App mobile",
    tags: ["iOS", "Android", "IA"],
    links: [
      { label: "App Store", href: "https://apps.apple.com/fr/app/redflag-detector/id6756208551" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.bilaly.redsignal" },
      { label: "Site", href: "https://redflagdetector.app/" },
    ],
    alt: "RedFlag Detector - Application de détection de drapeaux rouges dans les relations amoureuses",
    surface: "#360c17",
    accent: "#ff4d6d",
  },
  {
    image: "/taqwa.webp",
    title: "Taqwa Planner",
    tagline: "Un compagnon pour tes prières, le Ramadan et l'apprentissage de l'Islam.",
    kind: "App mobile",
    tags: ["iOS", "Android", "Planning"],
    links: [
      { label: "App Store", href: "https://apps.apple.com/fr/app/taqwa-planner/id6739075688" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.galsenboy.taqwaplanner" },
      { label: "Site", href: "https://taqwa-planner.vercel.app/" },
    ],
    alt: "Taqwa Planner - Application de planification pour les musulmans",
    surface: "#18301f",
    accent: "#8fd19e",
  },
];
