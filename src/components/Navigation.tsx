import { Shield } from "lucide-react";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "risk-tool", label: "Risk Tool" },
    { id: "compliance", label: "Compliance Checklist" },
    { id: "resources", label: "Resources" },
    { id: "about", label: "About" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => onNavigate("home")}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Shield className="h-8 w-8 text-gray-900 mr-2" />
            <span className="text-xl text-gray-900">CyberWise Core</span>
          </button>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 transition-colors ${
                  currentPage === item.id
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Placeholder to maintain layout balance */}
          <div className="w-20"></div>
        </div>
      </div>
    </nav>
  );
}