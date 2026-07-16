import type { Route } from "./+types/welcome";
import WelcomePage from "~/pages/WelcomePage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Portfolio" },
    { name: "description", content: "Welcome to my portfolio!" },
  ];
}

export default function Welcome() {
  return <WelcomePage />;
}
