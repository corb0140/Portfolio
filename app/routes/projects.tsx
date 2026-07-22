import ProjectsPage from "~/pages/ProjectsPage";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Home" }];
}

export default function Home() {
  return <ProjectsPage />;
}
