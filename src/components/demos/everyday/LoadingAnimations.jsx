import { motion } from "framer-motion";

export const LoadingAnimations = ({ 
  loadingType = "spinner",
  size = "medium"
}) => {
  const sizeVariants = {
    small: "w-6 h-6",
    medium: "w-12 h-12",
    large: "w-16 h-16"
  };

  return (
    <div className="space-y-8">
      {/* Spinner Loader */}
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Spinner Loaders</h3>
        <div className="flex space-x-8">
          {/* Basic Spinner */}
          <div className="flex flex-col items-center space-y-2">
            <motion.div
              className={`${sizeVariants[size]} border-4 border-gray-200 border-t-blue-600 rounded-full`}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <span className="text-sm text-gray-600">Basic</span>
          </div>

          {/* Pulse Spinner */}
          <div className="flex flex-col items-center space-y-2">
            <motion.div
              className={`${sizeVariants[size]} bg-blue-600 rounded-full`}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <span className="text-sm text-gray-600">Pulse</span>
          </div>

          {/* Bounce Spinner */}
          <div className="flex flex-col items-center space-y-2">
            <div className="flex space-x-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-blue-600 rounded-full"
                  animate={{ 
                    y: [0, -10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">Bounce</span>
          </div>
        </div>
      </div>

      {/* Skeleton Loading */}
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Skeleton Loading</h3>
        <div className="space-y-4">
          {/* Card Skeleton */}
          <div className="border rounded-lg p-4">
            <div className="flex space-x-4">
              <motion.div
                className="w-16 h-16 bg-gray-200 rounded-lg"
                animate={{ 
                  backgroundColor: ["#e5e7eb", "#d1d5db", "#e5e7eb"]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="flex-1 space-y-2">
                <motion.div
                  className="h-4 bg-gray-200 rounded w-3/4"
                  animate={{ 
                    backgroundColor: ["#e5e7eb", "#d1d5db", "#e5e7eb"]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="h-3 bg-gray-200 rounded w-1/2"
                  animate={{ 
                    backgroundColor: ["#e5e7eb", "#d1d5db", "#e5e7eb"]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </div>
          </div>

          {/* List Skeleton */}
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center space-x-3">
                <motion.div
                  className="w-10 h-10 bg-gray-200 rounded-full"
                  animate={{ 
                    backgroundColor: ["#e5e7eb", "#d1d5db", "#e5e7eb"]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
                <div className="flex-1 space-y-2">
                  <motion.div
                    className="h-3 bg-gray-200 rounded w-full"
                    animate={{ 
                      backgroundColor: ["#e5e7eb", "#d1d5db", "#e5e7eb"]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="h-2 bg-gray-200 rounded w-2/3"
                    animate={{ 
                      backgroundColor: ["#e5e7eb", "#d1d5db", "#e5e7eb"]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Loaders */}
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Progress Loaders</h3>
        <div className="space-y-4">
          {/* Linear Progress */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">Uploading...</span>
              <span className="text-sm font-medium text-blue-600">45%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-blue-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "45%" }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Circular Progress */}
          <div className="flex justify-center">
            <div className="relative w-20 h-20">
              <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-gray-200"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <motion.path
                  className="text-green-600"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 0.75 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  strokeDasharray="1"
                  strokeDashoffset="0"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-gray-700">
                75%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Loading */}
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Content Loading</h3>
        <div className="space-y-4">
          {/* Text Loading */}
          <div>
            <motion.div
              className="h-6 bg-gray-200 rounded w-3/4 mb-2"
              animate={{ 
                backgroundColor: ["#e5e7eb", "#d1d5db", "#e5e7eb"]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="h-4 bg-gray-200 rounded w-full mb-2"
              animate={{ 
                backgroundColor: ["#e5e7eb", "#d1d5db", "#e5e7eb"]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="h-4 bg-gray-200 rounded w-2/3"
              animate={{ 
                backgroundColor: ["#e5e7eb", "#d1d5db", "#e5e7eb"]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Image Loading */}
          <div className="flex space-x-4">
            <motion.div
              className="w-24 h-24 bg-gray-200 rounded-lg"
              animate={{ 
                backgroundColor: ["#e5e7eb", "#d1d5db", "#e5e7eb"]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="w-24 h-24 bg-gray-200 rounded-lg"
              animate={{ 
                backgroundColor: ["#e5e7eb", "#d1d5db", "#e5e7eb"]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                delay: 0.3,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
