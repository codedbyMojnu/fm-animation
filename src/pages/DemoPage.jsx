import { CodeBlock } from "../components/ui/CodeBlock";
import { ControlsPanel } from "../components/ui/ControlsPanel";
import { demos } from "../data/demos";
import { useLocalControls } from "../hooks/useLocalControls";

export const DemoPage = ({ slug }) => {
  const demo = demos.find((d) => d.slug === slug);
  const { controls, handleControlChange } = useLocalControls(demo);

  if (!demo) {
    return <div>ডেমো পাওয়া যায়নি।</div>;
  }

  const DemoComponent = demo.component;

  const generateCodeSnippet = () => {
    switch (demo.slug) {
      case "basic-box":
        return `<motion.div
  className="w-32 h-32 bg-indigo-500 rounded-lg"
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: ${controls.scale}, rotate: ${controls.rotate} }}
  transition={{ duration: ${controls.duration}, ease: "easeInOut" }}
/>`;

      case "keyframes":
        return `<motion.div
  className="w-40 h-40 bg-blue-500 rounded-lg"
  animate={{
    scale: [1, ${controls.scaleMax}, 1, ${controls.scaleMax}, 1],
    rotate: [0, ${controls.rotateMax}, 0, -${controls.rotateMax}, 0],
    borderRadius: ["20%", "50%", "20%", "50%", "20%"],
  }}
  transition={{
    duration: ${controls.duration},
    ease: "easeInOut",
    times: [0, 0.25, 0.5, 0.75, 1],
    repeat: Infinity,
    repeatDelay: ${controls.repeatDelay},
  }}
/>`;

      case "gestures":
        return `<motion.button
  className="px-6 py-3 bg-gray-800 text-white rounded-lg"
  whileHover={{ scale: 1.1, rotate: 3 }}
  whileTap={{ scale: 0.9, rotate: -3 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  Click Me
</motion.button>`;

      case "drag":
        return `<motion.div
  className="w-32 h-32 bg-green-500 rounded-lg"
  drag
  dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
  dragElastic={0.1}
  whileDrag={{ scale: 1.1 }}
/>`;

      case "stagger":
        return `const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

<motion.ul variants={containerVariants} initial="hidden" animate="visible">
  {items.map((item, index) => (
    <motion.li key={index} variants={itemVariants}>
      {item}
    </motion.li>
  ))}
</motion.ul>`;

      case "scroll":
        return `const { scrollYProgress } = useScroll();
const scale = useTransform(scrollYProgress, [0, 1], [0.5, 2]);

<motion.div
  style={{ scale }}
  className="w-40 h-40 bg-pink-500 rounded-lg"
/>`;

      case "counter":
        return `const count = useMotionValue(0);
const rounded = useTransform(count, Math.round);

useEffect(() => {
  const animation = animate(count, 100, { duration: 2 });
  return animation.stop;
}, []);

<motion.span>{rounded}</motion.span>`;

      case "scroll-reveal":
        return `<motion.div
  className="w-32 h-32 bg-pink-300 rounded"
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>
  {text}
</motion.div>`;

      case "stagger-example":
        return `const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

<motion.ul variants={container} initial="hidden" animate="visible">
  {list.map((text, idx) => (
    <motion.li key={idx} variants={item}>
      {text}
    </motion.li>
  ))}
</motion.ul>`;

      case "text-animations":
        return `// Typing Animation
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: ${controls.fadeDuration} }}
>
  <motion.span
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: ${controls.typingSpeed} }}
  >
    Hello World
  </motion.span>
</motion.div>

// Staggered Text
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * ${controls.staggerDelay},
      duration: ${controls.fadeDuration}
    }
  })
};

{text.split('').map((char, i) => (
  <motion.span
    key={i}
    custom={i}
    variants={textVariants}
    initial="hidden"
    animate="visible"
  >
    {char}
  </motion.span>
))}`;

      case "icon-animations":
        return `// Rotating Icon
<motion.div
  animate={{ rotate: 360 }}
  transition={{
    duration: ${controls.rotateSpeed},
    repeat: Infinity,
    ease: "linear"
  }}
>
  <Icon className="w-8 h-8" />
</motion.div>

// Bouncing Icon
<motion.div
  animate={{ y: [-${controls.bounceHeight}, 0] }}
  transition={{
    duration: 0.6,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut"
  }}
>
  <Icon className="w-8 h-8" />
</motion.div>

// Hover Scale
<motion.div
  whileHover={{ scale: ${controls.scaleAmount} }}
  transition={{ type: "spring", stiffness: 300 }}
>
  <Icon className="w-8 h-8" />
</motion.div>`;

      case "modal-animations":
        return `// Modal Container
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: ${controls.fadeDuration} }}
  className="fixed inset-0 bg-black bg-opacity-50"
>
  {/* Modal Content */}
  <motion.div
    initial={{ 
      opacity: 0, 
      scale: ${controls.scaleAmount},
      y: ${controls.slideDistance}
    }}
    animate={{ 
      opacity: 1, 
      scale: 1,
      y: 0
    }}
    exit={{ 
      opacity: 0, 
      scale: ${controls.scaleAmount},
      y: ${controls.slideDistance}
    }}
    transition={{ duration: ${controls.fadeDuration} }}
    className="bg-white rounded-lg p-6"
  >
    Modal Content
  </motion.div>
</motion.div>`;

      case "list-animations":
        return `// List Container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ${controls.staggerDelay}
    }
  }
};

// List Item
const itemVariants = {
  hidden: { 
    opacity: 0, 
    x: -${controls.slideDistance} 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: ${controls.fadeDuration} }
  }
};

<motion.ul
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {items.map((item, index) => (
    <motion.li
      key={index}
      variants={itemVariants}
      className="p-2 border-b"
    >
      {item}
    </motion.li>
  ))}
</motion.ul>`;

      case "button-animations":
        return `// Interactive Button
<motion.button
  className="px-6 py-3 bg-blue-600 text-white rounded-lg"
  whileHover={{ 
    scale: ${controls.hoverScale},
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
  }}
  whileTap={{ scale: ${controls.clickScale} }}
  transition={{ type: "spring", stiffness: 300 }}
>
  Click Me
</motion.button>

// Ripple Effect
<motion.div
  className="absolute inset-0 rounded-lg"
  initial={{ scale: 0, opacity: 0.5 }}
  animate={{ scale: ${controls.rippleSize}, opacity: 0 }}
  transition={{ duration: 0.6 }}
/>`;

      case "card-animations":
        return `// Hover Card
<motion.div
  className="p-6 bg-white rounded-lg shadow-md"
  whileHover={{ 
    y: -${controls.hoverElevation},
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
  }}
  transition={{ type: "spring", stiffness: 300 }}
>
  Card Content
</motion.div>

// Flip Card
<motion.div
  className="relative w-64 h-40"
  whileHover={{ rotateY: 180 }}
  transition={{ duration: ${controls.flipDuration} }}
>
  <div className="absolute inset-0 backface-hidden">
    Front Side
  </div>
  <div className="absolute inset-0 backface-hidden rotateY-180">
    Back Side
  </div>
</motion.div>`;

      case "form-animations":
        return `// Input Field
<motion.input
  className="w-full p-3 border rounded-lg"
  whileFocus={{ 
    scale: ${controls.focusScale},
    borderColor: "#3b82f6"
  }}
  transition={{ type: "spring", stiffness: 300 }}
  placeholder="Enter text..."
/>

// Error State
<motion.div
  animate={{ x: [-${controls.errorShake}, ${controls.errorShake}, 0] }}
  transition={{ duration: 0.5, repeat: 2 }}
  className="text-red-500"
>
  Error message
</motion.div>

// Success State
<motion.div
  animate={{ y: [-${controls.successBounce}, 0] }}
  transition={{ type: "spring", stiffness: 300 }}
  className="text-green-500"
>
  Success!
</motion.div>`;

      case "loading-animations":
        return `// Spinner
<motion.div
  className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full"
  animate={{ rotate: 360 }}
  transition={{ 
    duration: ${controls.spinnerSpeed},
    repeat: Infinity,
    ease: "linear"
  }}
/>

// Skeleton
<motion.div
  className="h-4 bg-gray-200 rounded"
  animate={{ opacity: [0.5, 1, 0.5] }}
  transition={{ 
    duration: ${controls.pulseDuration},
    repeat: Infinity
  }}
/>

// Progress Bar
<motion.div
  className="h-2 bg-gray-200 rounded-full overflow-hidden"
>
  <motion.div
    className="h-full bg-blue-600"
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    transition={{ duration: ${controls.progressSpeed} }}
  />
</motion.div>`;

      case "navigation-animations":
        return `// Menu Item
<motion.li
  initial={{ x: -${controls.slideDistance}, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ 
    duration: ${controls.fadeDuration},
    delay: index * ${controls.staggerDelay}
  }}
  className="p-2 hover:bg-gray-100"
>
  Menu Item
</motion.li>

// Tab Content
<motion.div
  key={activeTab}
  initial={{ opacity: 0, y: ${controls.slideDistance} }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -${controls.slideDistance} }}
  transition={{ duration: ${controls.fadeDuration} }}
>
  Tab Content
</motion.div>`;

      case "data-visualization":
        return `// Bar Chart
<motion.div
  className="flex items-end space-x-2 h-${controls.barHeight}"
>
  {data.map((value, index) => (
    <motion.div
      key={index}
      className="bg-blue-500 rounded-t"
      initial={{ height: 0 }}
      animate={{ height: value }}
      transition={{ 
        duration: ${controls.chartDuration},
        delay: index * ${controls.staggerDelay}
      }}
      style={{ width: "40px" }}
    />
  ))}
</motion.div>

// Line Chart
<motion.path
  d={pathData}
  stroke="currentColor"
  strokeWidth="2"
  fill="none"
  initial={{ pathLength: 0 }}
  animate={{ pathLength: 1 }}
  transition={{ duration: ${controls.chartDuration} }}
/>`;

      default:
        return `// Code for ${demo.title}`;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Preview - Left Side */}
      <div className="lg:col-span-2 space-y-6">
        {/* Animation Preview */}
        <div
          className="rounded-lg shadow-sm p-4 border"
          style={{
            backgroundColor: "var(--color-bg-secondary)",
            borderColor: "var(--color-border)",
          }}
        >
          <div className="flex items-center justify-center w-full min-h-96 bg-grid-pattern rounded-md">
            {DemoComponent && <DemoComponent {...controls} />}
          </div>
        </div>
        {/* Code Block - Left Side */}
        <div
          className="rounded-lg shadow-sm border"
          style={{
            backgroundColor: "var(--color-bg-secondary)",
            borderColor: "var(--color-border)",
          }}
        >
          <h3
            className="text-lg font-bold p-4 border-b"
            style={{
              color: "var(--color-text-primary)",
              borderColor: "var(--color-border)",
            }}
          >
            Code
          </h3>
          <div className="p-4">
            <CodeBlock code={generateCodeSnippet()} />
          </div>
        </div>
      </div>

      {/* Right Sidebar - Controls Only */}
      <div className="lg:col-span-1">
        {/* Controls Panel */}
        <div
          className="rounded-lg shadow-sm p-6 border"
          style={{
            backgroundColor: "var(--color-bg-secondary)",
            borderColor: "var(--color-border)",
          }}
        >
          <h3
            className="text-lg font-bold mb-1"
            style={{ color: "var(--color-text-primary)" }}
          >
            {demo.title}
          </h3>
          <p
            className="text-sm mb-6"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {demo.description}
          </p>
          {demo.controls && demo.controls.length > 0 ? (
            <ControlsPanel
              demo={demo}
              controls={controls}
              onControlChange={handleControlChange}
            />
          ) : (
            <div className="text-sm text-gray-500 italic">
              এই ডেমোতে কোন কন্ট্রোল নেই। শুধু অ্যানিমেশন দেখুন।
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
