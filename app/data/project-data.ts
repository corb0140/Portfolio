import BefarmWellImage from "~/assets/imgs/befarmwell.jpg";
import Pokedash from "~/assets/imgs/pokedash.png";

export const techColors = {
  JavaScript: "text-tech-javascript",
  TypeScript: "text-tech-typescript",
  "Node.js": "text-tech-nodejs",
  "Express.js": "text-tech-expressjs",
  "React Native Expo": "text-tech-expo",
  "Google Cloud Platform":
    "bg-linear-to-r from-tech-gcp-blue to-tech-gcp-red bg-clip-text text-transparent",
  "Firebase Cloud Messaging":
    "bg-linear-to-r from-tech-firebase-orange to-tech-firebase-yellow bg-clip-text text-transparent",
  "Tailwind CSS": "text-tech-tailwindcss",
  "Poke API": "text-tech-api",
  React: "text-tech-react",
  PostgreSQL: "text-tech-postgresql",
  Redux:
    "bg-linear-to-br from-tech-redux-light to-tech-redux-dark bg-clip-text text-transparent",
  "Redux Toolkit":
    "bg-linear-to-br from-tech-redux-light to-tech-redux-dark bg-clip-text text-transparent",
  RevenueCat:
    "bg-linear-to-r from-tech-revenuecat-pink to-tech-revenuecat-orange bg-clip-text text-transparent",
  CloudFlare: "text-tech-cloudflare",
  "RESTful API":
    "bg-linear-to-r from-tech-restfulapi-blue to-tech-restfulapi-green bg-clip-text text-transparent",
  TanStack:
    "bg-linear-to-r from-tech-tanstack-light to-tech-tanstack-dark bg-clip-text text-transparent",
  GSAP: "text-tech-gsap",
  Motion: "text-tech-motion",
  ReCharts: "text-tech-recharts",
} as const;

export type Project = {
  name: string;
  description: string;
  image: string;
  technologies: {
    name: keyof typeof techColors;
  }[];
  category: string;
  AppStoreLink?: string;
  PlayStoreLink?: string;
  demoLink?: string;
  githubLink?: string;
};

export const projects: Project[] = [
  {
    name: "BeFarmWell",
    description:
      "BeFarmWell™ is a mental wellness app created to support farmers and ranchers with simple tools, accessible resources, and community connection.",
    image: BefarmWellImage,
    technologies: [
      { name: "JavaScript" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "PostgreSQL" },
      { name: "Google Cloud Platform" },
      { name: "RESTful API" },
      { name: "React Native Expo" },
      { name: "TypeScript" },
      { name: "Redux Toolkit" },
      { name: "Firebase Cloud Messaging" },
      { name: "RevenueCat" },
      { name: "CloudFlare" },
    ],
    AppStoreLink: "https://apps.apple.com/ca/app/befarmwell/id6768093472",
    PlayStoreLink:
      "https://play.google.com/store/apps/details?id=com.befarmwell.app&pli=1",
    category: "mobile",
  },
  {
    name: "PokéDash",
    description:
      "PokeDash is an interactive Pokémon web application featuring a searchable and filterable Pokédex, a Pokémon guessing game, Pokémon comparison tools, and an analytics dashboard.",
    image: Pokedash,
    technologies: [
      { name: "TypeScript" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Poke API" },
      { name: "TanStack" },
      { name: "GSAP" },
      { name: "ReCharts" },
    ],
    category: "web",
    demoLink: "https://pokedash-black.vercel.app/",
    githubLink: "https://github.com/corb0140/pokedash",
  },
];
