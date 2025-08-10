import { MoonIcon, SunIcon } from "../../assets/icons";

export const Header = ({ theme, toggleTheme }) => (
  <header
    className="fixed top-0 left-0 right-0 z-20 bg-white/80 backdrop-blur-sm border-b border-slate-200"
    style={{
      backgroundColor: "var(--color-bg-secondary)",
      borderColor: "var(--color-border)",
    }}
  >
    <div className="container mx-auto px-4 h-16 flex items-center justify-between">
      <h1
        className="text-xl font-bold"
        style={{ color: "var(--color-text-primary)" }}
      >
        Framer Motion<span className="text-indigo-500">.</span>
        <span
          className="font-light"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Playground
        </span>
      </h1>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/your-repo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition-colors"
          style={{ color: "var(--color-text-secondary)" }}
        >
          GitHub
        </a>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:text-indigo-500 hover:bg-slate-100 transition-colors"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </div>
  </header>
);
