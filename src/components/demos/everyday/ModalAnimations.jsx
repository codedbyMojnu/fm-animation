import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const ModalAnimations = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("slide");

  const openModal = (type) => {
    setModalType(type);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const modalVariants = {
    slide: {
      hidden: { x: "100%", opacity: 0 },
      visible: { x: 0, opacity: 1 },
      exit: { x: "100%", opacity: 0 }
    },
    fade: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 }
    },
    drop: {
      hidden: { y: "-100%", opacity: 0 },
      visible: { y: 0, opacity: 1 },
      exit: { y: "-100%", opacity: 0 }
    },
    scale: {
      hidden: { scale: 0, opacity: 0 },
      visible: { scale: 1, opacity: 1 },
      exit: { scale: 0, opacity: 0 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <div className="space-y-8">
      {/* Modal Trigger Buttons */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Modal Animation Types</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.button
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openModal("slide")}
          >
            Slide Modal
          </motion.button>
          
          <motion.button
            className="px-6 py-3 bg-green-500 text-white rounded-lg font-medium"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openModal("fade")}
          >
            Fade Modal
          </motion.button>
          
          <motion.button
            className="px-6 py-3 bg-purple-500 text-white rounded-lg font-medium"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openModal("drop")}
          >
            Drop Modal
          </motion.button>
          
          <motion.button
            className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openModal("scale")}
          >
            Scale Modal
          </motion.button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50"
              variants={overlayVariants}
              onClick={closeModal}
            />
            
            {/* Modal Content */}
            <motion.div
              className="relative bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-2xl"
              variants={modalVariants[modalType]}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <motion.button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
                onClick={closeModal}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </motion.button>
              
              <div className="text-center">
                <motion.h2
                  className="text-2xl font-bold text-gray-800 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {modalType.charAt(0).toUpperCase() + modalType.slice(1)} Modal
                </motion.h2>
                
                <motion.p
                  className="text-gray-600 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  This is a {modalType} animation modal. Click outside or the close button to close it.
                </motion.p>
                
                <motion.button
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg font-medium"
                  onClick={closeModal}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notification Toast */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Notification Toast</h3>
        <motion.div
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ type: "spring", damping: 15, stiffness: 300 }}
        >
          <div className="flex items-center space-x-2">
            <span>✅</span>
            <span>Success! This is a toast notification</span>
          </div>
        </motion.div>
      </div>

      {/* Tooltip Animation */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Tooltip Animation</h3>
        <div className="relative inline-block">
          <motion.button
            className="px-6 py-3 bg-purple-500 text-white rounded-lg font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hover for Tooltip
          </motion.button>
          
          <motion.div
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap"
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            whileHover={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            This is a tooltip!
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </motion.div>
        </div>
      </div>

      {/* Drawer Animation */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Drawer Animation</h3>
        <motion.div
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => openModal("slide")}
        >
          Open Drawer
        </motion.div>
      </div>

      {/* Popup Animation */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Popup Animation</h3>
        <motion.div
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => openModal("scale")}
        >
          Show Popup
        </motion.div>
      </div>
    </div>
  );
};
