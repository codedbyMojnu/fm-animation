import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContextObject";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check if user prefers dark mode
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    // In Tailwind CSS v4, we toggle the media query by updating the CSS custom properties
    const root = document.documentElement;
    const isDark = theme === "dark";

    if (isDark) {
      // Switch to light mode
      root.style.setProperty("--color-bg-primary", "#f8fafc");
      root.style.setProperty("--color-bg-secondary", "#ffffff");
      root.style.setProperty("--color-bg-tertiary", "#f1f5f9");
      root.style.setProperty("--color-text-primary", "#1e293b");
      root.style.setProperty("--color-text-secondary", "#475569");
      root.style.setProperty("--color-border", "#e2e8f0");
      root.style.setProperty("--color-accent", "#6366f1");
      setTheme("light");
    } else {
      // Switch to dark mode
      root.style.setProperty("--color-bg-primary", "#0f172a");
      root.style.setProperty("--color-bg-secondary", "#1e293b");
      root.style.setProperty("--color-bg-tertiary", "#334155");
      root.style.setProperty("--color-text-primary", "#f1f5f9");
      root.style.setProperty("--color-text-secondary", "#cbd5e1");
      root.style.setProperty("--color-border", "#475569");
      root.style.setProperty("--color-accent", "#818cf8");
      setTheme("dark");
    }
  };

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
