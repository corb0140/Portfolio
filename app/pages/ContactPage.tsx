import { motion, useScroll, useTransform } from "motion/react";
import { Icon } from "@iconify/react";
import { socialLinks } from "~/data/social-links";
import { Mail, MessageSquare, SendHorizontal, User } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function ContactPage() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const pageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"],
  });
  const orbAY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const orbBY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    setIsSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        event.currentTarget,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setStatus("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  }

  const inputWrapStyle =
    "flex items-center gap-3 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 transition-colors duration-300 focus-within:border-blue/60 focus-within:bg-white/[0.06]";

  const inputStyle =
    "w-full bg-transparent text-white placeholder:text-muted outline-none";

  return (
    <main
      ref={pageRef}
      className="relative min-h-dvh overflow-hidden pt-28 pb-16 ipad:pt-36 ipad:pb-24 px-6 ipad:px-16 desktop:px-32 flex flex-col items-center gap-14"
    >
      {/* PARALLAX BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          style={{ y: orbAY }}
          className="absolute -top-10 left-[-10%] h-72 w-72 ipad:h-96 ipad:w-96 rounded-full bg-blue/15 blur-3xl"
        />
        <motion.div
          style={{ y: orbBY }}
          className="absolute bottom-0 right-[-10%] h-80 w-80 ipad:h-[26rem] ipad:w-[26rem] rounded-full bg-purple/15 blur-3xl"
        />
      </div>

      {/* PAGE HEADER */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
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
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="w-full max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 ipad:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.4)] flex flex-col laptop:flex-row gap-10"
      >
        {/* FORM */}
        <div className="w-full laptop:flex-1 flex flex-col">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
            {/* NAME */}
            <div className={inputWrapStyle}>
              <User className="h-4 w-4 text-muted shrink-0" />
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                className={inputStyle}
              />
            </div>

            {/* EMAIL */}
            <div className={inputWrapStyle}>
              <Mail className="h-4 w-4 text-muted shrink-0" />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                required
                className={inputStyle}
              />
            </div>

            {/* MESSAGE */}
            <div className={`${inputWrapStyle} items-start`}>
              <MessageSquare className="h-4 w-4 text-muted shrink-0 mt-1" />
              <textarea
                id="message"
                name="message"
                placeholder="Your message..."
                rows={6}
                required
                className={`${inputStyle} resize-none`}
              />
            </div>

            {/* STATUS */}
            {status && (
              <p className="text-sm text-center text-muted">{status}</p>
            )}

            {/* SEND BUTTON */}
            <div className="relative group mt-2">
              <div className="absolute -inset-0.5 bg-linear-to-r from-blue to-purple rounded-xl blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
              <button
                type="submit"
                disabled={isSending}
                className="relative w-full min-h-12 flex gap-2 items-center justify-center rounded-xl bg-linear-to-r from-blue-dark to-purple p-3 font-bold text-white transition-transform duration-300 group-hover:scale-[1.01] disabled:opacity-50"
              >
                <span className="text-[18px]">
                  {isSending ? "Sending..." : "Send Message"}
                </span>

                <SendHorizontal height={20} width={20} />
              </button>
            </div>
          </form>
        </div>

        {/* DIVIDER */}
        <div className="hidden laptop:block w-px bg-linear-to-b from-transparent via-white/15 to-transparent" />

        <div className="laptop:hidden h-px w-full bg-linear-to-r from-transparent via-white/15 to-transparent" />

        {/* LET'S CONNECT */}
        <div className="w-full laptop:flex-1 flex flex-col items-center gap-4">
          <span className="flex flex-col gap-3 items-center laptop:items-start">
            <p className="w-fit text-2xl laptop:text-4xl font-bold text-center laptop:text-start bg-clip-text text-transparent bg-linear-to-r from-blue-dark to-purple">
              Let's Connect!
            </p>

            <p className="font-light text-center laptop:text-start text-muted">
              I'm currently available for freelance work or new opportunities
            </p>
          </span>

          <div className="flex flex-col laptop:self-start gap-3 mt-2 w-full">
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
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white transition-all duration-300 hover:border-blue/40 hover:bg-white/[0.06]"
              >
                <Icon icon={social.icon} className="h-6 w-6 shrink-0" />

                <div className="flex flex-col">
                  <span className="font-light text-sm">{social.label}</span>

                  <span className="text-xs text-muted">
                    {social.href.replace("mailto:", "")}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
