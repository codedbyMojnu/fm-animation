import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const TextAnimations = () => {
  const [text, setText] = useState("");
  const fullText = "আমাদের অ্যানিমেশন উদাহরণ";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="space-y-8">
      {/* Typewriter Effect */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Typewriter Effect</h3>
        <div className="bg-gray-100 p-6 rounded-lg">
          <motion.div
            className="text-2xl font-mono text-blue-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {text}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="ml-1"
            >
              |
            </motion.span>
          </motion.div>
        </div>
      </div>

      {/* Staggered Text Reveal */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Staggered Text Reveal</h3>
        <motion.div
          className="text-3xl font-bold text-purple-600"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {["Hello", "World", "Animation"].map((word, index) => (
            <motion.span
              key={index}
              variants={itemVariants}
              className="inline-block mr-4"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Floating Text */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Floating Text</h3>
        <div className="flex justify-center space-x-8">
          <motion.div
            className="text-xl font-semibold text-green-600"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Floating
          </motion.div>
          
          <motion.div
            className="text-xl font-semibold text-red-600"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            Text
          </motion.div>
          
          <motion.div
            className="text-xl font-semibold text-blue-600"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            Effect
          </motion.div>
        </div>
      </div>

      {/* Gradient Text Animation */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Gradient Text Animation</h3>
        <motion.div
          className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            backgroundSize: "200% 200%"
          }}
        >
          Gradient Text
        </motion.div>
      </div>

      {/* Bouncing Letters */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Bouncing Letters</h3>
        <div className="flex justify-center">
          {"BOUNCE".split("").map((letter, index) => (
            <motion.span
              key={index}
              className="text-3xl font-bold text-orange-500 mx-1"
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "easeInOut"
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Text Scale on Hover */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Text Scale on Hover</h3>
        <div className="flex justify-center space-x-6">
          <motion.h2
            className="text-2xl font-bold text-indigo-600 cursor-pointer"
            whileHover={{ scale: 1.2, color: "#7c3aed" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Hover Me
          </motion.h2>
          
          <motion.h2
            className="text-2xl font-bold text-teal-600 cursor-pointer"
            whileHover={{ scale: 1.1, rotate: 5, color: "#0d9488" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            And Me
          </motion.h2>
          
          <motion.h2
            className="text-2xl font-bold text-rose-600 cursor-pointer"
            whileHover={{ scale: 1.15, y: -5, color: "#e11d48" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 350 }}
          >
            Also Me
          </motion.h2>
        </div>
      </div>

      {/* Text Wave Effect */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Text Wave Effect</h3>
        <div className="flex justify-center">
          {"WAVE".split("").map((letter, index) => (
            <motion.span
              key={index}
              className="text-4xl font-bold text-cyan-500 mx-1"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Glitch Text Effect */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Glitch Text Effect</h3>
        <div className="relative">
          <motion.div
            className="text-3xl font-bold text-white relative"
            animate={{
              x: [0, -2, 2, -1, 1, 0],
              y: [0, 1, -1, 2, -2, 0]
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 2
            }}
          >
            <span className="text-red-500">GLITCH</span>
          </motion.div>
          <motion.div
            className="text-3xl font-bold text-blue-500 absolute top-0 left-0"
            animate={{
              x: [0, 2, -2, 1, -1, 0],
              y: [0, -1, 1, -2, 2, 0]
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 2
            }}
          >
            GLITCH
          </motion.div>
        </div>
      </div>
    </div>
  );
};
