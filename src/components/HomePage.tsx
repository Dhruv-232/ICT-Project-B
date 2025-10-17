import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  CheckSquare,
  AlertTriangle,
  CircleAlert,
  Fingerprint,
} from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gray-50">
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-8">
                <Fingerprint className="h-10 w-10 text-gray-700" />
              </div>
              <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">
                Simplifying Cybersecurity for SMEs
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Streamline your Cybersecurity compliance and risk management
                with our comprehensive suite of tools designed specifically for
                small and medium enterprises.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-gray-50 flex flex-col">
        {/* Tools Section */}
        <section className="bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Compliance Checklist Card */}
              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow flex flex-col justify-between">
                <div>
                  <CardHeader className="text-center pb-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <CheckSquare className="h-6 w-6 text-gray-700" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">
                      Compliance Checklist
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-sm">
                      Ensure your business meets all Cybersecurity compliance
                      requirements with our comprehensive checklist and
                      automated tracking system.
                    </CardDescription>
                  </CardHeader>
                </div>
                <CardContent className="text-center pt-0 mt-auto">
                  <Button
                    className="bg-gray-900 hover:bg-gray-800 text-white w-full"
                    size="lg"
                    onClick={() => onNavigate("compliance")}
                  >
                    Start
                  </Button>
                </CardContent>
              </Card>

              {/* Risk Tool Card */}
              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow flex flex-col justify-between">
                <div>
                  <CardHeader className="text-center pb-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <AlertTriangle className="h-6 w-6 text-gray-700" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">
                      Risk Tool
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-sm">
                      Identify, assess, and mitigate Cybersecurity risks across
                      your organization with our intelligent risk assessment
                      platform.
                    </CardDescription>
                  </CardHeader>
                </div>
                <CardContent className="text-center pt-0 mt-auto">
                  <Button
                    className="bg-gray-900 hover:bg-gray-800 text-white w-full"
                    size="lg"
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
    </>
  );
}
