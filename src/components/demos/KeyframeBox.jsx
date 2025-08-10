import { motion } from "framer-motion";

export const KeyframeBox = () => (
  <motion.div
    className="w-40 h-40 bg-blue-500 rounded-lg"
    animate={{
      scale: [1, 1.5, 1, 1.5, 1],
      rotate: [0, 90, 0, -90, 0],
      borderRadius: ["20%", "50%", "20%", "50%", "20%"],
    }}
    transition={{
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.25, 0.5, 0.75, 1],
      repeat: Infinity,
      repeatDelay: 1,
    }}
  />
);
