export const ControlsPanel = ({ demo, controls, onControlChange }) => (
  <div className="space-y-6">
    {demo.controls.map((control) => (
      <div key={control.name}>
        <label
          htmlFor={control.name}
          className="block text-sm font-medium mb-2"
          style={{ color: "var(--color-text-primary)" }}
        >
          {control.label}
        </label>
        {control.type === "range" && (
          <div className="flex items-center gap-4">
            <input
              type="range"
              id={control.name}
              name={control.name}
              min={control.min}
              max={control.max}
              step={control.step}
              value={controls[control.name]}
              onChange={(e) =>
                onControlChange(control.name, parseFloat(e.target.value))
              }
              className="w-full h-2 rounded-lg appearance-none cursor-pointer"
              style={{ backgroundColor: "var(--color-bg-tertiary)" }}
            />
            <span
              className="text-sm w-12 text-center"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {controls[control.name]}
            </span>
          </div>
        )}
        {/* অন্যান্য ইনপুট টাইপ (যেমন, color, text) এখানে যোগ করা যাবে */}
      </div>
    ))}
  </div>
);
