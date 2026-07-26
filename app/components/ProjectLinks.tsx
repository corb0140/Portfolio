import type { Project } from "~/data/project-data";
import { ExternalLink } from "lucide-react";
import { Icon } from "@iconify/react";

export default function ProjectLinks({
  project,
  variant = "default",
}: {
  project: Project;
  variant?: "default" | "outline";
}) {
  const links = [
    {
      href: project.demoLink,
      label: "Live Demo",
      icon: <ExternalLink size={17} />,
      className:
        "bg-linear-to-r from-blue to-purple shadow-[0_0_25px_rgba(55,168,255,0.2)] hover:scale-105",
    },
    {
      href: project.githubLink,
      label: "View on GitHub",
      icon: <Icon icon="mdi:github" className="h-4 w-4" />,
      className:
        "border border-purple bg-bg/50 hover:bg-purple/10 hover:scale-105",
    },
    {
      href: project.AppStoreLink,
      label: "View on App Store",
      icon: <Icon icon="mdi:apple" className="h-4 w-4" />,
      className:
        "border border-purple bg-bg/50 hover:bg-purple/10 hover:scale-105",
    },
    {
      href: project.PlayStoreLink,
      label: "View on Play Store",
      icon: <Icon icon="mdi:google-play" className="h-4 w-4" />,
      className:
        "border border-purple bg-bg/50 hover:bg-purple/10 hover:scale-105",
    },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {links.map(
        (link) =>
          link.href && (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex grow items-center justify-center gap-2 rounded-lg px-5 py-3 font-semibold text-white transition-all ${
                variant === "outline" ? "border border-purple" : link.className
              }`}
            >
              {link.label}
              {link.icon}
            </a>
          ),
      )}
    </div>
  );
}
