import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { CheckSquare, AlertTriangle } from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-12 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl text-gray-900 mb-4">
              Simplifying Cyber security for SMEs
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              Streamline your cyber security compliance and risk management with our comprehensive suite of tools designed specifically for small and medium enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3"
                onClick={() => onNavigate("risk-tool")}
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-gray-700 border-gray-300 hover:bg-gray-50 px-8 py-3"
                onClick={() => onNavigate("about")}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Compliance Checklist Card */}
            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-3">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <CheckSquare className="h-6 w-6 text-gray-700" />
                </div>
                <CardTitle className="text-xl text-gray-900">Compliance Checklist</CardTitle>
                <CardDescription className="text-gray-600 text-sm">
                  Ensure your business meets all cyber security compliance requirements with our comprehensive checklist and automated tracking system.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <Button
                  className="bg-gray-900 hover:bg-gray-800 text-white w-full"
                  onClick={() => onNavigate("compliance")}
                >
                  Start
                </Button>
              </CardContent>
            </Card>

            {/* Risk Tool Card */}
            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-3">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="h-6 w-6 text-gray-700" />
                </div>
                <CardTitle className="text-xl text-gray-900">Risk Tool</CardTitle>
                <CardDescription className="text-gray-600 text-sm">
                  Identify, assess, and mitigate cyber security risks across your organization with our intelligent risk assessment platform.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <Button
                  className="bg-gray-900 hover:bg-gray-800 text-white w-full"
                  onClick={() => onNavigate("risk-tool")}
                >
                  Start
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}