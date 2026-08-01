import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import Me from "~/assets/imgs/me.jpg";
import { Link, useNavigate } from "react-router";
import { ArrowRight, ChevronDown, Infinity } from "lucide-react";
import { projects, techColors } from "~/data/project-data";
import type { Project } from "~/data/project-data";
import { technologies } from "~/data/technologies";
import { Icon } from "@iconify/react";
import SectionTitle from "~/components/SectionTitle";
import { socialLinks } from "~/data/social-links";
import ProjectModal from "~/components/ProjectModal";

export default function HomeScreen() {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const baseLinkStyle =
    "font-light text-center text-white text-[14px] font-bold p-3 laptop:px-6 rounded-md";

  const techRef = useRef<HTMLElement>(null);
  const footerRef = useRef(null);

  // Triggers the "pop out from center" reveal for the tech icons.
  const techInView = useInView(techRef, { once: true, amount: 0.2 });

  const animateTech = techInView
    ? {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
      }
    : {
        x: "-50vw",
        y: "-35vh",
        scale: 0,
        opacity: 0,
      };

  // Animate footer on scroll
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const linkUppercase =
    "uppercase tracking-wider text-[12px] ipad:text-[14px] laptop:text-[12px] cursor-pointer";

  return (
    <div className="relative">
      {/* BANNER SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="sticky top-0 z-10 h-[calc(100dvh-60px)] border-y border-muted/15
      flex flex-col items-center justify-center px-10 py-5 laptop:gap-5"
      >
        <div className="flex flex-col items-center justify-center gap-3 flex-1">
          <p className="font-light ipad:text-xl laptop:text-2xl">Hello,</p>

          <h1 className="text-2xl ipad:text-4xl laptop:text-5xl desktop:text-7xl">
            I'm{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue to-purple">
              Mark Corbin
            </span>
            <motion.div
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1, rotateY: 360 }}
              transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
              className="relative inline-block"
            >
              .
            </motion.div>
          </h1>

          <p className="font-light">Junior Software Developer</p>

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
                " border border-gray hover:scale-105 transition-all duration-300"
              }
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <span className="h-4 w-[0.5px] rounded-lg bg-linear-to-b from-blue via-pink to-purple" />
          <p className="font-light text-xs uppercase">scroll</p>
          <ChevronDown height={18} width={18} />
        </div>
      </motion.section>

      {/* ABOUT ME SECTION */}
      <motion.section
        id="about"
        className="relative z-20 h-auto ipad:h-110 desktop:h-120 p-8 laptop:px-25 desktop:px-80 grid grid-cols-1 ipad:grid-cols-2 gap-5 bg-bg"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="border border-muted/75 rounded-2xl overflow-hidden min-h-60 h-full w-full"
        >
          <img
            src={Me}
            alt="Photo of Mark Corbin"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-4 desktop:gap-6 ipad:h-full"
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">About Me</h2>
            <div className="h-0.5 w-1/4 rounded-md bg-linear-to-r from-blue to-purple" />
          </div>

          <p className="font-light desktop:leading-6 tracking-wider">
            I'm a passionate junior software developer with a strong foundation
            in web and mobile technologies and a keen interest in creating
            innovative solutions.
          </p>

          <p className="font-light desktop:leading-6 tracking-wider">
            When I'm not coding, you can find me exploring new technologies, or
            playing video games. I thrive in collaborative environments and am
            always eager to learn and grow as a developer.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="flex flex-1 gap-2 ipad:gap-4 desktop:gap-2"
          >
            {[
              { id: 1, title: "Projects", number: 2 },
              { id: 2, title: "Technologies", number: 25 },
              { id: 3, title: "Always Learning" },
            ].map((item) => (
              <div
                key={item.id}
                className="border-2 border-muted/55 min-w-0 flex-1 flex flex-col items-center justify-center text-white p-3 rounded-md desktop:gap-2"
              >
                <span className="relative inline-flex items-center justify-center">
                  {!item.number ? (
                    <>
                      <div className="absolute inset-2 bg-blue blur-sm opacity-50" />
                      <Infinity className="relative text-blue h-8 w-8 desktop:h-10 desktop:w-10" />
                    </>
                  ) : (
                    <p className="text-2xl desktop:text-4xl font-bold">
                      {item.number + "+"}
                    </p>
                  )}
                </span>

                <div className="w-full flex items-center justify-center">
                  <p className="text-[12px] desktop:text-[16px] font-medium text-center">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* FEATURED PROJECTS */}
      <motion.section className="relative z-30 h-auto p-8 laptop:px-25 desktop:px-80 flex flex-col gap-5 bg-bg">
        <div className="flex flex-col laptop:flex-row laptop:justify-between gap-5">
          <SectionTitle title="Featured Projects" />

          <Link
            to="/projects"
            className="flex items-center w-fit text-white font-bold py-2 rounded-md"
          >
            <p className="text-sm text-blue font-light">View All Projects</p>
            <ArrowRight className="inline-block ml-2 h-4 w-4 text-blue" />
          </Link>
        </div>

        <div className="grid grid-cols-1 ipad:grid-cols-2 gap-5 rounded-lg">
          {projects.slice(0, 2).map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, rotate: -20, scale: 0.9 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              className="flex flex-col gap-2 border border-muted/30 rounded-md p-4 cursor-pointer"
              onClick={() => {
                setSelectedProject(project);
                setIsModalOpen(!isModalOpen);
              }}
            >
              <div className="relative h-40 ipad:h-50 rounded-md overflow-hidden">
                <span className="absolute right-1 top-1 z-10 bg-bg-tertiary py-1 px-2.5 text-xs font-bold border border-muted rounded-md">
                  Featured
                </span>

                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <p>{project.name}</p>

              {/* DESCRIPTION */}
              <p className="text-sm grow text-muted">{project.description}</p>

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
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* TECHNOLOGIES */}
      <motion.section
        ref={techRef}
        className="relative z-40 h-auto p-8 laptop:px-25 desktop:px-80 flex flex-col justify-center bg-bg"
      >
        <SectionTitle title="Technologies" />

        <div className="relative mt-6 grid grid-cols-3 ipad:grid-cols-4 desktop:grid-cols-5 gap-4">
          {Object.entries(technologies).map(([name, tech], i) => (
            <motion.div
              key={name}
              layout
              initial={{
                x: 0,
                y: 0,
                scale: 0,
                opacity: 0,
              }}
              animate={animateTech}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 22,
                delay: techInView ? i * 0.075 : 0,
              }}
              className="flex min-h-25 flex-col items-center justify-center gap-3 rounded-md border border-muted/30 bg-bg"
            >
              <Icon icon={tech.icon} width={25} height={25} />

              <span className="text-center text-xs font-light">{name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FOOTER */}
      <motion.section
        ref={footerRef}
        style={{ opacity }}
        className="relative z-50 bg-bg"
      >
        <div className="border-y border-muted/15 overflow-hidden">
          <div className="p-8 laptop:px-25 desktop:px-80 flex flex-col ipad:flex-row gap-5 ipad:justify-between">
            {/* SHORT BIO */}
            <div className="flex flex-col gap-1">
              <p className="w-fit text-4xl laptop:text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue to-purple">
                MC
              </p>

              <p className="mt-1 font-bold desktop:text-2xl">Mark Corbin</p>

              <p className="desktop:text-xl font-medium">
                Junior Software Developer
              </p>

              <p className="text-muted mt-2 desktop:mt-4 desktop:font-light">
                Building the web, one line of code at a time.
              </p>
            </div>

            {/* LINKS */}
            <div className="flex flex-col gap-3 w-fit">
              <p className="font-bold text-xl">Quick Links</p>

              <ol className="flex ipad:flex-col gap-5">
                <li
                  onClick={() => handleNavigation("/home")}
                  className={linkUppercase}
                >
                  Home
                </li>
                <li
                  onClick={() => handleNavigation("/projects")}
                  className={linkUppercase}
                >
                  Projects
                </li>
                <li
                  onClick={() => handleNavigation("/contact")}
                  className={linkUppercase}
                >
                  Contact
                </li>
              </ol>
            </div>

            {/* SOCIALS */}
            <div className="flex flex-col gap-3 w-fit">
              <p className="text-xl font-bold">Let's Connect</p>

              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={social.label}
                    className="text-white hover:text-blue transition-colors"
                  >
                    <Icon icon={social.icon} className="h-8 w-8" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="py-5">
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
