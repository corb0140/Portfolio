import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

export default function NavHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const linkUppercase =
    "uppercase tracking-wider text-[12px] ipad:text-[14px] laptop:text-[12px] cursor-pointer transition-colors duration-300";

  const getLinkClass = (path: string) => {
    return `${linkUppercase} ${
      location.pathname === path ? "text-blue" : "text-white hover:text-blue"
    }`;
  };

  return (
    <div className="h-12 ipad:h-15 w-full flex items-center justify-between p-5 laptop:px-15 z-50 bg-transparent">
      <Link
        to="/home"
        onClick={() => setIsMenuOpen(false)}
        className="text-xl ipad:text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue to-purple"
      >
        MC
      </Link>

      {/* MENU BUTTON */}
      <AnimatePresence mode="wait" initial={false}>
        {isMenuOpen ? (
          <motion.div
            key="close"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="ipad:hidden z-100 relative"
          >
            <X
              className="cursor-pointer h-6 w-6"
              onClick={() => setIsMenuOpen(false)}
            />
          </motion.div>
        ) : (
          <motion.div
            key="open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="ipad:hidden z-100 relative"
          >
            <Menu
              className="cursor-pointer h-6 w-6"
              onClick={() => setIsMenuOpen(true)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="fixed z-50 top-0 left-0 h-full w-full flex items-center justify-center bg-bg-secondary p-5 rounded-lg shadow-lg"
          >
            <nav>
              <div className="flex flex-col gap-8 items-center">
                <Link
                  to="/home"
                  onClick={() => setIsMenuOpen(false)}
                  className={getLinkClass("/home")}
                >
                  Home
                </Link>

                <Link
                  to="/projects"
                  onClick={() => setIsMenuOpen(false)}
                  className={getLinkClass("/projects")}
                >
                  Projects
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className={getLinkClass("/contact")}
                >
                  Contact
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DESKTOP MENU */}
      <nav className="hidden ipad:flex gap-5">
        <Link to="/home" className={getLinkClass("/home")}>
          Home
        </Link>

        <Link to="/projects" className={getLinkClass("/projects")}>
          Projects
        </Link>

        <Link to="/contact" className={getLinkClass("/contact")}>
          Contact
        </Link>
      </nav>
    </div>
  );
}
