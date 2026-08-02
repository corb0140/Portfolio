import BefarmWellImage from "~/assets/imgs/befarmwell.jpg";
import Pokedash from "~/assets/imgs/pokedash.png";
import PokemonDashbaord from "~/assets/imgs/pokemon-dashboard.png";
import PokemonGame from "~/assets/imgs/pokemon-game.png";
import Pokedex from "~/assets/imgs/pokedex.png";
import BefarmwellHome from "~/assets/imgs/befarmwell-home.jpg";
import BefarmwellResources from "~/assets/imgs/befarmwell-resources.jpg";
import BefarmwellCommunity from "~/assets/imgs/befarmwell-community.jpg";
import Resumaker from "~/assets/imgs/resumaker.png";
import ResumakerResumes from "~/assets/imgs/resumaker-resumes.png";
import ResumakerSavePDF from "~/assets/imgs/resumaker-save-pdf.png";
import ResumakerGenerateResume from "~/assets/imgs/resumaker-generate-resume.png";

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
  SQLite: "text-tech-sqlite",
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
  Vite: "text-tech-vite",
  "React Router": "text-tech-reactrouter",
  "Google AI Studio":
    "bg-linear-to-r from-tech-gemini-blue to-tech-gemini-purple bg-clip-text text-transparent",
} as const;

