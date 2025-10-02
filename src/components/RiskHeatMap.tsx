import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface RiskItem {
  id: string;
  name: string;
  likelihood: number; // 1-5 scale
  impact: number; // 1-5 scale
  shortName?: string; // For display on grid
}

const sampleRisks: RiskItem[] = [
  { id: "weak-firewall", name: "Weak Firewall", likelihood: 3, impact: 4, shortName: "Weak Firewall" },
  { id: "outdated-systems", name: "Outdated Systems", likelihood: 4, impact: 4, shortName: "Outdated Systems" },
  { id: "poor-access-controls", name: "Poor Access Controls", likelihood: 3, impact: 5, shortName: "Poor Access Controls" },
  { id: "insufficient-training", name: "Insufficient Staff Training", likelihood: 4, impact: 3, shortName: "Staff Training" },
];

const likelihoodLabels = ["Rare", "Unlikely", "Possible", "Likely", "Almost Certain"];
const impactLabels = ["Low", "Minor", "Moderate", "Major", "Severe"];

export function RiskHeatMap() {
  // Color gradient from green (low) to red (high)
  const getCellColor = (row: number, col: number) => {
    const riskScore = (col + 1) + (5 - row);
    if (riskScore <= 4) return "bg-green-300";
    if (riskScore <= 6) return "bg-yellow-300";
    if (riskScore <= 8) return "bg-orange-300";
    return "bg-red-300";
  };

  const getCellBorderColor = (row: number, col: number) => {
    const riskScore = (col + 1) + (5 - row);
    if (riskScore <= 4) return "border-green-400";
    if (riskScore <= 6) return "border-yellow-400";
    if (riskScore <= 8) return "border-orange-400";
    return "border-red-400";
  };

  const getRisksForCell = (likelihood: number, impact: number) => {
    return sampleRisks.filter(risk => risk.likelihood === likelihood && risk.impact === impact);
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Cybersecurity Risk Heat Map</CardTitle>
        <CardDescription className="text-center">
          Visual representation of cybersecurity risks by likelihood and impact
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <div className="min-w-[600px] mx-auto">
            {/* Heat Map Grid */}
            <div className="relative bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              {/* Y-axis label */}
              <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 -rotate-90">
                <span className="text-sm text-gray-700">Impact (Low → Severe)</span>
              </div>
              
              {/* Y-axis labels */}
              <div className="absolute left-1 top-0 h-full flex flex-col justify-between py-6">
                {impactLabels.slice().reverse().map((label, index) => (
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
                      const likelihood = colIndex + 1;
                      const impact = 5 - rowIndex;
                      const risksInCell = getRisksForCell(likelihood, impact);
                      
                      return (
                        <div
                          key={`${rowIndex}-${colIndex}`}
                          className={`
                            h-20 w-full border-r border-b border-gray-300 last:border-r-0
                            ${getCellColor(rowIndex, colIndex)}
                            flex items-center justify-center text-center p-1
                          `}
                        >
                          {risksInCell.length > 0 && (
                            <div className="text-xs text-gray-800 leading-tight">
                              {risksInCell.map((risk, idx) => (
                                <div key={idx} className="mb-0.5 last:mb-0">
                                  {risk.shortName}
                                </div>
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

            {/* Simple Legend */}
            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm text-gray-900 mb-3 text-center">Risk Level</h4>
              <div className="flex justify-center items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-300 rounded shadow-sm border border-green-400"></div>
                  <span className="text-sm text-gray-700">Low</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-yellow-300 rounded shadow-sm border border-yellow-400"></div>
                  <span className="text-sm text-gray-700">Medium</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-orange-300 rounded shadow-sm border border-orange-400"></div>
                  <span className="text-sm text-gray-700">High</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-300 rounded shadow-sm border border-red-400"></div>
                  <span className="text-sm text-gray-700">Critical</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}