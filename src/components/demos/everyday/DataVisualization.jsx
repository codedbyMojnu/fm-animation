import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

export const DataVisualization = ({
  data = [65, 45, 80, 30, 90],
  labels = ["Mon", "Tue", "Wed", "Thu", "Fri"],
}) => {
  const [progressDisplay, setProgressDisplay] = useState(0);

  // Progress Value (Animated Counter)
  const progressValue = useMotionValue(0);
  const smoothProgress = useSpring(progressValue, {
    stiffness: 80,
    damping: 12,
  });
  const progressText = useTransform(smoothProgress, Math.round);

  useMotionValueEvent(progressText, "change", (latest) => {
    setProgressDisplay(latest);
  });

  useEffect(() => {
    progressValue.set(85);
  }, []);

  const maxValue = Math.max(...data);

  return (
    <div className="space-y-8">
      {/* Progress Bar */}
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Progress Indicator</h3>
        <div className="space-y-4">
          {/* Task Completion */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">Task Completion</span>
              <motion.span className="text-sm font-medium text-blue-600">
                {progressDisplay}%
              </motion.span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <motion.div
                className="bg-blue-600 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "85%" }}
                transition={{ type: "spring", stiffness: 120, damping: 15 }}
              />
            </div>
          </div>

          {/* Upload Progress */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">Upload Progress</span>
              <span className="text-sm font-medium text-green-600">67%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <motion.div
                className="bg-green-500 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "67%" }}
                transition={{ type: "spring", stiffness: 120, damping: 15 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Weekly Sales</h3>
        <div className="flex items-end justify-between h-40 space-x-2">
          {data.map((value, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <motion.div
                className="w-12 bg-gradient-to-t from-blue-500 to-blue-600 rounded-t-lg"
                initial={{ height: 0 }}
                animate={{ height: (value / maxValue) * 120 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: index * 0.12,
                }}
              />
              <motion.span
                className="text-sm text-gray-600"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12 + 0.4 }}
              >
                {labels[index]}
              </motion.span>
            </div>
          ))}
        </div>
      </div>

      {/* Circular Progress */}
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Circular Progress</h3>
        <div className="flex justify-center space-x-8">
          {[75, 60, 90].map((percentage, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-20 h-20">
                <svg
                  className="w-20 h-20 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    className="text-gray-200"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <motion.path
                    className="text-blue-600"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: percentage / 100 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                      delay: index * 0.2,
                    }}
                    strokeDasharray="1"
                    strokeDashoffset="0"
                  />
                </svg>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center text-sm font-bold text-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                >
                  {percentage}%
                </motion.div>
              </div>
              <span className="text-sm text-gray-600 mt-2">
                {index === 0 ? "Efficiency" : index === 1 ? "Quality" : "Speed"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Key Metrics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Users", value: 1234, color: "blue" },
            { label: "Revenue", value: "$45K", color: "green" },
            { label: "Orders", value: 567, color: "purple" },
            { label: "Growth", value: "+23%", color: "orange" },
          ].map((metric, index) => (
            <motion.div
              key={index}
              className="text-center p-4 rounded-lg bg-gray-50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 120,
              }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className={`text-2xl font-bold text-${metric.color}-600 mb-1`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
              >
                {metric.value}
              </motion.div>
              <div className="text-sm text-gray-600">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Line Chart */}
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Trend Analysis</h3>
        <div className="h-32 flex items-end space-x-1">
          {[30, 45, 35, 60, 40, 75, 65].map((value, index) => (
            <motion.div
              key={index}
              className="flex-1 bg-gradient-to-t from-purple-500 to-purple-600 rounded-t"
              initial={{ height: 0 }}
              animate={{ height: (value / 75) * 96 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.1,
              }}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"].map(
            (month, index) => (
              <motion.span
                key={month}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.6 }}
              >
                {month}
              </motion.span>
            )
          )}
        </div>
      </div>
    </div>
  );
};
