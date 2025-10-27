import { useState, useEffect } from "react";
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
import { AlertTriangle, Check, CircleAlert } from "lucide-react";
// RiskToolPage.tsx
import RiskHeatMap from "./RiskHeatMap";
import { RecommendationsSection } from "./RecommendationsSection";
import {
  riskCategories,
  riskScore60,
  riskScore40,
  riskScore0,
} from "../data/RiskTool.data";
import { storage } from "../utils/storage";
import ProgressTracker from "./ProgressTracker"; // <-- existing
import {
  setToolProgress,
  setLastVisited,
} from "../utils/storage"; // <-- NEW resume helpers

/* ========= Local storage keys ========= */
const RISK_ANSWERS_KEY = "risk.answers.v1";
const RISK_STEP_KEY = "risk.step.v1";
const RISK_RESULTS_KEY = "risk.results.v1";
/* ===================================== */

// Risk-based recommendations data
const getRiskRecommendations = (riskScore: number) => {
  if (riskScore > 60) return riskScore60;
  if (riskScore > 40) return riskScore40;
  return riskScore0;
};

type ResumeOpts = { sectionId: string | null; step: number } | undefined;

type Props = {
  onNavigate?: (page: string, opts?: Record<string, any>) => void;
  navOpts?: { resume?: ResumeOpts } | Record<string, any>;
  onRendered?: () => void; // used by App to clear one-time opts
};

