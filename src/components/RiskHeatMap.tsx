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
  { likelihood: 3, impact: 5, categories: ["Incident Response"] },
  { likelihood: 4, impact: 3, categories: ["Staff Training"] },
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
// Component (DEFAULT EXPORT) - NOW WITH PROPS
// ────────────────────────────────────────────────────────────────────────────────
interface RiskHeatMapProps {
  riskScore?: number;
  riskAnswers?: AnswersByCategory;
}

export default function RiskHeatMap({ riskScore, riskAnswers }: RiskHeatMapProps) {
  const [placements, setPlacements] = useState<CategoryPlacement[]>(defaultAssignments);

  // Update placements when riskAnswers prop changes
  useEffect(() => {
    if (riskAnswers && Object.keys(riskAnswers).length > 0) {
      const mapped = mapAnswersToPlacements(riskAnswers);
      if (mapped) {
        setPlacements(mergePlacements(mapped));
        return;
      }
    }
    
    // Fallback to localStorage if no props provided
    const fromStorage = loadFromLocalStorage();
    if (fromStorage) {
      setPlacements(mergePlacements(fromStorage));
    }
  }, [riskAnswers]);

  // Load initial data and subscribe to external updates
  useEffect(() => {
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

  // Color gradient - EXACT COLORS
  const getCellColor = (row: number, col: number) => {
    const likelihood = col + 1; // 1-5
    const impact = 5 - row; // 5-1
    const riskValue = likelihood + impact; // 2-10
    
    // Exact hex colors as specified
    if (riskValue <= 3) return "#99E699"; // Low - green
    if (riskValue <= 5) return "#FFCC00"; // Medium - yellow
    if (riskValue <= 7) return "#FFB84D"; // High - orange
    if (riskValue <= 8) return "#FFB84D"; // High - orange
    return "#FF6666"; // Critical - red
  };

  const getCategoriesForCell = (likelihood: number, impact: number): Category[] => {
    const k = `${likelihood}_${impact}`;
    return catsByCell.get(k) ?? [];
  };

  return (
    <Card className="mb-8 shadow-md">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-semibold text-gray-900">
          Cyber Security Risk Heat Map
        </CardTitle>
        <CardDescription className="text-sm text-gray-600 mt-2">
          Visual representation of cyber security risk categories by likelihood and impact
        </CardDescription>
      </CardHeader>

      <CardContent className="px-6 pb-6">
        <div className="overflow-x-auto">
          <div className="min-w-[600px] mx-auto">
            {/* Heat Map Grid Container */}
            <div className="relative">
              {/* Y-axis label */}
              <div 
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full pr-4"
                style={{ writingMode: 'vertical-rl', transform: 'translateX(-100%) translateY(-50%) rotate(180deg)' }}
              >
                <span className="text-xs font-medium text-gray-600">Impact (Low → Severe)</span>
              </div>

              {/* Main grid area with Y-axis labels */}
              <div className="flex gap-3">
                {/* Y-axis labels */}
                <div 
                  className="flex flex-col justify-between py-2" 
                  aria-label="Impact levels"
                  style={{ minWidth: '60px' }}
                >
                  {impactLabels
                    .slice()
                    .reverse()
                    .map((label, index) => (
                      <div 
                        key={index} 
                        className="text-xs font-medium text-gray-600 flex items-center"
                        style={{ height: '80px' }}
                      >
                        {label}
                      </div>
                    ))}
                </div>

                {/* Grid */}
                <div className="flex-1">
                  <div 
                    className="grid grid-cols-5 gap-1 p-3 bg-slate-50 rounded-lg border border-slate-200"
                    aria-label="Risk assessment grid"
                  >
                    {Array.from({ length: 5 }, (_, rowIndex) =>
                      Array.from({ length: 5 }, (_, colIndex) => {
                        const likelihood = colIndex + 1;
                        const impact = 5 - rowIndex;
                        const catsInCell = getCategoriesForCell(likelihood, impact);
                        const bgColor = getCellColor(rowIndex, colIndex);

                        return (
                          <div
                            key={`${rowIndex}-${colIndex}`}
                            className="flex items-center justify-center p-2 rounded transition-all duration-200"
                            style={{ 
                              backgroundColor: bgColor,
                              minHeight: '80px',
                              border: '1px solid rgba(0,0,0,0.05)'
                            }}
                          >
                            {catsInCell.length > 0 && (
                              <div className="flex flex-col gap-1.5 items-center justify-center w-full">
                                {catsInCell.map((cat, idx) => (
                                  <span
                                    key={idx}
                                    className="inline-block px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-800 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-150 text-center"
                                    style={{ maxWidth: '90%' }}
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
                  <div 
                    className="grid grid-cols-5 gap-1 mt-2 px-3"
                    aria-label="Likelihood levels"
                  >
                    {likelihoodLabels.map((label, index) => (
                      <div 
                        key={index} 
                        className="text-xs font-medium text-gray-600 text-center"
                      >
                        {label}
                      </div>
                    ))}
                  </div>

                  {/* X-axis label */}
                  <div className="text-center mt-3">
                    <span className="text-xs font-medium text-gray-600">
                      Likelihood (Rare → Almost Certain)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-8 bg-gray-50 rounded-lg p-5 border border-gray-100">
              <h4 className="text-sm font-semibold text-gray-900 mb-4 text-center">
                Risk Level
              </h4>
              <ul 
                className="flex flex-wrap justify-center items-center gap-6"
                role="list"
              >
                <li className="flex items-center gap-2">
                  <div 
                    className="w-5 h-5 rounded border border-gray-300 shadow-sm"
                    style={{ backgroundColor: '#99E699' }}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-gray-700">Low</span>
                </li>
                <li className="flex items-center gap-2">
                  <div 
                    className="w-5 h-5 rounded border border-gray-300 shadow-sm"
                    style={{ backgroundColor: '#FFCC00' }}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-gray-700">Medium</span>
                </li>
                <li className="flex items-center gap-2">
                  <div 
                    className="w-5 h-5 rounded border border-gray-300 shadow-sm"
                    style={{ backgroundColor: '#FFB84D' }}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-gray-700">High</span>
                </li>
                <li className="flex items-center gap-2">
                  <div 
                    className="w-5 h-5 rounded border border-gray-300 shadow-sm"
                    style={{ backgroundColor: '#FF6666' }}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-gray-700">Critical</span>
                </li>
              </ul>
              <div className="mt-4 text-center">
                <span className="text-xs text-gray-500">
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