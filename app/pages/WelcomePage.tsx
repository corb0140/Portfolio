import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import AnimatedLetter from "../components/AnimatedLetters";
import { useNavigate } from "react-router";

export default function Welcome() {
  const navigate = useNavigate();

  const name = "My Portfolio";
  const letters = name.split("");

  // pick which letters shake after landing — every 3rd non-space letter
  const shakeIndices = new Set(
    letters
      .map((c, i) => (c !== " " && i % 3 === 1 ? i : null))
      .filter((i): i is number => i !== null),
  );

  return (
    <div className="relative h-dvh w-screen flex items-center justify-center overflow-hidden bg-bg-secondary">
      {/* GRID PATTERN */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <pattern
            id="grid"
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
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* TINT OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-br from-bg/10 via-bg-tertiary/15 to-bg-secondary/30" />

      {/* TITLE */}
      <span className="relative z-10 text-[14px] ipad:text-5xl desktop:text-7xl font-bold uppercase tracking-[15px] ipad:tracking-[20px] text-white flex">
        {letters.map((char, i) => (
          <AnimatedLetter
            key={i}
            char={char}
            index={i}
            shouldShake={shakeIndices.has(i)}
          />
        ))}
      </span>

      {/* BUTTON */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: letters.length * 0.045 + 0.6, duration: 0.5 }}
        whileHover={{
          scale: [1, 1.1, 1],
          transition: { duration: 1, ease: "easeInOut", repeat: Infinity },
        }}
        className="absolute z-10 bottom-20 right-30 flex items-center justify-center text-white text-[12px] ipad:text-[16px] desktop:text-[12px] tracking-wider uppercase"
        onClick={() => navigate("/home")}
      >
        View Portfolio
        <ArrowRight className="ml-2 h-4 w-4" />
      </motion.button>
    </div>
  );
}
