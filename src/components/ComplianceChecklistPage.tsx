import { useState, useEffect, useMemo } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Progress } from "./ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { Download, ExternalLink, ClipboardCheck } from "lucide-react";
import { RecommendationsSection } from "./RecommendationsSection";
import complianceFrameworks from "../data/ComplianceChecklist.data";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { storage } from "../utils/storage"; // localStorage helper

/* ================= Progress Tracker (inline) ================= */
function ProgressTracker({
  completed,
  total,
  className = "",
}: {
  completed: number;
  total: number;
  className?: string;
}) {
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div
      className={`sticky top-0 z-40 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-900 font-medium">
            Checklist Progress
          </div>
          <Badge variant={pct === 100 ? "default" : "secondary"}>
            {pct}% Complete
          </Badge>
        </div>
        <Progress value={pct} className="mt-2" />
        <div className="mt-1 text-xs text-gray-600 flex justify-between">
          <span>
            {completed} of {total} items completed
          </span>
          <span>{Math.max(total - completed, 0)} remaining</span>
        </div>
      </div>
    </div>
  );
}
/* ============================================================ */

interface ChecklistItem {
  id: string | number;
  title: string;
  description: string;
  completed: boolean;
  required: boolean;
  sector?: string[];
  businessSize?: string[];
}

interface ComplianceFramework {
  id: string | number;
  name: string;
  icon: React.ReactNode;
  description: string;
  externalLink?: string;
  estimatedTime?: string;
  items: ChecklistItem[];
}

/* ========= Local storage keys & helpers ========= */
const PROFILE_KEY = "compliance.profile.v1";
const CHECKLIST_KEY = "compliance.checklist.v1";
const UI_KEY = "compliance.ui.v1";

// frameworkId -> array of completed itemIds (all stored as strings)
type SavedChecklist = Record<string, string[]>;

/** Normalize saved completion back into the base list (handles number vs string ids). */
function mergeCompleted(
  base: ComplianceFramework[],
  saved: SavedChecklist | null
): ComplianceFramework[] {
  if (!saved) return base;

  return base.map((fw) => {
    const fwKey = String(fw.id);
    const completedSet = new Set((saved[fwKey] ?? []).map((v) => String(v)));
    return {
      ...fw,
      items: fw.items.map((it) => {
        const itemId = String(it.id);
        return {
          ...it,
          completed: completedSet.has(itemId) ? true : !!it.completed,
        };
      }),
    };
  });
}
/* ================================================== */

// Generate tailored recommendations (unchanged)
const getComplianceRecommendations = (
  progressPercentage: number,
  businessSize: string,
  sector: string
) => {
  const recommendations: any[] = [];

  if (progressPercentage < 25) {
    recommendations.push(
      {
        id: "start-privacy",
        title: "Begin with Privacy Fundamentals",
        description:
          "Start your compliance journey by implementing basic privacy policies and data handling procedures",
        priority: "high" as const,
        category: "Privacy",
        timeframe: "2-3 weeks",
        effort: "low" as const,
        impact: "high" as const,
        action: "Start Privacy Basics",
        resources: [
          { title: "Privacy Policy Template", url: "#", type: "guide" as const },
          {
            title: "OAIC Privacy Guidelines",
            url: "https://www.oaic.gov.au/",
            type: "external" as const,
          },
        ],
      },
      {
        id: "essential-eight-start",
        title: "Implement Essential Eight Basics",
        description:
          "Focus on foundational ACSC Essential Eight security controls to establish baseline protection",
        priority: "high" as const,
        category: "Security",
        timeframe: "4-6 weeks",
        effort: "medium" as const,
        impact: "high" as const,
        action: "Start Essential Eight",
        resources: [
          {
            title: "Essential Eight Implementation Guide",
            url: "#",
            type: "guide" as const,
          },
        ],
      }
    );
  } else if (progressPercentage < 50) {
    recommendations.push(
      {
        id: "expand-controls",
        title: "Expand Security Controls",
        description:
          "Build on your foundation by implementing additional security measures and monitoring capabilities",
        priority: "medium" as const,
        category: "Security",
        timeframe: "6-8 weeks",
        effort: "medium" as const,
        impact: "medium" as const,
        action: "Expand Controls",
        resources: [
          { title: "Security Controls Checklist", url: "#", type: "guide" as const },
        ],
      },
      {
        id: "data-governance",
        title: "Strengthen Data Governance",
        description:
          "Develop comprehensive data classification and handling procedures",
        priority: "medium" as const,
        category: "Data Management",
        timeframe: "4-6 weeks",
        effort: "medium" as const,
        impact: "high" as const,
        action: "Develop Procedures",
        resources: [
          { title: "Data Governance Framework", url: "#", type: "guide" as const },
        ],
      }
    );
  } else if (progressPercentage < 75) {
    recommendations.push({
      id: "advanced-monitoring",
      title: "Advanced Monitoring and Detection",
      description:
        "Implement sophisticated monitoring tools and incident response procedures",
      priority: "medium" as const,
      category: "Monitoring",
      timeframe: "8-12 weeks",
      effort: "high" as const,
      impact: "medium" as const,
      action: "Setup Monitoring",
      resources: [
        { title: "Monitoring Solutions Guide", url: "#", type: "guide" as const },
      ],
    });
  }

  if (sector === "healthcare") {
    recommendations.push({
      id: "healthcare-specific",
      title: "Healthcare Data Protection",
      description:
        "Implement healthcare-specific privacy and security measures for patient data protection",
      priority: "high" as const,
      category: "Healthcare",
      timeframe: "3-4 weeks",
      effort: "medium" as const,
      impact: "high" as const,
      action: "Review Healthcare Requirements",
      resources: [
        { title: "Healthcare Privacy Guide", url: "#", type: "guide" as const },
      ],
    });
  }

  if (sector === "finance") {
    recommendations.push({
      id: "finance-specific",
      title: "Financial Services Compliance",
      description:
        "Ensure compliance with financial sector Cybersecurity and privacy requirements",
      priority: "high" as const,
      category: "Finance",
      timeframe: "4-6 weeks",
      effort: "high" as const,
      impact: "high" as const,
      action: "Review Finance Requirements",
      resources: [
        { title: "Financial Services Guide", url: "#", type: "guide" as const },
      ],
    });
  }

  if (businessSize === "small") {
    recommendations.push({
      id: "small-business",
      title: "Small Business Security Essentials",
      description:
        "Focus on cost-effective security measures that provide maximum protection for small businesses",
      priority: "medium" as const,
      category: "Small Business",
      timeframe: "2-4 weeks",
      effort: "low" as const,
      impact: "medium" as const,
      action: "Review Small Business Guide",
      resources: [
        {
          title: "Small Business Cybersecurity Guide",
          url: "#",
          type: "guide" as const,
        },
      ],
    });
  }

  recommendations.push({
    id: "continuous-improvement",
    title: "Continuous Compliance Monitoring",
    description:
      "Establish regular reviews and updates to maintain compliance as regulations evolve",
    priority: "low" as const,
    category: "Process",
    timeframe: "Ongoing",
    effort: "low" as const,
    impact: "medium" as const,
    action: "Setup Reviews",
    resources: [
      {
        title: "Compliance Review Schedule",
        url: "#",
        type: "guide" as const,
      },
    ],
  });

  return recommendations;
};

export function ComplianceChecklistPage() {
  const [businessSize, setBusinessSize] = useState<string>("");
  const [sector, setSector] = useState<string>("");

  // MASTER list: holds true state (including completed flags)
  const [allFrameworks, setAllFrameworks] =
    useState<ComplianceFramework[]>(complianceFrameworks);

  const [privacyActExpanded, setPrivacyActExpanded] = useState(false);
  const [cyberActExpanded, setCyberActExpanded] = useState(false);
  const [ransomwareExpanded, setRansomwareExpanded] = useState(false);
  const [ml1Expanded, setML1Expanded] = useState(false);
  const [ml2Expanded, setML2Expanded] = useState(false);
  const [ml3Expanded, setML3Expanded] = useState(false);

  const [hydrated, setHydrated] = useState(false);

  /* -------- Load from localStorage once -------- */
  useEffect(() => {
    // Profile
    const savedProfile = storage.get<{ businessSize: string; sector: string }>(
      PROFILE_KEY
    );
    if (savedProfile) {
      setBusinessSize(savedProfile.businessSize ?? "");
      setSector(savedProfile.sector ?? "");
    }

    // Checklist completion
    const savedChecklist = storage.get<SavedChecklist>(CHECKLIST_KEY);
    if (savedChecklist) {
      setAllFrameworks((prev) => mergeCompleted(prev, savedChecklist));
    }

    // UI expanded states
    const ui = storage.get<{
      privacyActExpanded: boolean;
      cyberActExpanded: boolean;
      ransomwareExpanded: boolean;
      ml1Expanded: boolean;
      ml2Expanded: boolean;
      ml3Expanded: boolean;
    }>(UI_KEY);

    if (ui) {
      setPrivacyActExpanded(!!ui.privacyActExpanded);
      setCyberActExpanded(!!ui.cyberActExpanded);
      setRansomwareExpanded(!!ui.ransomwareExpanded);
      setML1Expanded(!!ui.ml1Expanded);
      setML2Expanded(!!ui.ml2Expanded);
      setML3Expanded(!!ui.ml3Expanded);
    }

    setHydrated(true);
  }, []);

  /* -------- Save to localStorage -------- */
  // Save profile
  useEffect(() => {
    if (!hydrated) return;
    storage.set(PROFILE_KEY, { businessSize, sector });
  }, [businessSize, sector, hydrated]);

  // Save checklist completion (normalize ids to strings)
  useEffect(() => {
    if (!hydrated) return;
    const payload: SavedChecklist = {};
    allFrameworks.forEach((fw) => {
      const fwKey = String(fw.id);
      const completedIds = fw.items
        .filter((i) => i.completed)
        .map((i) => String(i.id)); // normalize to string
      if (completedIds.length) {
        payload[fwKey] = completedIds;
      }
    });
    storage.set(CHECKLIST_KEY, payload);
  }, [allFrameworks, hydrated]);

  // Save UI expanded state
  useEffect(() => {
    if (!hydrated) return;
    storage.set(UI_KEY, {
      privacyActExpanded,
      cyberActExpanded,
      ransomwareExpanded,
      ml1Expanded,
      ml2Expanded,
      ml3Expanded,
    });
  }, [
    privacyActExpanded,
    cyberActExpanded,
    ransomwareExpanded,
    ml1Expanded,
    ml2Expanded,
    ml3Expanded,
    hydrated,
  ]);

  /* -------- Derived filtered view (don’t mutate master) -------- */
  const checklist = useMemo(() => {
    return allFrameworks
      .map((framework) => ({
        ...framework,
        items: framework.items.filter(
          (item) =>
            (!item.businessSize ||
              item.businessSize.includes(businessSize) ||
              businessSize === "") &&
            (!item.sector || item.sector.includes(sector) || sector === "")
        ),
      }))
      .filter((framework) => framework.items.length > 0);
  }, [allFrameworks, businessSize, sector]);

  /* -------- Progress totals based on filtered view -------- */
  const totalItems = checklist.reduce(
    (total, framework) => total + framework.items.length,
    0
  );
  const completedItems = checklist.reduce(
    (sum, framework) => sum + framework.items.filter((i) => i.completed).length,
    0
  );
  const progressPercentage =
    totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

  /* -------- Toggle handler updates master list -------- */
  const handleItemToggle = (
    frameworkId: string | number,
    itemId: string | number
  ) => {
    setAllFrameworks((prev) =>
      prev.map((framework) =>
        framework.id === frameworkId
          ? {
              ...framework,
              items: framework.items.map((item) =>
                item.id === itemId
                  ? { ...item, completed: !item.completed }
                  : item
              ),
            }
          : framework
      )
    );
  };

  const generateReport = () => {
    try {
      const doc = new jsPDF("p", "mm", "a4");
      const now = new Date();
      const timestamp = now.toLocaleString();
      doc.setFillColor(20, 20, 20);
      doc.rect(0, 0, 210, 20, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(16);
      doc.text("Compliance Checklist Report", 14, 13);
      doc.setFontSize(10);
      doc.text(`Generated: ${timestamp}`, 14, 27);
      doc.setTextColor(0, 0, 0);

      let y = 35;
      doc.setFontSize(14);
      doc.text("Organization Profile", 14, y);
      y += 8;
      doc.setFillColor(245, 245, 245);
      doc.rect(14, y, 182, 20, "F");
      doc.setFontSize(11);
      doc.text(`Business Size: ${businessSize || "Not specified"}`, 20, y + 8);
      doc.text(`Sector: ${sector || "Not specified"}`, 20, y + 16);
      y += 30;

      doc.setFontSize(14);
      doc.text("Overall Compliance Progress", 14, y);
      y += 8;
      doc.setFillColor(245, 245, 245);
      doc.rect(14, y, 182, 22, "F");
      doc.setFontSize(11);
      doc.setTextColor(255, 0, 0);
      doc.text(`${progressPercentage}%`, 100, y + 8);
      doc.setTextColor(0, 0, 0);
      doc.text(`${completedItems}/${totalItems} items completed`, 100, y + 16);
      y += 32;

      doc.setFontSize(14);
      doc.text("Compliance Framework Analysis", 14, y);
      y += 8;

      const frameworkSummary = checklist.map((f) => {
        const relevantItems = f.items;
        const done = relevantItems.filter((i) => i.completed).length;
        const percent =
          relevantItems.length > 0
            ? Math.round((done / relevantItems.length) * 100)
            : 0;
        return [
          f.name,
          f.description || "",
          `${percent}%`,
          `(${done}/${relevantItems.length || 0})`,
        ];
      });

      autoTable(doc, {
        startY: y,
        head: [["Framework", "Description", "Progress", "Completed"]],
        body: frameworkSummary,
        theme: "grid",
        headStyles: { fillColor: [30, 30, 30], textColor: 255 },
        styles: { fontSize: 9, cellPadding: 3 },
        columnStyles: { 2: { halign: "center", textColor: [255, 0, 0] }, 3: { halign: "center" } },
        margin: { left: 14, right: 14 },
      });

      y = (doc as any).lastAutoTable.finalY + 15;
      doc.setFontSize(14);
      doc.text("Detailed Compliance Checklist", 14, y);
      y += 10;

      checklist.forEach((framework) => {
        const relevantItems = framework.items;
        if (relevantItems.length === 0) return;
        if (y > 260) {
          doc.addPage();
          y = 20;
        }
        doc.setFontSize(12);
        doc.text(framework.name, 14, y);
        y += 6;

        const rows = relevantItems.map((i) => [
          i.completed ? "☑" : "☐",
          i.title.length > 100 ? i.title.slice(0, 100) + "..." : i.title,
        ]);

        autoTable(doc, {
          startY: y,
          head: [["Status", "Checklist Item"]],
          body: rows,
          theme: "striped",
          headStyles: { fillColor: [60, 60, 60], textColor: 255 },
          styles: { fontSize: 9, cellPadding: 2 },
          margin: { left: 14, right: 14 },
        });

        y = (doc as any).lastAutoTable.finalY + 8;
      });

      doc.addPage();
      y = 20;
      doc.setFontSize(14);
      doc.text("Recommended Actions", 14, y);
      y += 8;
      doc.setFontSize(11);
      doc.text(
        "Based on your compliance progress, the following recommendations are prioritized to improve your Cybersecurity posture:",
        14,
        y,
        { maxWidth: 180 }
      );
      y += 10;

      const recs = getComplianceRecommendations(
        progressPercentage,
        businessSize,
        sector
      );
      recs.forEach((rec, index) => {
        if (y > 260) {
          doc.addPage();
          y = 20;
        }
        let color: [number, number, number] = [0, 0, 0];
        if (rec.priority === "high") color = [255, 0, 0];
        else if (rec.priority === "medium") color = [255, 140, 0];
        else if (rec.priority === "low") color = [0, 200, 0];

        doc.setFillColor(...color);
        doc.circle(17, y - 1, 2.5, "F");
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(12);
        doc.text(`${index + 1}. ${rec.title}`, 24, y);
        doc.setFontSize(10);
        doc.setTextColor(...color);
        doc.text(rec.priority.toUpperCase(), 190, y, { align: "right" });
        y += 6;
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(10);
        doc.text(rec.description, 24, y, { maxWidth: 165 });
        y += 6;
        doc.setFontSize(9);
        doc.setTextColor(80, 80, 80);
        doc.text(
          `Category: ${rec.category} | Timeframe: ${rec.timeframe} | Effort: ${rec.effort}`,
          24,
          y
        );
        y += 10;
      });

      doc.save(
        `Compliance_Report_${new Date().toISOString().split("T")[0]}.pdf`
      );
    } catch (err) {
      console.error("PDF generation failed:", err);
    }
  };

  /* -------- Hydration guard: prevents UI flash -------- */
  if (!hydrated) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-sm text-gray-600">
        Loading checklist…
      </div>
    );
  }

  return (
    <>
      {/* Sticky tracker (always visible) */}
      <ProgressTracker completed={completedItems} total={totalItems} />

      {/* Hero Section */}
      <div className="bg-gray-50">
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-8">
                <ClipboardCheck className="h-10 w-10 text-gray-700" />
              </div>
              <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">
                Compliance Checklist
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ensure your organization meets all relevant Cybersecurity
                compliance requirements. Select your business details below to
                customize your checklist.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Business Configuration */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Organization Details</CardTitle>
            <CardDescription>
              Configure your business profile to see relevant compliance
              requirements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-700">Business Size</label>
                <Select value={businessSize} onValueChange={setBusinessSize}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select business size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small (1-50 employees)</SelectItem>
                    <SelectItem value="medium">
                      Medium (51-250 employees)
                    </SelectItem>
                    <SelectItem value="large">
                      Large (250+ employees)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-700">Industry Sector</label>
                <Select value={sector} onValueChange={setSector}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry sector" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Progress Overview (kept — works with tracker above) */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Overall Progress</span>
              <div className="flex flex-col items-end space-y-2">
                <Badge
                  variant={progressPercentage === 100 ? "default" : "secondary"}
                >
                  {progressPercentage}% Complete
                </Badge>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={progressPercentage} className="mb-4" />
            <div className="flex justify-between text-sm text-gray-600">
              <span>
                {completedItems} of {totalItems} items completed
              </span>
              <span>{totalItems - completedItems} remaining</span>
            </div>
          </CardContent>
        </Card>

        {/* Compliance Frameworks */}
        <div className="grid gap-6">
          <h2 className="text-2xl text-gray-900">Compliance Frameworks</h2>

          {checklist.map((framework) => {
            const frameworkProgress = Math.round(
              (framework.items.filter((i) => i.completed).length /
                framework.items.length) *
                100
            );

            const isPrivacyAct = framework.id === "privacy-act";
            const isCyberAct = framework.id === "Cybersecurity-act";
            const isRansomware = framework.id === "ransomware-reporting";
            const isML1 = framework.id === "essential-eight-ml1";
            const isML2 = framework.id === "essential-eight-ml2";
            const isML3 = framework.id === "essential-eight-ml3";

            const expanded =
              (isPrivacyAct && privacyActExpanded) ||
              (isCyberAct && cyberActExpanded) ||
              (isRansomware && ransomwareExpanded) ||
              (isML1 && ml1Expanded) ||
              (isML2 && ml2Expanded) ||
              (isML3 && ml3Expanded);

            return (
              <Card key={String(framework.id)}>
                <CardHeader
                  className="cursor-pointer select-none"
                  onClick={() => {
                    if (isPrivacyAct) setPrivacyActExpanded(!privacyActExpanded);
                    else if (isCyberAct) setCyberActExpanded(!cyberActExpanded);
                    else if (isRansomware)
                      setRansomwareExpanded(!ransomwareExpanded);
                    else if (isML1) setML1Expanded(!ml1Expanded);
                    else if (isML2) setML2Expanded(!ml2Expanded);
                    else if (isML3) setML3Expanded(!ml3Expanded);
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gray-100 rounded">
                        {framework.icon}
                      </div>
                      <div>
                        <CardTitle className="flex items-center space-x-2">
                          <span>{framework.name}</span>
                          {framework.externalLink && (
                            <a
                              href={framework.externalLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </CardTitle>
                        <CardDescription>
                          {framework.description}
                        </CardDescription>
                      </div>
                    </div>

                    <div className="text-right space-y-1 flex flex-col items-end">
                      <div className="text-gray-600 select-none text-lg">
                        {expanded ? "▲" : "▼"}
                      </div>
                      <Badge
                        variant={
                          frameworkProgress === 100 ? "default" : "secondary"
                        }
                      >
                        {frameworkProgress}%
                      </Badge>
                      {framework.estimatedTime && (
                        <div className="text-gray-500">
                          {framework.estimatedTime}
                        </div>
                      )}
                    </div>
                  </div>
                  <Progress value={frameworkProgress} className="mt-4" />
                </CardHeader>

                {expanded && (
                  <CardContent>
                    <div className="space-y-4">
                      {framework.items.map((item) => (
                        <div
                          key={String(item.id)}
                          className="flex items-start space-x-3 p-3 rounded-lg border border-gray-200"
                        >
                          <Checkbox
                            id={String(item.id)}
                            checked={item.completed}
                            onCheckedChange={() =>
                              handleItemToggle(framework.id, item.id)
                            }
                            className="mt-1"
                          />
                          <div className="flex-1 space-y-1">
                            <label
                              htmlFor={String(item.id)}
                              className="text-sm cursor-pointer flex items-center space-x-2"
                            >
                              <span
                                className={
                                  item.completed
                                    ? "line-through text-gray-500"
                                    : "text-gray-900"
                                }
                              >
                                {item.title}
                              </span>
                              {item.required && (
                                <Badge variant="outline" className="text-xs">
                                  Required
                                </Badge>
                              )}
                            </label>
                            <p className="text-xs text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {framework.externalLink && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            window.open(framework.externalLink!, "_blank")
                          }
                          className="w-full"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Official Documentation
                        </Button>
                      </div>
                    )}
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>

        <div className="mt-8">
          <RecommendationsSection
            title="Compliance Improvement Recommendations"
            subtitle="Tailored suggestions to enhance your compliance posture and security maturity"
            recommendations={getComplianceRecommendations(
              progressPercentage,
              businessSize,
              sector
            )}
            onActionClick={(r) => console.log("Action clicked for:", r.title)}
          />
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Generate Compliance Report</CardTitle>
            <CardDescription>
              Download a comprehensive report of your compliance status for
              audit purposes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              onClick={generateReport}
              disabled={progressPercentage === 0}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white"
            >
              <Download className="h-4 w-4 mr-2" />
              Generate PDF Report
            </Button>
            {progressPercentage === 0 && (
              <p className="text-sm text-gray-500 mt-2 text-center">
                Complete at least one checklist item to generate a report
              </p>
            )}

            {/* Reset Local Data */}
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button
                variant="outline"
                onClick={() => {
                  storage.remove(PROFILE_KEY);
                  storage.remove(CHECKLIST_KEY);
                  storage.remove(UI_KEY);
                  setBusinessSize("");
                  setSector("");
                  setAllFrameworks(complianceFrameworks);
                  setPrivacyActExpanded(false);
                  setCyberActExpanded(false);
                  setRansomwareExpanded(false);
                  setML1Expanded(false);
                  setML2Expanded(false);
                  setML3Expanded(false);
                }}
              >
                Reset Local Data
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default ComplianceChecklistPage;
