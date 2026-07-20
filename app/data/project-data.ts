import BefarmWellImage from "~/assets/imgs/befarmwell.jpg";
import Banner2 from "~/assets/imgs/banner-2.png";

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
    "bg-linear-to-r from-tech-restapi-blue to-tech-restapi-green bg-clip-text text-transparent",
} as const;

export type Project = {
  name: string;
  description: string;
  image: string;
  technologies: {
    name: keyof typeof techColors;
  }[];
  AppStoreLink?: string;
  PlayStoreLink?: string;
  demoLink?: string;
  githubLink?: string;
};

export const projects: Project[] = [
  {
    name: "BefarmWell",
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
    AppStoreLink: "https://apps.apple.com/us/app/befarmwell/id1661871680",
    PlayStoreLink:
      "https://play.google.com/store/apps/details?id=com.befarmwell.app",
  },
  {
    name: "Pokemon Guessing Game",
    description:
      "A simple web-based game where players guess the name of a Pokemon based on its silhouette.",
    image: Banner2,
    technologies: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Poke API" },
      { name: "Redux Toolkit" },
    ],
    demoLink: "https://pokemon-guessing-game.vercel.app/",
    githubLink: "https://github.com/yourusername/pokemon-guessing-game",
  },
];
