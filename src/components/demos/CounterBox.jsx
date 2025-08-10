import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect } from "react";

export const CounterBox = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 2 });
    return animation.stop;
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="text-6xl font-bold text-blue-600">
        <motion.span>{rounded}</motion.span>
      </div>
      <p className="text-gray-600 text-center">
        Smooth counter animation from 0 to 100
      </p>
    </div>
  );
};
