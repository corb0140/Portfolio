import Banner from "~/assets/imgs/banner.png";
import Me from "~/assets/imgs/me.jpg";
import { Link } from "react-router";
import { ArrowRight, Infinity, ExternalLink } from "lucide-react";
import { projects, techColors } from "~/data/project-data";
import { Icon } from "@iconify/react";

export default function HomeScreen() {
  const baseLinkStyle =
    "text-center text-white text-[14px] font-bold p-2 rounded-md";

  return (
    <div className="relative overflow-hidden">
      {/* BANNER SECTION */}
      <section className="relative h-80 ipad:top-25 laptop:top-15 border-b border-muted/15">
        <img
          src={Banner}
          alt="Banner"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute top-2 p-2 max-w-60 h-full flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p>Hello,</p>
            <h1>
              I'm{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-blue to-purple">
                Mark Corbin
              </span>
              .
            </h1>
            <p>Junior Software Developer</p>
          </div>

          <p>
            I build clean, accessible, and modern web and mobile applications.
          </p>

          <div className="flex flex-col gap-4 w-3/4">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-linear-to-r from-blue to-purple rounded-md blur-md opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              <Link
                to="/projects"
                className={
                  baseLinkStyle +
                  " relative block bg-linear-to-r from-blue to-purple"
                }
              >
                View Projects
              </Link>
            </div>

            <Link
              to="/contact"
              className={baseLinkStyle + " border border-gray"}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section className="relative h-auto p-8 grid grid-cols-1 ipad:grid-cols-2 gap-5">
        <div className="border border-muted/75 rounded-md h-60 w-full">
          <img
            src={Me}
            alt="Photo of Mark Corbin"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">About Me</h2>
            <div className="h-0.5 w-1/4 rounded-md bg-linear-to-r from-blue to-purple" />
          </div>

          <p>
            I'm a passionate junior software developer with a strong foundation
            in web and mobile technologies and a keen interest in creating
            innovative solutions.
          </p>

          <p>
            When I'm not coding, you can find me exploring new technologies, or
            playing video games. I thrive in collaborative environments and am
            always eager to learn and grow as a developer.
          </p>
        </div>

        <div className="flex justify-between gap-2">
          {[
            { id: 1, title: "Projects", number: 3 },
            { id: 2, title: "Technologies", number: 10 },
            { id: 3, title: "Always Learning" },
          ].map((item) => (
            <div
              key={item.id}
              className="border border-muted/35 min-h-20 min-w-0 flex-1 flex flex-col items-center text-white p-3 rounded-md"
            >
              <span className="relative inline-flex items-center justify-center">
                {!item.number ? (
                  <>
                    <div className="absolute inset-2 bg-blue blur-sm opacity-50" />
                    <Infinity className="relative text-blue h-8 w-8" />
                  </>
                ) : (
                  <p className="text-2xl font-bold">{item.number + "+"}</p>
                )}
              </span>

              <div className="h-full w-full flex items-center justify-center">
                <p className="text-[12px] font-medium text-center">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="relative h-auto p-8 grid grid-cols-1 ipad:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <div className="h-0.5 w-1/4 rounded-md bg-linear-to-r from-blue to-purple" />
        </div>

        <Link
          to="#banner"
          className="flex items-center w-fit text-white font-bold py-2 rounded-md"
        >
          <p className="text-sm text-blue">View All Projects</p>
          <ArrowRight className="inline-block ml-2 h-4 w-4 text-blue" />
        </Link>

        {projects.slice(0, 2).map((project) => (
          <div
            key={project.name}
            className="flex flex-col gap-2 border border-muted/30 rounded-md p-4"
          >
            <div className="h-40 rounded-md overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>

            <p>{project.name}</p>

            {/* DESCRIPTION */}
            <p className="text-sm text-muted">{project.description}</p>

            {/* TECHNOLOGIES PROJECTS CARD */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech.name}
                  className={`text-xs font-medium p-2 rounded-md border border-muted/15 ${
                    techColors[tech.name as keyof typeof techColors] ??
                    "text-white"
                  }`}
                >
                  {tech.name}
                </span>
              ))}
            </div>

            {/* LINKS */}
            <div className="flex gap-5 mt-4 ml-1">
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
        ))}
      </section>

      {/* TECHNOLOGIES */}
      <section></section>
    </div>
  );
}
