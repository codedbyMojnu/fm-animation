import { useEffect, useState } from "react";
import { Header } from "./components/ui/Header";
import { Sidebar } from "./components/ui/Sidebar";
import { ThemeProvider } from "./context/ThemeContext";
import { demos } from "./data/demos";
import { useTheme } from "./hooks/useTheme";
import { DemoPage } from "./pages/DemoPage";
import { HomePage } from "./pages/Home";

// ============================================================================
// Main App Component (মূল অ্যাপ কম্পোনেন্ট)
// src/App.jsx
// ============================================================================

function AppContent() {
  const { theme, toggleTheme } = useTheme();
  const [route, setRoute] = useState(
    window.location.hash.substring(1) || "home"
  );

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash.substring(1) || "home");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigate = (slug) => {
    window.location.hash = slug;
    setRoute(slug);
  };

  const renderContent = () => {
    if (route === "home" || !demos.some((d) => d.slug === route)) {
      return <HomePage navigate={navigate} />;
    }
    return <DemoPage slug={route} />;
  };

  return (
    <div
      className="min-h-screen transition-colors duration-300 font-sans"
      style={{
        backgroundColor: "var(--color-bg-primary)",
        color: "var(--color-text-primary)",
      }}
    >
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Sidebar currentSlug={route} navigate={navigate} />
      <main className="ml-64 pt-24 pb-12 px-8">
        <div className="container mx-auto">{renderContent()}</div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
