import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

export const StaggerExampleBox = () => {
  const list = ["প্রথম", "দ্বিতীয়", "তৃতীয়", "চতুর্থ"];

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="visible"
      className="list-none p-0 space-y-3"
    >
      {list.map((text, idx) => (
        <motion.li
          key={idx}
          variants={item}
          className="bg-blue-500 text-white rounded-lg p-4 text-center font-medium shadow-md"
        >
          {text}
        </motion.li>
      ))}
    </motion.ul>
  );
};
