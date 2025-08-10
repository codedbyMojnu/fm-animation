import { motion } from "framer-motion";
import { useState } from "react";

export const ListAnimations = () => {
  const [selectedItem, setSelectedItem] = useState(null);

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const gridItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const listItems = [
    { id: 1, text: "First Item", color: "bg-blue-500" },
    { id: 2, text: "Second Item", color: "bg-green-500" },
    { id: 3, text: "Third Item", color: "bg-purple-500" },
    { id: 4, text: "Fourth Item", color: "bg-orange-500" },
    { id: 5, text: "Fifth Item", color: "bg-red-500" }
  ];

  const gridItems = [
    { id: 1, text: "Grid 1", color: "bg-indigo-500" },
    { id: 2, text: "Grid 2", color: "bg-pink-500" },
    { id: 3, text: "Grid 3", color: "bg-teal-500" },
    { id: 4, text: "Grid 4", color: "bg-yellow-500" },
    { id: 5, text: "Grid 5", color: "bg-rose-500" },
    { id: 6, text: "Grid 6", color: "bg-cyan-500" }
  ];

  return (
    <div className="space-y-8">
      {/* Staggered List */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-center">Staggered List</h3>
        <motion.ul
          className="space-y-3 max-w-md mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {listItems.map((item) => (
            <motion.li
              key={item.id}
              variants={itemVariants}
              className={`${item.color} text-white p-4 rounded-lg shadow-md cursor-pointer`}
              whileHover={{ scale: 1.02, x: 10 }}
              whileTap={{ scale: 0.98 }}
            >
              {item.text}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Interactive List */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-center">Interactive List</h3>
        <motion.ul className="space-y-3 max-w-md mx-auto">
          {listItems.map((item) => (
            <motion.li
              key={item.id}
              className={`${item.color} text-white p-4 rounded-lg shadow-md cursor-pointer`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: item.id * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                x: 15,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
            >
              <div className="flex justify-between items-center">
                <span>{item.text}</span>
                <motion.span
                  animate={{ rotate: selectedItem === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {selectedItem === item.id ? "▼" : "▶"}
                </motion.span>
              </div>
              {selectedItem === item.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-3 pt-3 border-t border-white border-opacity-30"
                >
                  <p className="text-sm opacity-90">
                    This is additional content for {item.text}. Click again to hide.
                  </p>
                </motion.div>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Grid Layout */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-center">Grid Layout</h3>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto"
          variants={gridContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {gridItems.map((item) => (
            <motion.div
              key={item.id}
              variants={gridItemVariants}
              className={`${item.color} text-white p-6 rounded-lg shadow-md cursor-pointer text-center`}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {item.text}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Masonry Grid */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-center">Masonry Grid</h3>
        <div className="columns-2 md:columns-3 gap-4 max-w-4xl mx-auto">
          {gridItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`${item.color} text-white p-4 rounded-lg shadow-md mb-4 break-inside-avoid`}
              style={{ height: `${120 + (index * 20)}px` }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)"
              }}
            >
              <div className="flex flex-col justify-center items-center h-full">
                <span className="text-lg font-semibold">{item.text}</span>
                <span className="text-sm opacity-80">Height: {120 + (index * 20)}px</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated Checkbox List */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-center">Animated Checkbox List</h3>
        <motion.ul className="space-y-3 max-w-md mx-auto">
          {["Complete setup", "Write documentation", "Test functionality", "Deploy to production"].map((task, index) => (
            <motion.li
              key={index}
              className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 5, backgroundColor: "#f3f4f6" }}
            >
              <motion.div
                className="w-5 h-5 border-2 border-blue-500 rounded flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="w-3 h-3 bg-blue-500 rounded"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>
              <span className="text-gray-700">{task}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Floating Action Button */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Floating Action Button</h3>
        <motion.button
          className="w-16 h-16 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center text-2xl"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ 
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          +
        </motion.button>
      </div>
    </div>
  );
};
