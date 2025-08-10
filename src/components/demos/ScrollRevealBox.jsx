import { motion } from "framer-motion";
import { useRef } from "react";

const Box = ({ text, rootRef }) => (
  <motion.div
    className="w-32 h-32 m-4 rounded bg-pink-300 flex items-center justify-center shadow-lg"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ root: rootRef }}
  >
    <span className="text-black text-xl font-medium">{text}</span>
  </motion.div>
);

export const ScrollRevealBox = () => {
  const items = [
    "হ্যালো",
    "আসসালামু আলাইকুম",
    "স্বাগতম",
    "শুভেচ্ছা",
    "আসুন",
    "হ্যালো",
    "আসসালামু আলাইকুম",
    "স্বাগতম",
    "শুভেচ্ছা",
    "আসুন",
  ];
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="h-[400px] overflow-y-auto flex flex-col items-center py-10 space-y-4 border border-gray-300 rounded"
    >
      {items.map((item, i) => (
        <Box key={i} text={item} rootRef={containerRef} />
      ))}
    </div>
  );
};
