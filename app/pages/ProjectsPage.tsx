import { useMemo, useState } from "react";
import { projects, techColors } from "~/data/project-data";
import { Icon } from "@iconify/react";
import { ChevronDown } from "lucide-react";

type ProjectCategory = "all" | "web" | "mobile";

const tabs: { label: string; value: ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Web Apps", value: "web" },
  { label: "Mobile Apps", value: "mobile" },
];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("all");
  const [visibleCount, setVisibleCount] = useState(projects.length);

  const filteredProjects = useMemo(() => {
    if (activeTab === "all") {
      return projects;
    }

    return projects.filter((project) => project.category === activeTab);
  }, [activeTab]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleTabChange = (tab: ProjectCategory) => {
    setActiveTab(tab);
    setVisibleCount(6);
  };

  const hasMoreProjects = visibleCount < filteredProjects.length;

  const scrollToProjectSection = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="h-dvh">
      {/* HERO */}
      <section className="relative h-full w-full flex items-center justify-center overflow-hidden">
        {/* HERO CONTENT */}
        <section className="relative min-h-[50vh] max-h-screen flex flex-col items-center justify-center overflow-hidden">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider">
            Projects
          </h1>

          <p className="mt-4 text-xs font-light md:text-xl text-muted">
            Things I've built personally and professionally.
          </p>

          <div
            className="flex flex-col items-center gap-1 mt-10 cursor-pointer"
            onClick={scrollToProjectSection}
          >
            <span className="h-4 w-[0.5px] rounded-lg bg-linear-to-b from-blue via-pink to-purple" />
            <p className="font-light text-xs uppercase">scroll</p>
            <ChevronDown height={18} width={18} />
          </div>
        </section>
      </section>

      {/* PROJECTS */}
      <section
        className="h-dvh flex flex-col gap-6 px-6 md:px-10 lg:px-20"
        id="projects"
      >
        <div className="w-full flex flex-wrap justify-center gap-3 mt-10">
          {tabs.map((tab) => (
            <div
              className={`rounded-lg p-px ${
                activeTab === tab.value
                  ? "bg-linear-to-r from-pink to-cyan"
                  : "bg-muted"
              }`}
            >
              <button
                key={tab.value}
                onClick={() => handleTabChange(tab.value)}
                className="rounded-lg px-5 py-2 ipad:px-6 text-xs font-light uppercase tracking-wider bg-bg"
              >
                <span
                  className={
                    activeTab === tab.value
                      ? "bg-linear-to-r from-pink to-cyan bg-clip-text text-transparent"
                      : "text-muted"
                  }
                >
                  {tab.label}
                </span>
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <article
              key={index}
              className="flex flex-col group overflow-hidden rounded-2xl border border-muted/35 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* PROJECT IMAGE */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* PROJECT CONTENT */}
              <div className="flex flex-col flex-1 gap-4 p-6">
                <h2 className="text-xl font-bold text-info-text">
                  {project.name}
                </h2>

                <p className="text-sm text-muted min-h-20 max-h-25 overflow-y-auto overflow-hidden">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology.name}
                      className={`py-1 text-xs font-semibold ${
                        techColors[technology.name]
                      }`}
                    >
                      {technology.name}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex gap-5 mt-auto">
                  {[
                    {
                      label: "App Store",
                      url: project.AppStoreLink,
                      icon: "mdi:apple",
                      color: "text-blue",
                    },
                    {
                      label: "Play Store",
                      url: project.PlayStoreLink,
                      icon: "mdi:google-play",
                      color: "text-green",
                    },
                    {
                      label: "Demo",
                      url: project.demoLink,
                      icon: "mdi:external-link",
                      color: "text-purple",
                    },
                    {
                      label: "GitHub",
                      url: project.githubLink,
                      icon: "mdi:github",
                      color: "text-gray-500",
                    },
                  ]
                    .filter((link) => link.url)
                    .map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-sm ${link.color} font-bold flex items-center gap-1`}
                      >
                        <Icon icon={link.icon} className="h-4 w-4" />

                        <p className="leading-none">{link.label}</p>
                      </a>
                    ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* NO PROJECTS */}
        {visibleProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-gray-500">
              No projects found in this category.
            </p>
          </div>
        )}

        {/* LOAD MORE */}
        {hasMoreProjects && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setVisibleCount((count) => count + 6)}
              className="rounded-lg bg-info-text px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105"
            >
              Load More Projects
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
