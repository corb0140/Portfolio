import { motion } from "motion/react";
import { useState } from "react";

interface AnimatedLetterProps {
  char: string;
  index: number;
  shouldShake: boolean;
}

export default function AnimatedLetter({
  char,
  index,
  shouldShake,
}: AnimatedLetterProps) {
  const [isShaking, setIsShaking] = useState(false);

  return (
    <motion.span
      initial={{ y: -250, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 480,
        damping: 11,
        mass: 0.9,
        delay: index * 0.08,
      }}
      onAnimationComplete={() => {
        if (shouldShake) setIsShaking(true);
      }}
      style={{ display: "inline-block" }}
    >
      <motion.span
        animate={
          isShaking
            ? {
                rotate: [0, -12, 10, -8, 8, -4, 4, 0],
                x: [0, -3, 3, -2, 2, -1, 1, 0],
              }
            : {}
        }
        transition={{ duration: 0.75, ease: "easeInOut" }}
        onAnimationComplete={() => setIsShaking(false)}
        style={{ display: "inline-block" }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    </motion.span>
  );
}
