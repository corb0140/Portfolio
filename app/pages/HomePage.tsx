import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import Banner from "~/assets/imgs/banner.png";
import Me from "~/assets/imgs/me.jpg";
import { Link } from "react-router";
import { ArrowRight, Infinity } from "lucide-react";
import { projects, techColors } from "~/data/project-data";
import { technologies } from "~/data/technologies";
import { Icon } from "@iconify/react";
import SectionTitle from "~/components/SectionTitle";

export default function HomeScreen() {
  const baseLinkStyle =
    "text-center text-white text-[14px] font-bold p-2 rounded-md";

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
    offset: ["start end", "start center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="relative overflow-hidden">
      {/* BANNER SECTION */}
      <motion.section className="sticky top-0 z-10 h-80 ipad:top-25 laptop:top-15 border-b border-muted/15 bg-bg">
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
      </motion.section>

      {/* ABOUT ME SECTION */}
      <motion.section className="sticky top-0 z-20 min-h-screen p-8 grid grid-cols-1 ipad:grid-cols-2 gap-5 content-center bg-bg">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="border border-muted/75 rounded-md h-60 w-full"
        >
          <img
            src={Me}
            alt="Photo of Mark Corbin"
            className="w-full h-full object-cover rounded-md"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-4"
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="flex justify-between gap-2"
        >
          {[
            { id: 1, title: "Projects", number: 3 },
            { id: 2, title: "Technologies", number: 25 },
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
                  <div className="flex items-center">
                    <p className="text-2xl font-bold">{item.number}</p>
                    <p className="text-xl font-bold">+</p>
                  </div>
                )}
              </span>

              <div className="h-full w-full flex items-center justify-center">
                <p className="text-[12px] font-medium text-center">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.section>

      {/* FEATURED PROJECTS */}
      <motion.section className="relative min-h-screen p-8 flex flex-col justify-center gap-5">
        <div className="flex flex-col gap-5">
          <SectionTitle title="Featured Projects" />

          <Link
            to="#banner"
            className="flex items-center w-fit text-white font-bold py-2 rounded-md"
          >
            <p className="text-sm text-blue">View All Projects</p>
            <ArrowRight className="inline-block ml-2 h-4 w-4 text-blue" />
          </Link>
        </div>

        <div className="grid grid-cols-1 ipad:grid-cols-2 gap-5">
          {projects.slice(0, 2).map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, rotate: -20, scale: 0.9 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              className="flex flex-col gap-2 border border-muted/30 rounded-md p-4"
            >
              <div className="relative h-40 rounded-md overflow-hidden">
                <span className="absolute right-1 top-1 z-10 bg-bg-secondary py-1 px-2.5 text-xs font-bold border border-muted rounded-md">
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
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* TECHNOLOGIES */}
      <motion.section
        ref={techRef}
        className="relative z-40 min-h-screen p-8 flex flex-col justify-center bg-bg"
      >
        <SectionTitle title="Technologies" />

        <div className="relative mt-6 grid grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5 gap-4">
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
              className="flex h-28 flex-col items-center justify-center gap-3 rounded-md border border-muted/30 bg-bg p-4"
            >
              <Icon icon={tech.icon} width={28} height={28} />

              <span className="text-center text-xs font-medium">{name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FOOTER */}
      <motion.section
        ref={footerRef}
        style={{ y, opacity }}
        className="relative"
      >
        <div className="border-y border-muted/15">
          <div className="p-8 grid grid-cols-1 gap-5">
            <div className="flex flex-col gap-1">
              <p className="w-fit text-4xl laptop:text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue to-purple">
                MC
              </p>

              <p className="mt-1 font-bold">Mark Corbin</p>

              <p>Junior Software Developer</p>

              <p className="text-muted mt-2">
                Building the web, one line of code at a time.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-xl font-bold">Let's Connect</p>

              <div className="flex items-center gap-4">
                {[
                  {
                    href: "https://www.linkedin.com/in/mark-corbin-18771b9b/",
                    icon: "mdi:linkedin",
                    label: "LinkedIn",
                  },
                  {
                    href: "https://github.com/corb0140",
                    icon: "mdi:github",
                    label: "GitHub",
                  },
                  {
                    href: "mailto:markpc1608@gmail.com",
                    icon: "mdi:email",
                    label: "Email",
                  },
                ].map((social) => (
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
    </div>
  );
}
