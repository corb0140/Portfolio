import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/home", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function NavHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const linkUppercase =
    "uppercase tracking-wider text-[12px] cursor-pointer transition-colors duration-300";

  const getLinkClass = (path: string) =>
    `${linkUppercase} ${
      location.pathname === path ? "text-blue" : "text-muted hover:text-white"
    }`;

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 ipad:top-6 inset-x-0 z-100 flex justify-center px-4"
    >
      <div className="relative flex flex-col items-center">
        {/* PILL */}
        <div
          className={`flex items-center gap-5 ipad:gap-9 rounded-full border bg-bg-secondary/60 backdrop-blur-xl px-5 py-2.5 ipad:px-8 ipad:py-3 shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-all duration-300 ${
            isScrolled
              ? "border-white/15 shadow-[0_8px_32px_rgba(55,168,255,0.15)]"
              : "border-white/10"
          }`}
        >
          <Link
            to="/home"
            className="text-lg ipad:text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue to-purple"
          >
            MC
          </Link>

          <span className="hidden ipad:block h-4 w-px bg-white/10" />

          {/* DESKTOP MENU */}
          <nav className="hidden ipad:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={getLinkClass(link.to)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="ipad:hidden relative flex h-6 w-6 items-center justify-center text-white"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.96 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full mt-3 ipad:hidden w-52 rounded-3xl border border-white/10 bg-bg-secondary/90 backdrop-blur-xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
            >
              <nav className="flex flex-col items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={getLinkClass(link.to)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
