import { motion } from "framer-motion";
import { useState } from "react";

export const FormAnimations = ({ 
  formType = "basic",
  validation = false
}) => {
  const [focused, setFocused] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputVariants = {
    focus: { 
      scale: 1.02, 
      borderColor: "#3b82f6",
      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)"
    },
    blur: { 
      scale: 1, 
      borderColor: "#d1d5db",
      boxShadow: "0 0 0 0 rgba(59, 130, 246, 0)"
    }
  };

  const labelVariants = {
    focus: { 
      y: -25, 
      scale: 0.85, 
      color: "#3b82f6" 
    },
    blur: { 
      y: 0, 
      scale: 1, 
      color: "#6b7280" 
    }
  };

  const buttonVariants = {
    idle: { scale: 1 },
    hover: { scale: 1.05, y: -2 },
    tap: { scale: 0.95 }
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      {/* Floating Label Input */}
      <div className="relative">
        <motion.input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setFocused("email")}
          onBlur={() => setFocused(null)}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none transition-all"
          variants={inputVariants}
          animate={focused === "email" ? "focus" : "blur"}
          transition={{ duration: 0.2 }}
        />
        <motion.label
          className={`absolute left-4 transition-all pointer-events-none ${
            email || focused === "email" ? "text-blue-600" : "text-gray-500"
          }`}
          variants={labelVariants}
          animate={focused === "email" || email ? "focus" : "blur"}
          transition={{ duration: 0.2 }}
        >
          Email Address
        </motion.label>
      </div>

      {/* Password Input with Strength Indicator */}
      <div className="relative">
        <motion.input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setFocused("password")}
          onBlur={() => setFocused(null)}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none transition-all"
          variants={inputVariants}
          animate={focused === "password" ? "focus" : "blur"}
          transition={{ duration: 0.2 }}
        />
        <motion.label
          className={`absolute left-4 transition-all pointer-events-none ${
            password || focused === "password" ? "text-blue-600" : "text-gray-500"
          }`}
          variants={labelVariants}
          animate={focused === "password" || password ? "focus" : "blur"}
          transition={{ duration: 0.2 }}
        >
          Password
        </motion.label>
        
        {/* Password Strength Bar */}
        {password && (
          <motion.div
            className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={`h-full rounded-full ${
                password.length < 6 ? "bg-red-500" :
                password.length < 10 ? "bg-yellow-500" : "bg-green-500"
              }`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: password.length / 12 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </motion.div>
        )}
      </div>

      {/* Checkbox with Animation */}
      <motion.div
        className="flex items-center space-x-3 cursor-pointer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center"
          whileHover={{ borderColor: "#3b82f6" }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="w-2.5 h-2.5 bg-blue-600 rounded-sm"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
        <span className="text-gray-700">Remember me</span>
      </motion.div>

      {/* Submit Button */}
      <motion.button
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium shadow-lg"
        variants={buttonVariants}
        initial="idle"
        whileHover="hover"
        whileTap="tap"
        transition={{ duration: 0.2 }}
      >
        Sign In
      </motion.button>

      {/* Social Login Buttons */}
      <div className="space-y-3">
        <motion.button
          className="w-full bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-medium flex items-center justify-center space-x-2"
          whileHover={{ 
            borderColor: "#3b82f6",
            backgroundColor: "#f8fafc"
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="w-5 h-5 bg-red-500 rounded"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          />
          <span>Continue with Google</span>
        </motion.button>

        <motion.button
          className="w-full bg-black text-white py-3 rounded-lg font-medium flex items-center justify-center space-x-2"
          whileHover={{ 
            scale: 1.02,
            backgroundColor: "#1f2937"
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="w-5 h-5 bg-white rounded"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          />
          <span>Continue with Apple</span>
        </motion.button>
      </div>

      {/* Form Validation Messages */}
      {validation && (
        <motion.div
          className="bg-red-50 border border-red-200 rounded-lg p-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center space-x-2">
            <motion.div
              className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <span className="text-white text-xs">!</span>
            </motion.div>
            <p className="text-red-700 text-sm">Please fill in all required fields</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};