export function RiskToolPage({ navOpts, onRendered }: Props) {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  /* -------- Load saved state once -------- */
  useEffect(() => {
    const savedAnswers = storage.get<Record<string, string>>(RISK_ANSWERS_KEY);
    const savedStep = storage.get<number>(RISK_STEP_KEY);
    const savedResults = storage.get<boolean>(RISK_RESULTS_KEY);

    if (savedAnswers) setAnswers(savedAnswers);
    if (typeof savedStep === "number") {
      const clamped = Math.min(
        Math.max(0, savedStep),
        Math.max(0, riskCategories.length - 1)
      );
      setCurrentCategory(clamped);
    }
    if (typeof savedResults === "boolean") setShowResults(savedResults);

    setHydrated(true);
  }, []);

  // If we arrived here via Home "Resume", jump to the requested section/step
  useEffect(() => {
    if (!hydrated) return;
    const resume = (navOpts as any)?.resume as ResumeOpts;
    if (resume) {
      // Find category by sectionId if provided; otherwise fall back to step as index
      let nextIndex = currentCategory;
      if (resume.sectionId) {
        const found = riskCategories.findIndex((c) => c.id === resume.sectionId);
        if (found >= 0) nextIndex = found;
      } else if (typeof resume.step === "number") {
        nextIndex = Math.max(0, Math.min(riskCategories.length - 1, resume.step));
      }
      setCurrentCategory(nextIndex);
    }
    onRendered?.(); // tell App we consumed the nav options
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated, navOpts, onRendered]);

  /* -------- Persist changes -------- */
  useEffect(() => {
    if (!hydrated) return;
    storage.set(RISK_ANSWERS_KEY, answers);
  }, [answers, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    storage.set(RISK_STEP_KEY, currentCategory);
  }, [currentCategory, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    storage.set(RISK_RESULTS_KEY, showResults);
  }, [showResults, hydrated]);

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  // 📊 Calculate risk score
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

  // 🧾 Risk level categories
  const getRiskLevel = (score: number) => {
    if (score <= 20)
      return { level: "Low", color: "bg-green-500", textColor: "text-green-700" };
    if (score <= 40)
      return { level: "Medium", color: "bg-yellow-500", textColor: "text-yellow-700" };
    if (score <= 60)
      return { level: "High", color: "bg-orange-500", textColor: "text-orange-700" };
    return { level: "Critical", color: "bg-red-500", textColor: "text-red-700" };
  };

  // Zobair
  // Enhanced PDF Export - includes results, recommendations, and summary
  const downloadPdf = () => {
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const pageWidth = doc.internal.pageSize.getWidth();
    let y = 60;

    const riskScore = calculateRiskScore();
    const riskLevel = getRiskLevel(riskScore);
    const recommendations = getRiskRecommendations(riskScore);

    // Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(40, 40, 40);
    doc.text("Cybersecurity Risk Assessment Results", pageWidth / 2, y, { align: "center" });
    y += 40;

    // === Risk Summary Card ===
    doc.setFillColor(250, 250, 250);
    doc.roundedRect(60, y, pageWidth - 120, 120, 10, 10, "F");

    let badge = [67, 160, 71];
    if (riskLevel.level === "Medium") badge = [255, 193, 7];
    if (riskLevel.level === "High") badge = [255, 152, 0];
    if (riskLevel.level === "Critical") badge = [211, 47, 47];

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(50, 50, 50);
    doc.text("Overall Risk Score", pageWidth / 2, y + 30, { align: "center" });

    doc.setFontSize(42);
    doc.text(`${riskScore}%`, pageWidth / 2, y + 75, { align: "center" });

    // Badge
    doc.setFillColor(badge[0], badge[1], badge[2]);
    doc.roundedRect(pageWidth / 2 - 45, y + 85, 90, 28, 5, 5, "F");
    doc.setFontSize(11);
    doc.setTextColor(255, 255, 255);
    doc.text(riskLevel.level.toUpperCase(), pageWidth / 2, y + 104, { align: "center" });

    // Bar
    doc.setFillColor(230, 230, 230);
    doc.rect(120, y + 118, pageWidth - 240, 8, "F");
    doc.setFillColor(badge[0], badge[1], badge[2]);
    doc.rect(120, y + 118, ((pageWidth - 240) * riskScore) / 100, 8, "F");
    y += 160;

    // === Priority Summary ===
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text("Personalized Security Recommendations", 60, y);
    y += 25;

    const priorities = [
      { label: "High Priority", count: 4, color: [211, 47, 47] },
      { label: "Medium Priority", count: 0, color: [255, 193, 7] },
      { label: "Low Priority", count: 0, color: [67, 160, 71] },
    ];

    let x = 100;
    priorities.forEach((p) => {
      doc.setFillColor(250, 250, 250);
      doc.roundedRect(x - 25, y, 150, 70, 10, 10, "F");
      doc.setFont("helvetica", "bold");
      doc.setTextColor(p.color[0], p.color[1], p.color[2]);
      doc.setFontSize(26);
      doc.text(`${p.count}`, x + 50, y + 40, { align: "center" });
      doc.setFontSize(11);
      doc.setTextColor(80, 80, 80);
      doc.text(p.label, x + 50, y + 55, { align: "center" });
      x += 180;
    });
    y += 110;

    // === Recommendations ===
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(40, 40, 40);
    doc.text("High Priority Recommendations", 60, y);
    y += 25;

    recommendations.forEach((rec, i) => {
      if (y > 720) { doc.addPage(); y = 60; }
      doc.setFillColor(255, 255, 255);
      doc.setDrawColor(240, 240, 240);
      doc.roundedRect(60, y, pageWidth - 120, 90, 10, 10, "FD");

      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      doc.text(`${i + 1}. ${rec.title}`, 75, y + 25);

      doc.text("Thank you for using the assessment tool.", 20, 70);
      doc.text("To improve your posture, please refer to our recommendations.", 20, 80);

      y += 110;
    });

    // === Next Steps ===
    doc.setFillColor(250, 250, 250);
    doc.roundedRect(60, y, pageWidth - 120, 80, 10, 10, "F");
    y += 25;
    doc.setFont("helvetica", "bold");
    doc.setTextColor(40, 40, 40);
    doc.text("Next Steps", 75, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(80, 80, 80);
    y += 20;
    doc.text("• Start with high-priority recommendations for immediate impact", 90, y);
    y += 18;
    doc.text("• Schedule medium-priority items for the next quarter", 90, y);
    y += 18;
    doc.text("• Plan low-priority improvements for ongoing security enhancement", 90, y);
    y += 40;

    // === Footer ===
    doc.setFont("helvetica", "italic");
    doc.setFontSize(10);
    doc.setTextColor(120, 120, 120);
    doc.text("Generated using the CyberWise Core Risk Assessment Tool", 60, y);

    doc.save("Cybersecurity-Risk-Assessment.pdf");
  };

  // Overall progress
  const answeredCount = Object.keys(answers).length;
  const totalQuestions = riskCategories.reduce(
    (sum, category) => sum + category.questions.length,
    0
  );
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  // Continuously mirror progress into the shared Resume storage
  useEffect(() => {
    if (!hydrated) return;
    const sectionId = riskCategories[currentCategory]?.id ?? null;
    setToolProgress("risk", {
      sectionId,
      // We use the category index as a simple step indicator for resume
      step: currentCategory,
      progress: progressPercent,
    });
    setLastVisited("risk");
  }, [hydrated, currentCategory, progressPercent]);

  /* -------- Hydration guard -------- */
  if (!hydrated) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-sm text-gray-600">
        Loading assessment…
      </div>
    );
  }

  // ✅ Results Page
  if (showResults) {
    const riskScore = calculateRiskScore();
    const riskLevel = getRiskLevel(riskScore);

    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl text-gray-900 mb-4">Risk Assessment Results</h1>
          <p className="text-gray-600">Your Cybersecurity risk analysis is complete</p>
        </div>

        <Card className="mb-8">
          <CardHeader className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <AlertTriangle className={`h-10 w-10 ${riskLevel.textColor}`} />
            </div>
            <CardTitle className="text-2xl">Overall Risk Score</CardTitle>
            <div className="mt-4">
              <div className="text-4xl mb-2">{riskScore}%</div>
              <Badge className={`${riskLevel.color} text-white`}>{riskLevel.level} Risk</Badge>
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

        {/* Recommendations */}
        <div className="mb-8">
          <RecommendationsSection
            title="Personalized Security Recommendations"
            subtitle="Based on your risk assessment, here are specific actions to improve your Cybersecurity posture"
            recommendations={getRiskRecommendations(riskScore)}
            onActionClick={(recommendation) => {
              console.log("Action clicked for:", recommendation.title);
            }}
          />
        </div>

        {/* Heat Map */}
        <RiskHeatMap />

        <div className="text-center">
          <Button
            onClick={() => {
              storage.remove(RISK_ANSWERS_KEY);
              storage.remove(RISK_STEP_KEY);
              storage.remove(RISK_RESULTS_KEY);
              setShowResults(false);
              setAnswers({});
              setCurrentCategory(0);
            }}
            variant="outline"
            className="mr-4"
          >
            Start New Assessment
          </Button>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white" onClick={downloadPdf}>
            Download Report
          </Button>
        </div>
      </div>
    );
  }

  // ✅ Assessment Page
  return (
    <>
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
                Evaluate your organization's Cybersecurity posture across key risk areas.
                Complete all sections to receive a comprehensive risk score and recommendations.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <h2 className="text-lg text-gray-900 mb-4">Assessment Categories</h2>
            <div className="space-y-2">
              {riskCategories.map((category, index) => {
                const isCompleted = category.questions.every((q) => answers[q.id]);
                const isCurrent = index === currentCategory;

                return (
                  <button
                    key={category.id}
                    onClick={() => setCurrentCategory(index)}
                    className={`w-full text-left p-3 rounded-lg border transition-colors ${
                      isCurrent ? "border-gray-900 bg-gray-50" : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded ${isCompleted ? "bg-green-100" : "bg-gray-100"}`}>
                        {category.icon}
                      </div>
                      <div>
                        <div className="text-sm text-gray-900">{category.name}</div>
                        {isCompleted && <div className="text-xs text-green-600">Completed</div>}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Form */}
          <div className="lg:col-span-3">
            {/* Global sticky progress tracker */}
            <div className="mb-4">
              <ProgressTracker
                title="Overall Assessment Progress"
                percent={progressPercent}
                leftLabel={`${answeredCount} of ${totalQuestions} answered`}
                rightLabel={`${totalQuestions - answeredCount} remaining`}
                sticky
              />
            </div>

            <Card>
              <CardHeader>
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-gray-100 rounded">
                      {riskCategories[currentCategory].icon}
                    </div>
                    <div>
                      <CardTitle>{riskCategories[currentCategory].name}</CardTitle>
                      <CardDescription>{riskCategories[currentCategory].description}</CardDescription>
                    </div>
                  </div>
                  <div>Estimated Time: {riskCategories[currentCategory].estimatedTime}</div>
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
                      <h3 className="text-lg text-gray-900">{question.question}</h3>
                      <Badge variant="outline" className="text-xs">
                        Required
                      </Badge>
                    </div>

                    <div className="grid gap-3">
                      {question.options.map((option) => {
                        const isSelected = answers[question.id] === option.value;
                        return (
                          <button
                            key={option.value}
                            onClick={() => handleAnswerChange(question.id, option.value)}
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
                                <div className={`text-base mb-1 ${isSelected ? "text-gray-900" : "text-gray-700"}`}>
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
                              <span className="text-xs text-gray-500">Risk Level: {option.risk}/5</span>
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
            <div className="flex items-center justify-between mt-8">
              <Button
                variant="outline"
                onClick={() => setCurrentCategory(Math.max(0, currentCategory - 1))}
                disabled={currentCategory === 0}
              >
                Previous
              </Button>

              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  onClick={() => {
                    storage.remove(RISK_ANSWERS_KEY);
                    storage.remove(RISK_STEP_KEY);
                    storage.remove(RISK_RESULTS_KEY);
                    setAnswers({});
                    setCurrentCategory(0);
                    setShowResults(false);
                  }}
                >
                  Reset Saved Progress
                </Button>

                {currentCategory === riskCategories.length - 1 ? (
                  <Button
                    onClick={() => setShowResults(true)}
                    className="bg-gray-900 hover:bg-gray-800 text-white"
                  >
                    Complete Assessment
                  </Button>
                ) : (
                  <Button
                    onClick={() =>
                      setCurrentCategory(Math.min(riskCategories.length - 1, currentCategory + 1))
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
      </div>
    </>
  );
}

export default RiskToolPage;
