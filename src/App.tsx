// src/App.tsx
import { useEffect, useState } from "react";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { RiskToolPage } from "./components/RiskToolPage";
import { ComplianceChecklistPage } from "./components/ComplianceChecklistPage";
import { AboutPage } from "./components/AboutPage";
import { ResourcesPage } from "./components/ResourcesPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  // Options passed during navigation (e.g., { resume: { sectionId, step } })
  const [navOpts, setNavOpts] = useState<Record<string, any> | undefined>(undefined);

  const handleNavigate = (page: string, opts?: Record<string, any>) => {
    setNavOpts(opts);
    setCurrentPage(page);
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", `/${page === "home" ? "" : page}`);
    }
  };

  // Clear one-time nav options after the destination page mounts and reads them
  const clearNavOpts = () => setNavOpts(undefined);

  // 🧭 Keep the right page when reloading
  useEffect(() => {
    if (typeof window === "undefined") return;
    const path = window.location.pathname.replace("/", "");
    setCurrentPage(path === "" ? "home" : path);
  }, []);

  // 🧭 Handle browser Back/Forward navigation
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onPopState = () => {
      const path = window.location.pathname.replace("/", "");
      setCurrentPage(path === "" ? "home" : path);
      // back/forward shouldn't reuse stale opts
      setNavOpts(undefined);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "risk-tool":
        return (
          <RiskToolPage
            onNavigate={handleNavigate}
            navOpts={navOpts}
            onRendered={clearNavOpts}
          />
        );
      case "compliance":
        return (
          <ComplianceChecklistPage
            onNavigate={handleNavigate}
            navOpts={navOpts}
            onRendered={clearNavOpts}
          />
        );
      case "resources":
        return <ResourcesPage onNavigate={handleNavigate} />;
      case "about":
        return <AboutPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      {renderPage()}
    </div>
  );
}
