import { motion } from "framer-motion";

export const KeyframeBox = ({ 
  duration = 2, 
  repeat = Infinity,
  repeatDelay = 1,
  scaleMax = 1.5,
  rotateMax = 90
}) => {
  // Generate dynamic arrays based on control values
  const dynamicScale = [1, scaleMax, 1, scaleMax, 1];
  const dynamicRotate = [0, rotateMax, 0, -rotateMax, 0];

  return (
    <motion.div
      className="w-40 h-40 bg-blue-500 rounded-lg"
      animate={{
        scale: dynamicScale,
        rotate: dynamicRotate,
        borderRadius: ["20%", "50%", "20%", "50%", "20%"],
      }}
      transition={{
        duration: duration,
        ease: "easeInOut",
        times: [0, 0.25, 0.5, 0.75, 1],
        repeat: repeat,
        repeatDelay: repeatDelay,
      }}
    />
  );
};
