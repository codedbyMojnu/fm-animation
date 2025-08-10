import { motion } from "framer-motion";

export const DragBox = () => {
  return (
    <motion.div
      className="w-32 h-32 bg-green-500 rounded-lg cursor-grab active:cursor-grabbing"
      drag
      dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
      dragElastic={0.1}
      whileDrag={{ scale: 1.1, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
    />
  );
};
