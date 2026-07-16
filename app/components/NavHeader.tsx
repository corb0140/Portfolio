import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Menu, X } from "lucide-react";

export default function NavHeader() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  const linkUppercase =
    "uppercase tracking-wider text-[12px] ipad:text-[18px] desktop:text-[12px] cursor-pointer";

  return (
    <div className="fixed top-0 left-0 h-15 ipad:h-25 laptop:h-15 w-full flex items-center justify-between p-5 ipad:p-10 z-50">
      <p className="text-2xl ipad:text-3xl laptop:text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue to-purple">
        MC
      </p>

      <AnimatePresence mode="wait" initial={false}>
        {isMenuOpen ? (
          <motion.div
            key="close"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="laptop:hidden z-100 relative"
          >
            <X
              className="cursor-pointer h-7 w-7"
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
            className="laptop:hidden z-100 relative"
          >
            <Menu
              className="cursor-pointer h-7 w-7"
              onClick={() => setIsMenuOpen(true)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 h-full w-full flex items-center justify-center bg-bg-secondary p-5 rounded-lg shadow-lg"
          >
            <ol className="flex flex-col gap-3 items-center">
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
                onClick={() => handleNavigation("/pokemon-game")}
                className={linkUppercase}
              >
                Pokemon Game
              </li>
            </ol>
          </motion.div>
        )}
      </AnimatePresence>

      <ol className="hidden laptop:flex gap-5">
        <li onClick={() => handleNavigation("/home")} className={linkUppercase}>
          Home
        </li>
        <li
          onClick={() => handleNavigation("/projects")}
          className={linkUppercase}
        >
          Projects
        </li>
        <li
          onClick={() => handleNavigation("/pokemon-game")}
          className={linkUppercase}
        >
          Pokemon Game
        </li>
      </ol>
    </div>
  );
}
