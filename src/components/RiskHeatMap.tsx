// src/components/RiskHeatMap.tsx
import React, { useEffect, useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

// ────────────────────────────────────────────────────────────────────────────────
// Types
// ────────────────────────────────────────────────────────────────────────────────
export type Category =
  | "Data Protection"
  | "Access Control"
  | "Incident Response"
  | "Staff Training";

export interface CategoryPlacement {
  /**
   * Likelihood (x-axis): 1 (Rare) → 5 (Almost Certain)
   * Impact (y-axis):     1 (Low)  → 5 (Severe)
   */
  likelihood: number;
  impact: number;
  categories: Category[];
}

type AnswersByCategory = Partial<
  Record<
    Category,
    {
      likelihood: number;
      impact: number;
    }
  >
>;

// ────────────────────────────────────────────────────────────────────────────────
// Default placements (fallback if nothing is saved/received)
// ────────────────────────────────────────────────────────────────────────────────
const defaultAssignments: CategoryPlacement[] = [
  { likelihood: 3, impact: 4, categories: ["Access Control"] },
  { likelihood: 4, impact: 4, categories: ["Data Protection"] },
  { likelihood: 3, impact: 5, categories: ["Access Control", "Incident Response"] },
  { likelihood: 4, impact: 3, categories: ["Staff Training"] },
  { likelihood: 2, impact: 4, categories: ["Data Protection", "Staff Training"] },
  {
    likelihood: 5,
    impact: 5,
    categories: ["Incident Response", "Access Control", "Data Protection"],
  },
];

const likelihoodLabels = ["Rare", "Unlikely", "Possible", "Likely", "Almost Certain"] as const;
const impactLabels = ["Low", "Minor", "Moderate", "Major", "Severe"] as const;

// ────────────────────────────────────────────────────────────────────────────────
// Helpers
// ────────────────────────────────────────────────────────────────────────────────
function isValidPlacement(p: any): p is CategoryPlacement {
  return (
    p &&
    typeof p.likelihood === "number" &&
    typeof p.impact === "number" &&
    Array.isArray(p.categories) &&
    p.categories.every((c: any) =>
      ["Data Protection", "Access Control", "Incident Response", "Staff Training"].includes(c)
    ) &&
    p.likelihood >= 1 &&
    p.likelihood <= 5 &&
    p.impact >= 1 &&
    p.impact <= 5
  );
}

function sanitizePlacements(input: any): CategoryPlacement[] | null {
  if (!Array.isArray(input)) return null;
  const valid = input.filter(isValidPlacement);
  return valid.length ? valid : null;
}

function mapAnswersToPlacements(
  answers: AnswersByCategory | null | undefined
): CategoryPlacement[] | null {
  if (!answers || typeof answers !== "object") return null;
  const placements: CategoryPlacement[] = [];
  (Object.keys(answers) as Category[]).forEach((cat) => {
    const entry = answers[cat];
    if (!entry) return;
    const { likelihood, impact } = entry;
    if (
      typeof likelihood === "number" &&
      typeof impact === "number" &&
      likelihood >= 1 &&
      likelihood <= 5 &&
      impact >= 1 &&
      impact <= 5
    ) {
      placements.push({ likelihood, impact, categories: [cat] });
    }
  });
  return placements.length ? placements : null;
}

function loadFromLocalStorage(): CategoryPlacement[] | null {
  try {
    const direct = localStorage.getItem("riskHeatmapPlacements");
    if (direct) {
      const parsed = JSON.parse(direct);
      const sanitized = sanitizePlacements(parsed);
      if (sanitized) return sanitized;
    }
    const answersRaw = localStorage.getItem("riskAnswers");
    if (answersRaw) {
      const parsed: AnswersByCategory = JSON.parse(answersRaw);
      const mapped = mapAnswersToPlacements(parsed);
      if (mapped) return mapped;
    }
  } catch {
    // ignore parse errors
  }
  return null;
}

function mergePlacements(rows: CategoryPlacement[]): CategoryPlacement[] {
  const key = (l: number, i: number) => `${l}_${i}`;
  const map = new Map<string, CategoryPlacement>();
  rows.forEach((r) => {
    const k = key(r.likelihood, r.impact);
    if (!map.has(k)) {
      map.set(k, { likelihood: r.likelihood, impact: r.impact, categories: [...r.categories] });
    } else {
      const existing = map.get(k)!;
      const merged = Array.from(new Set([...existing.categories, ...r.categories]));
      existing.categories = merged as Category[];
    }
  });
  return Array.from(map.values());
}

// ────────────────────────────────────────────────────────────────────────────────
// Component (DEFAULT EXPORT)
// ────────────────────────────────────────────────────────────────────────────────
export default function RiskHeatMap({ riskScore }: { riskScore?: number }) {
  const [placements, setPlacements] = useState<CategoryPlacement[]>(defaultAssignments);

  // Load initial data and subscribe to external updates
  useEffect(() => {
    const fromStorage = loadFromLocalStorage();
    if (fromStorage) {
      setPlacements(mergePlacements(fromStorage));
    }

    // other code can dispatch:
    // window.dispatchEvent(new CustomEvent('risk-heatmap:update', { detail: { placements } }))
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      const incoming: any = detail?.placements;
      const sanitized = sanitizePlacements(incoming) || mapAnswersToPlacements(incoming);
      if (sanitized) setPlacements(mergePlacements(sanitized));
    };

    window.addEventListener("risk-heatmap:update" as any, handler);
    return () => window.removeEventListener("risk-heatmap:update" as any, handler);
  }, []);

  // Build lookup for rendering
  const catsByCell = useMemo(() => {
    const map = new Map<string, Category[]>();
    placements.forEach((p) => {
      const k = `${p.likelihood}_${p.impact}`;
      const prev = map.get(k) ?? [];
      map.set(k, Array.from(new Set([...prev, ...p.categories])) as Category[]);
    });
    return map;
  }, [placements]);

  // Color gradient from green (low) to red (high)
  const getCellColor = (row: number, col: number) => {
    const riskScoreLocal = riskScore ?? 0; // optional use of overall riskScore
    const baseRisk = col + 1 + (5 - row);
    const adjusted = baseRisk + Math.round(riskScoreLocal / 25);
    if (adjusted <= 4) return "bg-green-300";
    if (adjusted <= 6) return "bg-yellow-300";
    if (adjusted <= 8) return "bg-orange-300";
    return "bg-red-300";
  };

  const getCategoriesForCell = (likelihood: number, impact: number): Category[] => {
    const k = `${likelihood}_${impact}`;
    return catsByCell.get(k) ?? [];
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Cybersecurity Risk Heat Map</CardTitle>
        <CardDescription className="text-center">
          Visual representation of cybersecurity risk categories by likelihood and impact
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <div className="min-w-[600px] mx-auto">
            {/* Heat Map Grid */}
            <div className="relative bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              {/* Y-axis label */}
              <div className="absolute -left-16 top-1/2 -translate-y-1/2 -rotate-90">
                <span className="text-sm text-gray-700">Impact (Low → Severe)</span>
              </div>

              {/* Y-axis labels */}
              <div className="absolute left-1 top-0 h-full flex flex-col justify-between py-6">
                {impactLabels
                  .slice()
                  .reverse()
                  .map((label, index) => (
                    <div key={index} className="text-xs text-gray-700 flex items-center h-20">
                      {label}
                    </div>
                  ))}
              </div>

              {/* Grid */}
              <div className="ml-16">
                <div className="grid grid-cols-5 gap-0 mb-2 border border-gray-300 rounded-lg overflow-hidden">
                  {Array.from({ length: 5 }, (_, rowIndex) =>
                    Array.from({ length: 5 }, (_, colIndex) => {
                      const likelihood = colIndex + 1; // 1..5
                      const impact = 5 - rowIndex; // 5..1
                      const catsInCell = getCategoriesForCell(likelihood, impact);

                      return (
                        <div
                          key={`${rowIndex}-${colIndex}`}
                          className={`h-20 w-full border-r border-b border-gray-300 last:border-r-0 ${getCellColor(
                            rowIndex,
                            colIndex
                          )} flex items-center justify-center text-center p-1`}
                        >
                          {catsInCell.length > 0 && (
                            <div className="flex flex-wrap gap-1 justify-center">
                              {catsInCell.map((cat, idx) => (
                                <span
                                  key={idx}
                                  className="text-[10px] leading-tight px-2 py-0.5 bg-white/70 border border-white rounded-full shadow-sm"
                                >
                                  {cat}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>

                {/* X-axis labels */}
                <div className="grid grid-cols-5 gap-0 mt-2">
                  {likelihoodLabels.map((label, index) => (
                    <div key={index} className="text-xs text-gray-700 text-center px-1">
                      {label}
                    </div>
                  ))}
                </div>

                {/* X-axis label */}
                <div className="text-center mt-4">
                  <span className="text-sm text-gray-700">Likelihood (Rare → Almost Certain)</span>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm text-gray-900 mb-3 text-center">Risk Level</h4>
              <div className="flex justify-center items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-300 rounded border border-green-400" />
                  <span className="text-sm text-gray-700">Low</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-yellow-300 rounded border border-yellow-400" />
                  <span className="text-sm text-gray-700">Medium</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-orange-300 rounded border border-orange-400" />
                  <span className="text-sm text-gray-700">High</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-300 rounded border border-red-400" />
                  <span className="text-sm text-gray-700">Critical</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="text-xs text-gray-600">
                  Categories: Data Protection · Access Control · Incident Response · Staff Training
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
