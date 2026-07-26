import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Check,
  Clock3,
  Info,
  User,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import type { Project } from "~/data/project-data";
import ProjectLinks from "./ProjectLinks";
import ImageModal from "./ImageModal";
import InfoRow from "./InfoRow";

type ProjectModalProps = {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setActiveScreenshot(0);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const screenshots = project.screenshots ?? [];

  //   const nextScreenshot = () => {
  //     setActiveScreenshot((current) =>
  //       current === screenshots.length - 1 ? 0 : current + 1,
  //     );
  //   };

  //   const previousScreenshot = () => {
  //     setActiveScreenshot((current) =>
  //       current === 0 ? screenshots.length - 1 : current - 1,
  //     );
  //   };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-100 overflow-y-auto bg-bg-dark/90 p-4 backdrop-blur-md ipad:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-2xl border border-blue/40 bg-bg shadow-[0_0_80px_rgba(55,168,255,0.12)]"
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-bg/70 text-muted backdrop-blur-md transition-all hover:border-blue hover:text-white hover:shadow-[0_0_20px_rgba(55,168,255,0.25)]"
              aria-label="Close project"
            >
              <X size={20} />
            </button>

            <div className="relative top-15 z-10 p-5 ipad:p-8 desktop:p-10">
              {/* HERO */}
              <section className="grid gap-8 ipad:grid-cols-2">
                {/* Hero Content */}
                <div>
                  <h1 className="bg-linear-to-r from-blue via-purple to-lavender bg-clip-text text-4xl font-bold text-transparent ipad:text-6xl desktop:text-7xl">
                    {project.name}
                  </h1>

                  <p className="max-w-xl text-base leading-relaxed text-muted ipad:text-lg">
                    {project.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3 mt-7">
                    <ProjectLinks project={project} variant="default" />
                  </div>
                </div>

                {/* Main Project Screenshot */}
                <div className="overflow-hidden rounded-2xl border border-blue/50 bg-bg-dark shadow-[0_0_40px_rgba(55,168,255,0.12)]">
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="aspect-video w-full object-cover"
                  />
                </div>
              </section>

              {/* OVERVIEW + PROJECT INFO */}
              <section className="mt-12 grid gap-6 ipad:grid-cols-3">
                {/* Overview */}
                <div className="rounded-xl border border-white/10 bg-surface/30 p-6 ipad:col-span-2">
                  <h2 className="text-xl font-semibold text-white">Overview</h2>

                  <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted">
                    {project.overview?.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Project Info */}
                <div className="rounded-xl border border-white/10 bg-surface/30 p-6">
                  <h2 className="text-xl font-semibold text-white">
                    Project Info
                  </h2>

                  <div className="mt-5 space-y-5">
                    <InfoRow
                      icon={<Info size={18} />}
                      label="Type"
                      value={project.type}
                    />

                    <InfoRow
                      icon={<User size={18} />}
                      label="Role"
                      value={project.role}
                    />

                    <InfoRow
                      icon={<Clock3 size={18} />}
                      label="Duration"
                      value={project.duration}
                    />

                    <InfoRow
                      icon={<Check size={18} />}
                      label="Status"
                      value={project.status}
                      valueClass={project.status}
                    />
                  </div>
                </div>
              </section>

              {/* TECHNOLOGIES */}
              <section className="mt-10">
                <h2 className="text-xl font-semibold text-white">
                  Technologies Used
                </h2>

                <div className="mt-4 grid grid-cols-2 gap-3 ipad:grid-cols-3 desktop:grid-cols-6">
                  {project.technologies?.map((technology) => (
                    <div
                      key={technology.name}
                      className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-surface/40 p-5 transition-all hover:-translate-y-1 hover:border-blue/40 hover:bg-surface-light/50"
                    >
                      {technology.icon && (
                        <Icon icon={technology.icon} className="h-10 w-10" />
                      )}

                      <span className="text-sm font-light text-center">
                        {technology.name}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* KEY FEATURES */}
              <section className="mt-10">
                <h2 className="text-xl font-semibold text-white">
                  Key Features
                </h2>

                <div className="mt-4 grid gap-4 ipad:grid-cols-2 desktop:grid-cols-4">
                  {project.features?.map((feature) => (
                    <div
                      key={feature.title}
                      className="rounded-xl border border-white/10 bg-surface/30 p-5 transition-all hover:border-purple/40"
                    >
                      <h3 className="font-semibold text-white">
                        {feature.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* PROJECT SHOWCASE */}
              <section className="mt-10">
                <h2 className="text-xl font-semibold text-white">
                  Project Showcase
                </h2>

                <div className="grid gap-4 ipad:grid-cols-3">
                  {screenshots.map((screenshot, index) => (
                    <button
                      key={screenshot.image}
                      type="button"
                      onClick={() => {
                        setActiveScreenshot(index);
                        setIsImageModalOpen(true);
                      }}
                      className={`overflow-hidden rounded-xl border transition-all ${
                        activeScreenshot === index
                          ? "border-purple shadow-[0_0_25px_rgba(138,92,248,0.2)]"
                          : "border-white/10"
                      }`}
                    >
                      <img
                        src={screenshot.image}
                        alt={screenshot.title}
                        className="aspect-video w-full object-cover transition-transform hover:scale-105"
                      />

                      <div className="bg-bg/80 py-2 text-center text-sm text-gray">
                        {screenshot.title}
                      </div>
                    </button>
                  ))}
                </div>
              </section>

              {/* DEVELOPMENT PROCESS */}
              <section className="mt-10">
                <h2 className="text-xl font-semibold text-white">
                  Development Process
                </h2>

                <div className="relative mt-10 grid gap-8 ipad:grid-cols-4">
                  {/* Connecting line */}
                  <div className="absolute left-[10%] right-[10%] top-5 hidden h-px bg-linear-to-r from-blue via-purple to-pink ipad:block" />

                  {project.process?.map((step, index) => (
                    <div key={step.title} className="relative text-center">
                      <div className="relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-purple bg-bg text-sm font-semibold text-blue shadow-[0_0_20px_rgba(106,90,249,0.3)]">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <h3 className="mt-4 font-semibold text-white">
                        {step.title}
                      </h3>

                      <p className="mx-auto mt-2 max-w-xs text-sm text-muted">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* CHALLENGES + SOLUTIONS */}
              <section className="mt-10">
                <h2 className="text-xl font-semibold text-white">
                  Challenges & Solutions
                </h2>

                <div className="mt-4 grid gap-4 ipad:grid-cols-[1fr_auto_1fr] ipad:items-center">
                  <div className="rounded-xl border border-white/10 bg-surface/30 p-5">
                    <div className="flex items-center gap-3">
                      <span className="h-3 w-3 rounded-full bg-red-500" />
                      <h3 className="font-semibold text-white">Challenge</h3>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {project.challenge}
                    </p>
                  </div>

                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-blue text-blue">
                    <ArrowRight size={18} />
                  </div>

                  <div className="rounded-xl border border-white/10 bg-surface/30 p-5">
                    <div className="flex items-center gap-3">
                      <span className="h-3 w-3 rounded-full bg-green-400" />
                      <h3 className="font-semibold text-white">Solution</h3>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {project.solution}
                    </p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <section className="relative mb-15 mt-10 overflow-hidden rounded-xl border border-blue/50 bg-bg-secondary p-6">
                <div className="absolute inset-0 bg-linear-to-r from-blue/20 via-purple/20 to-pink/20" />

                <div className="relative flex flex-col gap-5 ipad:flex-row ipad:items-center ipad:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      Interested in this project?
                    </h2>

                    <p className="mt-2 text-sm text-muted">
                      {project.demoLink
                        ? "Check out the live demo or explore the source code."
                        : "Check out the app, live on the App Store and Play Store"}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <ProjectLinks project={project} variant="default" />
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}

      {isImageModalOpen && (
        <ImageModal
          images={screenshots}
          activeIndex={activeScreenshot}
          onChange={setActiveScreenshot}
          onClose={() => setIsImageModalOpen(false)}
        />
      )}
    </AnimatePresence>
  );
}
