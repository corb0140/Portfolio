import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { socialLinks } from "~/data/social-links";
import { SendHorizontal } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="h-auto p-8 ipad:px-40 ipad:py-10 desktop:px-80 flex flex-col items-center gap-10 border-t border-muted/35">
      {/* PAGE HEADER */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="flex flex-col items-center gap-2 text-center"
      >
        <h1 className="text-3xl ipad:text-4xl laptop:text-5xl font-bold">
          Get In Touch
        </h1>

        <div className="h-0.5 w-24 rounded-md bg-linear-to-r from-blue to-purple" />

        <p className="text-muted font-light mt-2 laptop:max-w-90">
          Have a question or want to work together? Send me a message.
        </p>
      </motion.section>

      {/* CONTACT FORM & CONNECT */}
      <section className="w-full flex flex-col  laptop:flex-row gap-10">
        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="w-full laptop:flex-1 flex flex-col"
        >
          <form className="w-full flex flex-col gap-5">
            {/* NAME */}
            <div className="flex flex-col gap-2">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="w-full rounded-md border border-muted/30 bg-bg-secondary p-3 text-white outline-none transition-colors focus:border-blue"
              />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-2">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your email"
                required
                className="w-full rounded-md border border-muted/30 bg-bg-secondary p-3 text-white outline-none transition-colors focus:border-blue"
              />
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col gap-2">
              <textarea
                id="message"
                name="message"
                placeholder="Your message..."
                rows={6}
                required
                className="w-full resize-none rounded-md border border-muted/30 bg-bg-secondary p-3 text-white outline-none transition-colors focus:border-blue"
              />
            </div>

            {/* SEND BUTTON */}
            <button
              type="submit"
              className="mt-2 w-full min-h-12 flex gap-2 items-center justify-center rounded-md bg-linear-to-r from-blue-dark to-purple p-3 font-bold text-white transition-opacity hover:opacity-90"
            >
              <span className="text-[18px]">Send Message</span>
              <SendHorizontal height={20} width={20} />
            </button>
          </form>
        </motion.div>

        {/* DIVIDER */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="hidden laptop:block origin-top border-r border-muted/25"
        />

        {/* LET'S CONNECT */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="w-full laptop:flex-1 flex flex-col items-center gap-4"
        >
          <span className="flex flex-col gap-3 items-center laptop:items-start">
            <p className="w-fit text-2xl laptop:text-4xl font-bold text-center laptop:text-start bg-clip-text text-transparent bg-linear-to-r from-blue-dark to-purple">
              Let's Connect!
            </p>

            <p className="font-light text-center laptop:text-start">
              I'm currently available for freelance work or new opportunities
            </p>
          </span>

          <div className="flex laptop:flex-col gap-5 mt-2">
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
                className="flex items-start gap-3 text-white transition-colors hover:text-blue"
              >
                <Icon icon={social.icon} className="h-8 w-8 shrink-0" />

                <div className="hidden laptop:flex flex-col">
                  <span className="font-bold">{social.label}</span>

                  <span className="text-sm text-muted break-all">
                    {social.href.replace("mailto:", "")}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
