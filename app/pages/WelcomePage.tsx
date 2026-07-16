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
    <div
      className="relative h-screen w-screen flex items-center justify-center 
    bg-linear-to-br from-bg-secondary from-30% to-bg to-70%"
    >
      <div className="hidden desktop:block h-full w-full border-x border-white mx-25" />
      <div className="hidden desktop:block absolute top-15 bottom-0 left-0 h-[85%] w-full border-y border-white" />

      <span className="text-[14px] ipad:text-5xl desktop:text-7xl font-bold uppercase tracking-[15px] ipad:tracking-[20px] text-white absolute flex">
        {letters.map((char, i) => (
          <AnimatedLetter
            key={i}
            char={char}
            index={i}
            shouldShake={shakeIndices.has(i)}
          />
        ))}
      </span>

      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: letters.length * 0.045 + 0.6, duration: 0.5 }}
        whileHover={{
          scale: [1, 1.1, 1],
          transition: { duration: 1, ease: "easeInOut", repeat: Infinity },
        }}
        className="absolute bottom-20 right-30 flex items-center justify-center text-white text-[12px] ipad:text-[16px] desktop:text-[12px] tracking-wider uppercase"
        onClick={() => navigate("/home")}
      >
        View Portfolio
        <ArrowRight className="ml-2 h-4 w-4" />
      </motion.button>
    </div>
  );
}
