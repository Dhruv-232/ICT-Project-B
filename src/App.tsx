import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { RiskToolPage } from "./components/RiskToolPage";
import { ComplianceChecklistPage } from "./components/ComplianceChecklistPage";
import { AboutPage } from "./components/AboutPage";
import { ResourcesPage } from "./components/ResourcesPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "risk-tool":
        return <RiskToolPage />;
      case "compliance":
        return <ComplianceChecklistPage />;
      case "resources":
        return <ResourcesPage />;
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