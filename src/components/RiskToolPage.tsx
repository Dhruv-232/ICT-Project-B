import { useState } from "react";
import jsPDF from "jspdf";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { AlertTriangle, Check, BookOpen, CircleAlert } from "lucide-react";
import { RiskHeatMap } from "./RiskHeatMap";
import { RecommendationsSection } from "./RecommendationsSection";
import {
  riskCategories,
  riskScore60,
  riskScore40,
  riskScore0,
} from "../data/RiskTool.data";

// Risk-based recommendations data
const getRiskRecommendations = (riskScore: number) => {
  if (riskScore > 60) {
    return riskScore60;
  } else if (riskScore > 40) {
    return riskScore40;
  } else {
    return riskScore0;
  }
};

export function RiskToolPage() {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  // Calculate risk score across all answers
  const calculateRiskScore = () => {
    let totalRisk = 0;
    let totalQuestions = 0;

    riskCategories.forEach((category) => {
      category.questions.forEach((question) => {
        const answer = answers[question.id];
        if (answer) {
          const option = question.options.find((opt) => opt.value === answer);
          if (option) {
            totalRisk += option.risk;
            totalQuestions++;
          }
        }
      });
    });

    return totalQuestions > 0
      ? Math.round((totalRisk / (totalQuestions * 5)) * 100)
      : 0;
  };

  // Determine risk level based on score
  const getRiskLevel = (score: number) => {
    if (score <= 20)
      return {
        level: "Low",
        color: "bg-green-500",
        textColor: "text-green-700",
      };
    if (score <= 40)
      return {
        level: "Medium",
        color: "bg-yellow-500",
        textColor: "text-yellow-700",
      };
    if (score <= 60)
      return {
        level: "High",
        color: "bg-orange-500",
        textColor: "text-orange-700",
      };
    return {
      level: "Critical",
      color: "bg-red-500",
      textColor: "text-red-700",
    };
  };

  // Download PDF report
  const downloadPdf = () => {
    const doc = new jsPDF();

    const riskScore = calculateRiskScore();
    const riskLevel = getRiskLevel(riskScore);

    doc.setFontSize(18);
    doc.text("Cybersecurity Risk Assessment Report", 20, 20);

    doc.setFontSize(12);
    doc.text(`Overall Risk Score: ${riskScore}%`, 20, 40);
    doc.text(`Risk Level: ${riskLevel.level}`, 20, 50);

    doc.text("Thank you for using the assessment tool.", 20, 70);
    doc.text(
      "To improve your posture, please refer to our recommendations.",
      20,
      80
    );

    doc.save("Cybersecurity-risk-report.pdf");
  };

  const allQuestionsAnswered = riskCategories.every((category) =>
    category.questions.every((question) => answers[question.id])
  );

  if (showResults) {
    const riskScore = calculateRiskScore();
    const riskLevel = getRiskLevel(riskScore);

    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl text-gray-900 mb-4">
            Risk Assessment Results
          </h1>
          <p className="text-gray-600">
            Your Cybersecurity risk analysis is complete
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <AlertTriangle className={`h-10 w-10 ${riskLevel.textColor}`} />
            </div>
            <CardTitle className="text-2xl">Overall Risk Score</CardTitle>
            <div className="mt-4">
              <div className="text-4xl mb-2">{riskScore}%</div>
              <Badge className={`${riskLevel.color} text-white`}>
                {riskLevel.level} Risk
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={riskScore} className="mb-4" />
            <p className="text-center text-gray-600">
              Based on your responses, your organization has a{" "}
              {riskLevel.level.toLowerCase()} Cybersecurity risk profile.
            </p>
          </CardContent>
        </Card>

        {/* Detailed Recommendations */}
        <div className="mb-8">
          <RecommendationsSection
            title="Personalized Security Recommendations"
            subtitle="Based on your risk assessment, here are specific actions to improve your Cybersecurity posture"
            recommendations={getRiskRecommendations(riskScore)}
            onActionClick={(recommendation) => {
              // Handle action clicks - could navigate to specific pages or open modals
              console.log("Action clicked for:", recommendation.title);
            }}
          />
        </div>

        {/* Risk Heat Map */}
        <RiskHeatMap />

        <div className="text-center">
          <Button
            onClick={() => {
              setShowResults(false);
              setAnswers({});
              setCurrentCategory(0);
            }}
            variant="outline"
            className="mr-4"
          >
            Start New Assessment
          </Button>
          <Button
            className="bg-gray-900 hover:bg-gray-800 text-white"
            onClick={downloadPdf}
          >
            Download Report
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gray-50">
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-8">
                <CircleAlert className="h-10 w-10 text-gray-700" />
              </div>
              <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">
                Cybersecurity Risk Assessment
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Evaluate your organization's Cybersecurity posture across key
                risk areas. Complete all sections to receive a comprehensive
                risk score and recommendations.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Sidebar */}
          <div className="lg:col-span-1">
            <h2 className="text-lg text-gray-900 mb-4">
              Assessment Categories
            </h2>
            <div className="space-y-2">
              {riskCategories.map((category, index) => {
                const isCompleted = category.questions.every(
                  (q) => answers[q.id]
                );
                const isCurrent = index === currentCategory;

                return (
                  <button
                    key={category.id}
                    onClick={() => setCurrentCategory(index)}
                    className={`w-full text-left p-3 rounded-lg border transition-colors ${
                      isCurrent
                        ? "border-gray-900 bg-gray-50"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-2 rounded ${
                          isCompleted ? "bg-green-100" : "bg-gray-100"
                        }`}
                      >
                        {category.icon}
                      </div>
                      <div>
                        <div className="text-sm text-gray-900">
                          {category.name}
                        </div>
                        {isCompleted && (
                          <div className="text-xs text-green-600">
                            Completed
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Assessment Content */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-gray-100 rounded">
                      {riskCategories[currentCategory].icon}
                    </div>
                    <div>
                      <CardTitle>
                        {riskCategories[currentCategory].name}
                      </CardTitle>
                      <CardDescription>
                        {riskCategories[currentCategory].description}
                      </CardDescription>
                    </div>
                  </div>
                  <div>
                    Estimated Time:{" "}
                    {riskCategories[currentCategory].estimatedTime}
                  </div>
                </div>
                <Progress
                  value={((currentCategory + 1) / riskCategories.length) * 100}
                  className="mt-4"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Section {currentCategory + 1} of {riskCategories.length}
                </p>
              </CardHeader>
              <CardContent className="space-y-8">
                {riskCategories[currentCategory].questions.map((question) => (
                  <div key={question.id} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg text-gray-900">
                        {question.question}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        Required
                      </Badge>
                    </div>
                    <div className="grid gap-3">
                      {question.options.map((option) => {
                        const isSelected =
                          answers[question.id] === option.value;
                        return (
                          <button
                            key={option.value}
                            onClick={() =>
                              handleAnswerChange(question.id, option.value)
                            }
                            className={`
                            relative p-4 rounded-lg border-2 text-left transition-all duration-200 hover:shadow-md
                            ${
                              isSelected
                                ? "border-gray-900 bg-gray-50 shadow-sm"
                                : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                            }
                          `}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div
                                  className={`text-base mb-1 ${
                                    isSelected
                                      ? "text-gray-900"
                                      : "text-gray-700"
                                  }`}
                                >
                                  {option.label}
                                </div>
                                {option.risk <= 2 && (
                                  <div className="text-sm text-gray-500">
                                    Low security risk - recommended approach
                                  </div>
                                )}
                                {option.risk === 3 && (
                                  <div className="text-sm text-gray-500">
                                    Moderate risk - consider improvements
                                  </div>
                                )}
                                {option.risk >= 4 && (
                                  <div className="text-sm text-amber-600">
                                    Higher risk - improvement recommended
                                  </div>
                                )}
                              </div>
                              {isSelected && (
                                <div className="ml-3 flex-shrink-0">
                                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
                                    <Check className="w-4 h-4 text-white" />
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Risk indicator */}
                            <div className="mt-2 flex items-center space-x-2">
                              <div className="flex space-x-1">
                                {Array.from({ length: 5 }, (_, i) => (
                                  <div
                                    key={i}
                                    className={`w-2 h-2 rounded-full ${
                                      i < option.risk
                                        ? option.risk <= 2
                                          ? "bg-green-400"
                                          : option.risk === 3
                                          ? "bg-yellow-400"
                                          : "bg-red-400"
                                        : "bg-gray-200"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-gray-500">
                                Risk Level: {option.risk}/5
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={() =>
                  setCurrentCategory(Math.max(0, currentCategory - 1))
                }
                disabled={currentCategory === 0}
              >
                Previous
              </Button>

              {currentCategory === riskCategories.length - 1 ? (
                <Button
                  onClick={() => setShowResults(true)}
                  disabled={!allQuestionsAnswered}
                  className="bg-gray-900 hover:bg-gray-800 text-white"
                >
                  Complete Assessment
                </Button>
              ) : (
                <Button
                  onClick={() =>
                    setCurrentCategory(
                      Math.min(riskCategories.length - 1, currentCategory + 1)
                    )
                  }
                  className="bg-gray-900 hover:bg-gray-800 text-white"
                >
                  Next
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
