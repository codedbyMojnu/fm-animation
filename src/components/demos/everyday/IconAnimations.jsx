import { motion } from "framer-motion";

export const IconAnimations = () => {
  return (
    <div className="space-y-8">
      {/* Basic Icon Hover */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Icon Hover Effects</h3>
        <div className="flex justify-center space-x-6">
          <motion.div
            className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl cursor-pointer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            ⭐
          </motion.div>
          
          <motion.div
            className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl cursor-pointer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            ❤️
          </motion.div>
          
          <motion.div
            className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl cursor-pointer"
            whileHover={{ scale: 1.15, rotate: -15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 350 }}
          >
            🚀
          </motion.div>
        </div>
      </div>

      {/* Rotating Icons */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Rotating Icons</h3>
        <div className="flex justify-center space-x-6">
          <motion.div
            className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            🔄
          </motion.div>
          
          <motion.div
            className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl"
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            ⚡
          </motion.div>
          
          <motion.div
            className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white text-2xl"
            animate={{ rotate: [0, 180, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            🌙
          </motion.div>
        </div>
      </div>

      {/* Bouncing Icons */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Bouncing Icons</h3>
        <div className="flex justify-center space-x-6">
          <motion.div
            className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white text-2xl"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          >
            🏀
          </motion.div>
          
          <motion.div
            className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          >
            🎾
          </motion.div>
          
          <motion.div
            className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white text-2xl"
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          >
            ⚽
          </motion.div>
        </div>
      </div>

      {/* Pulse Icons */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Pulse Icons</h3>
        <div className="flex justify-center space-x-6">
          <motion.div
            className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl relative"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            🔴
          </motion.div>
          
          <motion.div
            className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl relative"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            🟢
          </motion.div>
          
          <motion.div
            className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl relative"
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            🔵
          </motion.div>
        </div>
      </div>

      {/* Interactive Icons */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Interactive Icons</h3>
        <div className="flex justify-center space-x-6">
          <motion.div
            className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl cursor-pointer"
            whileHover={{ 
              scale: 1.1, 
              rotate: 10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)"
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            ✨
          </motion.div>
          
          <motion.div
            className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl cursor-pointer"
            whileHover={{ 
              scale: 1.1, 
              y: -10,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)"
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            💎
          </motion.div>
          
          <motion.div
            className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl cursor-pointer"
            whileHover={{ 
              scale: 1.1, 
              rotate: 360,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)"
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            🔥
          </motion.div>
        </div>
      </div>
    </div>
  );
};