export type Project = {
  name: string;
  description: string;
  image: string;

  category: string;

  technologies: {
    name: keyof typeof techColors;
    icon: string;
  }[];

  /*
   * Project Detail
   */
  type?: string;
  role?: string;
  duration?: string;
  status?: "Completed" | "In_progress";

  overview?: string[];

  features?: {
    title: string;
    description: string;
  }[];

  screenshots?: {
    title: string;
    image: string;
  }[];

  process?: {
    title: string;
    description: string;
  }[];

  challenge?: string;
  solution?: string;

  /*
   * Project Links
   */
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

    category: "mobile",

    type: "Mobile Application",
    role: "Full-Stack Developer",
    duration: "6 Months",
    status: "Completed",

    overview: [
      "BeFarmWell™ is a mental wellness application created to support farmers and ranchers with simple tools, accessible resources, and community connection.",

      "The application provides users with accessible mental wellness resources designed specifically around the unique challenges faced by agricultural communities.",

      "The project includes a mobile application, backend services, cloud infrastructure, user subscriptions, and push notification functionality.",
    ],

    technologies: [
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Express.js", icon: "simple-icons:express" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "Google Cloud Platform", icon: "logos:google-cloud" },
      { name: "RESTful API", icon: "mdi:api" },
      { name: "React Native Expo", icon: "simple-icons:expo" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Redux Toolkit", icon: "logos:redux" },
      { name: "Firebase Cloud Messaging", icon: "logos:firebase" },
      { name: "RevenueCat", icon: "simple-icons:revenuecat" },
      { name: "CloudFlare", icon: "logos:cloudflare" },
    ],

    features: [
      {
        title: "Mental Wellness Resources",
        description:
          "Provides accessible wellness resources designed to support farmers and ranchers.",
      },
      {
        title: "User Authentication",
        description:
          "Secure user accounts and authentication for personalized application experiences.",
      },
      {
        title: "Push Notifications",
        description:
          "Firebase Cloud Messaging provides timely notifications and updates to users.",
      },
      {
        title: "Subscription Management",
        description:
          "RevenueCat handles subscription management and in-app purchase functionality.",
      },
    ],

    screenshots: [
      {
        title: "Home",
        image: BefarmwellHome,
      },
      {
        title: "Resources",
        image: BefarmwellResources,
      },
      {
        title: "Community",
        image: BefarmwellCommunity,
      },
    ],

    process: [
      {
        title: "Planning",
        description:
          "Defined application requirements and planned the architecture for the mobile and backend systems.",
      },
      {
        title: "Development",
        description:
          "Built the mobile application using React Native Expo and TypeScript.",
      },
      {
        title: "Integration",
        description:
          "Integrated RESTful APIs, PostgreSQL, Firebase Cloud Messaging, and RevenueCat.",
      },
      {
        title: "Testing & Deployment",
        description:
          "Tested application functionality and prepared the application for App Store and Google Play deployment.",
      },
    ],

    challenge:
      "Building a reliable mobile application that connected multiple backend services while maintaining a consistent experience across iOS and Android.",

    solution:
      "Implemented a structured backend architecture using Node.js and Express.js, combined with PostgreSQL and cloud services to provide reliable data management and application functionality.",

    AppStoreLink: "https://apps.apple.com/ca/app/befarmwell/id6768093472",

    PlayStoreLink:
      "https://play.google.com/store/apps/details?id=com.befarmwell.app&pli=1",
  },
  {
    name: "PokéDash",

    description:
      "PokeDash is an interactive Pokémon web application featuring a searchable and filterable Pokédex, a Pokémon guessing game, Pokémon comparison tools, and an analytics dashboard.",

    image: Pokedash,

    category: "web",

    type: "Web Application",
    role: "Frontend Developer",
    duration: "2 Weeks",
    status: "Completed",

    overview: [
      "PokéDash is an interactive Pokémon web application designed to provide users with multiple ways to explore and interact with Pokémon data.",

      "The application includes a searchable and filterable Pokédex, an interactive Pokémon guessing game, comparison tools, and an analytics dashboard.",

      "The project focuses on creating an engaging experience while demonstrating API integration, data visualization, animation, and responsive interface development.",
    ],

    technologies: [
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "React", icon: "logos:react" },
      { name: "Vite", icon: "logos:vitejs" },
      { name: "React Router", icon: "logos:react-router" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "SQLite", icon: "logos:sqlite" },
      { name: "Poke API", icon: "mdi:pokeball" },
      { name: "TanStack", icon: "simple-icons:tanstack" },
      { name: "GSAP", icon: "logos:greensock" },
      { name: "ReCharts", icon: "mdi:chart-line" },
    ],

    features: [
      {
        title: "Pokédex",
        description:
          "Search and filter through Pokémon using data retrieved from the PokéAPI.",
      },
      {
        title: "Pokémon Guessing Game",
        description:
          "An interactive guessing game where users test their knowledge of Pokémon.",
      },
      {
        title: "Pokémon Comparison",
        description: "Compare Pokémon statistics and information side by side.",
      },
      {
        title: "Analytics Dashboard",
        description:
          "Visualize Pokémon data and statistics through interactive charts and graphs.",
      },
    ],

    screenshots: [
      {
        title: "Pokédex",
        image: Pokedex,
      },
      {
        title: "Pokémon Guessing Game",
        image: PokemonGame,
      },
      {
        title: "Analytics Dashboard",
        image: PokemonDashbaord,
      },
    ],

    process: [
      {
        title: "Planning",
        description:
          "Defined the application's core features and designed the overall user experience.",
      },
      {
        title: "Development",
        description:
          "Built the application using React and TypeScript with reusable components.",
      },
      {
        title: "API Integration",
        description:
          "Integrated the PokéAPI and TanStack tools for data fetching and management.",
      },
      {
        title: "Testing & Deployment",
        description:
          "Tested the application across different screen sizes and deployed it to Vercel.",
      },
    ],

    challenge:
      "Managing large amounts of Pokémon data while keeping the application responsive and providing smooth filtering, searching, and data visualization.",

    solution:
      "Used TanStack for efficient data management and implemented reusable React components with optimized API queries and responsive layouts.",

    demoLink: "https://pokedash-black.vercel.app/",

    githubLink: "https://github.com/corb0140/pokedash",
  },
  {
    name: "Resumaker",

    description:
      "Resumaker is an AI resume builder that generates a tailored resume from a saved profile, using Google Gemini to match relevant experience and skills to each job description.",

    image: Resumaker,

    category: "web",

    type: "Web Application",
    role: "Frontend Developer",
    duration: "3 Weeks",
    status: "Completed",

    overview: [
      "Resumaker lets a user build a profile once — education, experience, skills, contact info, and links — then paste any job description to generate a resume tailored to that specific role.",

      "Google Gemini reads the job description alongside the candidate's profile and selects only the skills and experience relevant to that role, rewriting achievement bullets to emphasize fit rather than just listing everything the candidate has ever done.",

      "The project includes a React front end, a serverless API route for AI generation, and fully local data storage — no user data ever leaves the browser except the prompt sent to Gemini at generation time.",
    ],

    technologies: [
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "React", icon: "logos:react" },
      { name: "Vite", icon: "logos:vitejs" },
      { name: "React Router", icon: "logos:react-router" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "SQLite", icon: "logos:sqlite" },
      { name: "TanStack", icon: "simple-icons:tanstack" },
      { name: "Google AI Studio", icon: "logos:google-gemini" },
    ],

    features: [
      {
        title: "Profile Builder",
        description:
          "One-time entry of personal info, education, experience, and skills, saved locally.",
      },
      {
        title: "AI-Tailored Generation",
        description:
          "Gemini rewrites the summary and filters skills/experience down to what's relevant for the specific job description pasted in.",
      },
      {
        title: "Local-First Storage",
        description:
          "All profile and resume data is stored in a browser-side SQLite database — nothing persists on a server.",
      },
      {
        title: "Print-Ready Export",
        description:
          "Generated resumes render in a clean, ATS-friendly format with a one-click Print/Save-as-PDF button.",
      },
    ],

    screenshots: [
      {
        title: "Resume Generation",
        image: ResumakerGenerateResume,
      },
      {
        title: "Resume Preview",
        image: ResumakerResumes,
      },
      {
        title: "Save as PDF",
        image: ResumakerSavePDF,
      },
    ],

    process: [
      {
        title: "Planning",
        description:
          "Designed the resume template format and reviewed it before building the rest of the app around it.",
      },
      {
        title: "Development",
        description:
          "Built the profile forms, local SQLite data layer, and resume rendering with React, TypeScript, and Tailwind CSS.",
      },
      {
        title: "AI Integration",
        description:
          "Built a serverless API route that sends the candidate profile and job description to Gemini with a strict JSON schema, ensuring tailored, non-fabricated output.",
      },
      {
        title: "Testing & Deployment",
        description:
          "Tested the application across different screen sizes and deployed it to Vercel.",
      },
    ],

    challenge:
      "Getting an LLM to reliably tailor a resume to a specific job — filtering out irrelevant skills and past jobs while never fabricating experience the candidate doesn't have.",

    solution:
      "Used Gemini's structured JSON output mode with an explicit schema and prompt rules, so the model can only select and rephrase facts already in the candidate's profile rather than inventing new ones.",

    demoLink: "https://resumaker-mu.vercel.app/",
    githubLink: "https://github.com/corb0140/resumaker",
  },
];
