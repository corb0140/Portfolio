import { useMemo, useState } from "react";
import { projects, techColors } from "~/data/project-data";
import ProjectBG from "~/assets/imgs/project-bg.png";
import { Icon } from "@iconify/react";

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

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[50vh] max-h-screen flex items-center justify-center overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <img
          src={ProjectBG}
          alt="Project page banner image"
          className="absolute w-full h-full object-cover"
        />

        {/* HERO CONTENT */}
        <section className="relative min-h-[50vh] max-h-screen flex items-center justify-center overflow-hidden">
          <div className="relative z-10 w-full min-h-[50vh] px-6 text-center text-white flex flex-col items-center justify-center">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider">
                Projects
              </h1>

              <p className="mt-4 text-sm md:text-xl text-muted">
                Things I've built personally and professionally.
              </p>
            </div>

            <div className="absolute bottom-6 left-0 w-full flex flex-wrap justify-center gap-3 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => handleTabChange(tab.value)}
                  className={`border rounded-lg px-5 py-2 ipad:px-6 ipad:py-3 text-xs ipad:text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                    activeTab === tab.value
                      ? "text-white shadow-md"
                      : "text-info-text hover:bg-info-text/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>
      </section>

      {/* PROJECTS */}
      <section className="mt-10 px-6 pb-20 md:px-10 lg:px-20">
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

                <p className="text-sm text-muted">{project.description}</p>

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
