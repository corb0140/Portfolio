import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Me from "~/assets/imgs/me.jpg";
import { Link } from "react-router";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  FolderGit2,
  Layers,
  Sparkles,
} from "lucide-react";
import { projects, techColors } from "~/data/project-data";
import type { Project } from "~/data/project-data";
import { technologies } from "~/data/technologies";
import { Icon } from "@iconify/react";
import { socialLinks } from "~/data/social-links";
import ProjectModal from "~/components/ProjectModal";

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs uppercase tracking-[4px] text-blue font-medium">
        {eyebrow}
      </span>
      <h2 className="text-3xl laptop:text-4xl font-bold">{title}</h2>
    </div>
  );
}

const stats = [
  { id: 1, icon: FolderGit2, value: "2+", label: "Projects" },
  { id: 2, icon: Layers, value: "25+", label: "Technologies" },
  { id: 3, icon: Sparkles, value: null, label: "Always Learning" },
];

const projectLinks = (project: Project) =>
  [
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
  ].filter((link) => link.url);

const techEntries = Object.entries(technologies);

export default function HomeScreen() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const baseLinkStyle =
    "font-light text-center text-white text-[14px] font-bold p-3 laptop:px-6 rounded-md";

  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  // Hero content recedes and fades as it scrolls out; the glow/grid behind it
  // drift the opposite way, giving the layers independent depth.
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroContentY = useTransform(heroProgress, [0, 1], [0, 160]);
  const heroContentOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroGlowY = useTransform(heroProgress, [0, 1], [0, -140]);
  const heroGridY = useTransform(heroProgress, [0, 1], [0, 70]);

  // The about photo and its glow drift at different rates as the section
  // passes through the viewport.
  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });
  const aboutImageY = useTransform(aboutProgress, [0, 1], [-30, 30]);
  const aboutGlowY = useTransform(aboutProgress, [0, 1], [70, -70]);

  const { scrollYProgress: footerProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });
  const footerGlowY = useTransform(footerProgress, [0, 1], [50, -50]);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="relative overflow-x-clip">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative h-dvh overflow-hidden border-b border-white/10 flex flex-col items-center justify-center px-6"
      >
        <motion.div
          style={{ y: heroGridY }}
          className="pointer-events-none absolute inset-0"
        >
          <svg className="h-full w-full opacity-60">
            <defs>
              <pattern
                id="hero-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="rgba(255,255,255,0.03)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </motion.div>

        <motion.div
          style={{ y: heroGlowY }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-136 w-136 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-br from-blue/25 via-purple/15 to-transparent blur-3xl"
        />

        <motion.div
          style={{ y: heroContentY, opacity: heroContentOpacity }}
          className="relative flex flex-col items-center gap-3"
        >
          <p className="font-light ipad:text-xl laptop:text-2xl">Hello,</p>

          <h1 className="text-2xl ipad:text-4xl laptop:text-5xl desktop:text-7xl">
            I'm{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue to-purple">
              Mark Corbin
            </span>
            <motion.span
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1, rotateY: 360 }}
              transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
              className="relative inline-block"
            >
              .
            </motion.span>
          </h1>

          <p className="font-light">Software Developer</p>

          <span className="h-[0.5px] w-24 rounded-lg bg-linear-to-r from-blue via-pink to-purple" />

          <p className="font-light text-center text-muted">
            I build clean, accessible, modern web and mobile experiences.
          </p>

          <div className="flex gap-4 mt-4">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-linear-to-r from-blue to-purple rounded-md blur-md opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              <Link
                to="/projects"
                className={
                  baseLinkStyle +
                  " relative block bg-linear-to-r from-blue to-purple group-hover:scale-105 transition-all duration-300"
                }
              >
                View Projects
              </Link>
            </div>

            <Link
              to="/contact"
              className={
                baseLinkStyle +
                " border border-white/15 bg-white/5 backdrop-blur-md hover:scale-105 hover:border-white/30 transition-all duration-300"
              }
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: heroContentOpacity }}
          className="absolute bottom-8 flex flex-col items-center gap-1"
        >
          <span className="h-4 w-[0.5px] rounded-lg bg-linear-to-b from-blue via-pink to-purple" />
          <p className="font-light text-xs uppercase">scroll</p>
          <ChevronDown height={18} width={18} />
        </motion.div>
      </section>

      {/* ABOUT ME */}
      <section
        ref={aboutRef}
        className="relative overflow-hidden py-24 laptop:py-32 px-6 laptop:px-25 desktop:px-40 bg-bg"
      >
        <motion.div
          style={{ y: aboutGlowY }}
          className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-purple/15 blur-3xl"
        />

        <div className="relative grid grid-cols-1 laptop:grid-cols-[0.85fr_1.15fr] gap-14 laptop:gap-16 items-center">
          {/* PHOTO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-sm laptop:max-w-none"
          >
            <div className="absolute -inset-3 rotate-3 rounded-4xl bg-linear-to-br from-blue/30 via-purple/20 to-transparent blur-xl" />

            <motion.div
              style={{ y: aboutImageY }}
              className="relative -rotate-2 overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
            >
              <img
                src={Me}
                alt="Photo of Mark Corbin"
                className="aspect-4/5 w-full h-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-bg/50 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="absolute -bottom-5 right-2 laptop:right-auto laptop:-left-6 flex items-center gap-2 rounded-2xl border border-white/10 bg-bg-secondary/90 backdrop-blur-xl px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green" />
              </span>
              <span className="text-xs font-medium whitespace-nowrap">
                Open to work
              </span>
            </motion.div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <SectionHeading eyebrow="Who I am" title="About Me" />

            <p className="font-light leading-7 tracking-wide text-muted">
              Detail-oriented Software Developer with a strong technical
              foundation in frontend component architecture, responsive design,
              and full-stack web technologies. Holds a Diploma in Mobile
              Application Design & Development with a 3.98 GPA and hands-on
              experience engineering production applications. Proficient in
              HTML5, CSS, JavaScript (ES6+), TypeScript, React, Redux, and
              RESTful API integration, with expertise in UI design, agile
              development methodologies, and accessibility standards. Skilled in
              managing backend data flows with Node.js, Express, and relational
              databases to build reliable dynamic digital experiences.
            </p>

            <p className="font-light leading-7 tracking-wide text-muted">
              When I'm not coding, you can find me exploring new technologies,
              or playing video games. I thrive in collaborative environments and
              am always eager to learn and grow as a developer.
            </p>

            <div className="flex flex-wrap gap-3 mt-2">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/3 backdrop-blur-md px-4 py-3 transition-colors duration-300 hover:border-blue/40"
                >
                  <stat.icon className="h-5 w-5 text-blue shrink-0" />
                  <div className="flex flex-col leading-tight">
                    {stat.value && (
                      <span className="font-bold">{stat.value}</span>
                    )}
                    <span className="text-xs text-muted whitespace-nowrap">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="relative py-24 laptop:py-32 px-6 laptop:px-25 desktop:px-40 flex flex-col gap-14 bg-bg">
        <div className="flex flex-col laptop:flex-row laptop:justify-between laptop:items-end gap-5">
          <SectionHeading eyebrow="Selected work" title="Featured Projects" />

          <Link
            to="/projects"
            className="group flex items-center w-fit text-white font-bold py-2 rounded-md"
          >
            <p className="text-sm text-blue font-light">View All Projects</p>
            <ArrowRight className="inline-block ml-2 h-4 w-4 text-blue transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="flex flex-col gap-20 laptop:gap-24">
          {projects.slice(0, 2).map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`flex flex-col laptop:items-center gap-8 laptop:gap-14 ${
                i % 2 === 1 ? "laptop:flex-row-reverse" : "laptop:flex-row"
              }`}
            >
              <div
                onClick={() => openProject(project)}
                className="group relative w-full laptop:w-3/5 cursor-pointer"
              >
                <div className="absolute -inset-2 rounded-4xl bg-linear-to-br from-blue/20 to-purple/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative h-64 laptop:h-96 overflow-hidden rounded-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                  <span className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-bg-tertiary/80 backdrop-blur-sm px-3 py-1.5 text-xs font-bold">
                    Featured
                  </span>

                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="w-full laptop:w-2/5 flex flex-col gap-4">
                <p className="text-2xl font-bold">{project.name}</p>

                <p className="text-muted font-light leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech.name}
                      className={`text-xs font-medium p-2 rounded-md border border-white/10 ${
                        techColors[tech.name as keyof typeof techColors] ??
                        "text-white"
                      }`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>

                <div className="flex gap-5 mt-2">
                  {projectLinks(project).map((link) => (
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
            </motion.div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="relative py-24 laptop:py-32 flex flex-col gap-10 bg-bg overflow-hidden">
        <div className="px-6 laptop:px-25 desktop:px-40">
          <SectionHeading eyebrow="Tools & tech" title="Technologies" />
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative overflow-hidden mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex w-max gap-4 animate-marquee-left hover:[animation-play-state:paused]">
              {[...techEntries, ...techEntries].map(([name, tech], i) => (
                <div
                  key={`${name}-${i}`}
                  className="flex items-center gap-3 whitespace-nowrap rounded-xl border border-white/10 bg-white/3 backdrop-blur-md px-5 py-4"
                >
                  <Icon icon={tech.icon} width={22} height={22} />
                  <span className="text-sm font-light">{name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex w-max gap-4 animate-marquee-right hover:[animation-play-state:paused]">
              {[...techEntries, ...techEntries]
                .reverse()
                .map(([name, tech], i) => (
                  <div
                    key={`${name}-${i}`}
                    className="flex items-center gap-3 whitespace-nowrap rounded-xl border border-white/10 bg-white/3 backdrop-blur-md px-5 py-4"
                  >
                    <Icon icon={tech.icon} width={22} height={22} />
                    <span className="text-sm font-light">{name}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <motion.section
        ref={footerRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden border-t border-white/10 bg-bg"
      >
        <motion.div
          style={{ y: footerGlowY }}
          className="pointer-events-none absolute left-1/2 top-0 h-96 w-xl -translate-x-1/2 rounded-full bg-blue/10 blur-3xl"
        />

        {/* CTA */}
        <div className="relative flex flex-col items-center gap-6 px-6 py-20 laptop:py-28 text-center">
          <span className="text-xs uppercase tracking-[4px] text-blue font-medium">
            Let's work together
          </span>

          <h2 className="max-w-2xl text-3xl ipad:text-5xl font-bold">
            Got an idea? Let's build it.
          </h2>

          <p className="max-w-md font-light text-muted">
            I'm currently available for freelance work and new opportunities.
          </p>

          <div className="relative group mt-2">
            <div className="absolute -inset-0.5 rounded-full bg-linear-to-r from-blue to-purple opacity-60 blur-md transition-opacity duration-300 group-hover:opacity-90" />
            <Link
              to="/contact"
              className="relative flex items-center gap-2 rounded-full bg-linear-to-r from-blue to-purple px-8 py-3.5 font-bold text-white transition-transform duration-300 group-hover:scale-105"
            >
              Get In Touch
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* LINKS ROW */}
        <div className="relative border-t border-white/10">
          <div className="px-6 laptop:px-25 desktop:px-40 py-10 flex flex-col ipad:flex-row gap-8 ipad:items-center ipad:justify-between">
            <div className="flex flex-col gap-1">
              <p className="w-fit text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue to-purple">
                MC
              </p>
              <p className="text-sm font-light text-muted">
                Building the web, one line of code at a time.
              </p>
            </div>

            <nav className="flex gap-6">
              <Link
                to="/home"
                className="text-xs uppercase tracking-wider text-muted transition-colors hover:text-white"
              >
                Home
              </Link>
              <Link
                to="/projects"
                className="text-xs uppercase tracking-wider text-muted transition-colors hover:text-white"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="text-xs uppercase tracking-wider text-muted transition-colors hover:text-white"
              >
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={social.label}
                  className="text-muted transition-colors hover:text-blue"
                >
                  <Icon icon={social.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/5 py-5">
          <p className="text-xs text-muted text-center">
            ＠2026 Mark Corbin. All rights reserved
          </p>
        </div>
      </motion.section>

      {/* PROJECT MODAL */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(!isModalOpen)}
      />
    </div>
  );
}
