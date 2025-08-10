// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export const BasicBox = ({ duration, scale, rotate }) => {
  return (
    <motion.div
      className="w-32 h-32 bg-indigo-500 rounded-lg"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: scale, rotate: rotate }}
      transition={{ duration: duration, ease: "easeInOut" }}
    />
  );
};
