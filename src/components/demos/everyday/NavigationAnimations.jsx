import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const NavigationAnimations = ({ 
  navType = "basic",
  mobile = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const menuVariants = {
    closed: { 
      opacity: 0,
      x: -300,
      transition: { duration: 0.3 }
    },
    open: { 
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  const tabVariants = {
    active: { 
      scale: 1.05,
      backgroundColor: "#3b82f6",
      color: "white"
    },
    inactive: { 
      scale: 1,
      backgroundColor: "#f3f4f6",
      color: "#6b7280"
    }
  };

  return (
    <div className="space-y-8">
      {/* Basic Navigation Bar */}
      <motion.nav 
        className="bg-white shadow-lg rounded-lg p-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <motion.div
            className="text-xl font-bold text-blue-600"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            Logo
          </motion.div>
          
          <div className="hidden md:flex space-x-6">
            {["Home", "About", "Services", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 h-1 bg-gray-600 mb-1"></div>
            <div className="w-6 h-1 bg-gray-600 mb-1"></div>
            <div className="w-6 h-1 bg-gray-600"></div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mt-4 pt-4 border-t border-gray-200"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {["Home", "About", "Services", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="block py-2 text-gray-700 hover:text-blue-600"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg p-4 shadow-lg">
        <div className="flex space-x-2 mb-4">
          {["home", "profile", "settings", "help"].map((tab) => (
            <motion.button
              key={tab}
              className={`px-4 py-2 rounded-lg font-medium capitalize transition-all ${
                activeTab === tab ? "text-white" : "text-gray-600"
              }`}
              variants={tabVariants}
              animate={activeTab === tab ? "active" : "inactive"}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {tab}
            </motion.button>
          ))}
        </div>
        
        <motion.div
          key={activeTab}
          className="p-4 bg-gray-50 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-lg font-semibold mb-2 capitalize">{activeTab}</h3>
          <p className="text-gray-600">
            This is the content for the {activeTab} tab. Click different tabs to see the smooth transitions.
          </p>
        </motion.div>
      </div>

      {/* Breadcrumb Navigation */}
      <motion.nav 
        className="bg-white rounded-lg p-4 shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-2 text-sm">
          {["Home", "Products", "Electronics", "Smartphones"].map((item, index) => (
            <div key={item} className="flex items-center">
              <motion.a
                href="#"
                className="text-blue-600 hover:text-blue-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                {item}
              </motion.a>
              {index < 3 && (
                <motion.span
                  className="mx-2 text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                >
                  /
                </motion.span>
              )}
            </div>
          ))}
        </div>
      </motion.nav>

      {/* Dropdown Menu */}
      <div className="relative">
        <motion.button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          Dropdown Menu
        </motion.button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {["Profile", "Settings", "Help", "Logout"].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                  whileHover={{ x: 5, backgroundColor: "#f3f4f6" }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
