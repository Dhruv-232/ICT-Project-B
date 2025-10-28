// src/components/HomePage.tsx
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { CheckSquare, AlertTriangle, Fingerprint } from "lucide-react";
import { Progress } from "./ui/progress";
import { getResumeState } from "../utils/storage";

interface HomePageProps {
  onNavigate: (page: string, opts?: Record<string, any>) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [compProgress, setCompProgress] = useState(0);
  const [riskProgress, setRiskProgress] = useState(0);
  const [hasComp, setHasComp] = useState(false);
  const [hasRisk, setHasRisk] = useState(false);

  useEffect(() => {
    const s = getResumeState();
    setCompProgress(s.compliance.progress);
    setRiskProgress(s.risk.progress);
    setHasComp(s.compliance.started);
    setHasRisk(s.risk.started);
  }, []);

  const resumeCompliance = () => {
    const s = getResumeState().compliance;
    onNavigate("compliance", {
      resume: { sectionId: s.sectionId, step: s.step },
    });
  };

  const resumeRisk = () => {
    const s = getResumeState().risk;
    onNavigate("risk-tool", {
      resume: { sectionId: s.sectionId, step: s.step },
    });
  };

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
                Resume where you left off — or start your cybersecurity journey.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Tools Section */}
      <div className="bg-gray-50 flex flex-col">
        <section className="bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

              {/* Compliance Checklist Card */}
              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow flex flex-col justify-between">
                <CardHeader className="text-center pb-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <CheckSquare className="h-6 w-6 text-gray-700" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    Compliance Checklist
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm">
                    Meet regulatory cybersecurity requirements with confidence.
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center space-y-4 mt-auto">
                  {hasComp ? (
                    <>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Progress</span>
                        <span>{compProgress}%</span>
                      </div>
                      <Progress value={compProgress} />
                      <Button
                        className="bg-gray-900 hover:bg-gray-800 text-white w-full"
                        size="lg"
                        onClick={resumeCompliance}
                      >
                        Resume • {compProgress}% Complete
                      </Button>
                    </>
                  ) : (
                    <Button
                      className="bg-gray-900 hover:bg-gray-800 text-white w-full"
                      size="lg"
                      onClick={() => onNavigate("compliance")}
                    >
                      Start Compliance Checklist
                    </Button>
                  )}
                </CardContent>
              </Card>

              {/* Risk Tool Card */}
              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow flex flex-col justify-between">
                <CardHeader className="text-center pb-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <AlertTriangle className="h-6 w-6 text-gray-700" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    Risk Assessment Tool
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm">
                    Identify and mitigate cybersecurity vulnerabilities.
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center space-y-4 mt-auto">
                  {hasRisk ? (
                    <>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Progress</span>
                        <span>{riskProgress}%</span>
                      </div>
                      <Progress value={riskProgress} />
                      <Button
                        className="bg-gray-900 hover:bg-gray-800 text-white w-full"
                        size="lg"
                        onClick={resumeRisk}
                      >
                        Resume • {riskProgress}% Complete
                      </Button>
                    </>
                  ) : (
                    <Button
                      className="bg-gray-900 hover:bg-gray-800 text-white w-full"
                      size="lg"
                      onClick={() => onNavigate("risk-tool")}
                    >
                      Start Risk Assessment
                    </Button>
                  )}
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}
