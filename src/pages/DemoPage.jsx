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
    return `<motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: ${controls.scale}, rotate: ${controls.rotate} }}
  transition={{ duration: ${controls.duration}, ease: "easeInOut" }}
>
  {/* ... */}
</motion.div>`;
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
          <div className="flex items-center justify-center w-full h-96 bg-grid-pattern rounded-md">
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
          <ControlsPanel
            demo={demo}
            controls={controls}
            onControlChange={handleControlChange}
          />
        </div>
      </div>
    </div>
  );
};
