import { motion } from "framer-motion";

export function GestureBox() {
  return (
    <motion.button
      className="px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold"
      whileHover={{ scale: 1.1, rotate: 3 }}
      whileTap={{ scale: 0.9, rotate: -3 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      Click Me
    </motion.button>
  );
}
