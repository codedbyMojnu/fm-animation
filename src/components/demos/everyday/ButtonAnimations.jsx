import { motion } from "framer-motion";

export const ButtonAnimations = ({ 
  buttonType = "primary",
  size = "medium",
  disabled = false 
}) => {
  const buttonVariants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white",
    success: "bg-green-600 hover:bg-green-700 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
  };

  const sizeVariants = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg"
  };

  return (
    <div className="space-y-4">
      <motion.button
        className={`${buttonVariants[buttonType]} ${sizeVariants[size]} rounded-lg font-medium transition-colors`}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        disabled={disabled}
        animate={disabled ? { opacity: 0.5, scale: 0.95 } : {}}
      >
        {buttonType === "primary" && "Primary Button"}
        {buttonType === "secondary" && "Secondary Button"}
        {buttonType === "success" && "Success Button"}
        {buttonType === "danger" && "Danger Button"}
        {buttonType === "outline" && "Outline Button"}
      </motion.button>

      <motion.button
        className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium"
        whileHover={{ 
          scale: 1.1, 
          rotate: [0, -5, 5, -5, 0],
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.9 }}
      >
        Wiggle Button
      </motion.button>

      <motion.button
        className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-medium"
        whileHover={{ 
          background: "linear-gradient(90deg, #ec4899, #8b5cf6)",
          scale: 1.05,
          boxShadow: "0 10px 25px rgba(236, 72, 153, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        Gradient Button
      </motion.button>
    </div>
  );
};
