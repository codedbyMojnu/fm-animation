import { motion } from "framer-motion";

export const CardAnimations = ({ 
  cardType = "basic",
  elevation = "medium"
}) => {
  const elevationVariants = {
    low: "shadow-md",
    medium: "shadow-lg",
    high: "shadow-2xl"
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const cardVariants = {
    hover: { 
      y: -10, 
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Basic Card */}
      <motion.div
        className={`bg-white rounded-lg p-6 ${elevationVariants[elevation]} border`}
        variants={cardVariants}
        whileHover="hover"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="w-12 h-12 bg-blue-500 rounded-lg mb-4"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <h3 className="text-lg font-semibold mb-2">Basic Card</h3>
        <p className="text-gray-600">A simple card with hover animations</p>
      </motion.div>

      {/* Image Card */}
      <motion.div
        className={`bg-white rounded-lg overflow-hidden ${elevationVariants[elevation]} border`}
        variants={cardVariants}
        whileHover="hover"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="w-full h-32 bg-gradient-to-r from-purple-400 to-pink-400"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2">Image Card</h3>
          <p className="text-gray-600">Card with animated image area</p>
        </div>
      </motion.div>

      {/* Interactive Card */}
      <motion.div
        className={`bg-white rounded-lg p-6 ${elevationVariants[elevation]} border cursor-pointer`}
        variants={cardVariants}
        whileHover="hover"
        whileTap={{ scale: 0.98 }}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="w-12 h-12 bg-green-500 rounded-full mb-4 mx-auto"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <h3 className="text-lg font-semibold mb-2 text-center">Interactive</h3>
        <p className="text-gray-600 text-center">Always animated card</p>
      </motion.div>

      {/* Stats Card */}
      <motion.div
        className={`bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg p-6 ${elevationVariants[elevation]}`}
        variants={cardVariants}
        whileHover="hover"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="text-3xl font-bold mb-2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          1,234
        </motion.div>
        <p className="text-blue-100">Total Users</p>
      </motion.div>

      {/* Notification Card */}
      <motion.div
        className={`bg-yellow-50 border-l-4 border-yellow-400 p-4 ${elevationVariants[elevation]} rounded-r-lg`}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <div className="flex">
          <motion.div
            className="flex-shrink-0 w-5 h-5 bg-yellow-400 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              This is a notification card with slide-in animation
            </p>
          </div>
        </div>
      </motion.div>

      {/* Loading Card */}
      <motion.div
        className={`bg-white rounded-lg p-6 ${elevationVariants[elevation]} border`}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="animate-pulse">
          <div className="w-12 h-12 bg-gray-300 rounded-lg mb-4"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>
        <motion.div
          className="mt-4 w-full bg-blue-500 h-2 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};
