import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { CheckCircle, AlertTriangle, TrendingUp, Clock, Shield, FileText, ExternalLink, ArrowRight } from "lucide-react";

interface Recommendation {
  id: string;
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  category: string;
  timeframe: string;
  effort: "low" | "medium" | "high";
  impact: "low" | "medium" | "high";
  action?: string;
  resources?: {
    title: string;
    url: string;
    type: "guide" | "tool" | "training" | "external";
  }[];
}

interface RecommendationsSectionProps {
  title: string;
  subtitle: string;
  recommendations: Recommendation[];
  onActionClick?: (recommendation: Recommendation) => void;
}

const priorityConfig = {
  high: { 
    color: "bg-red-100 text-red-800 border-red-200", 
    icon: <AlertTriangle className="h-4 w-4" />,
    label: "High Priority"
  },
  medium: { 
    color: "bg-orange-100 text-orange-800 border-orange-200", 
    icon: <Clock className="h-4 w-4" />,
    label: "Medium Priority"
  },
  low: { 
    color: "bg-blue-100 text-blue-800 border-blue-200", 
    icon: <TrendingUp className="h-4 w-4" />,
    label: "Low Priority"
  }
};

const effortConfig = {
  low: { label: "Low effort", color: "text-green-600" },
  medium: { label: "Medium effort", color: "text-orange-600" },
  high: { label: "High effort", color: "text-red-600" }
};

const impactConfig = {
  low: { label: "Low impact", color: "text-gray-600" },
  medium: { label: "Medium impact", color: "text-blue-600" },
  high: { label: "High impact", color: "text-green-600" }
};

export function RecommendationsSection({ 
  title, 
  subtitle, 
  recommendations, 
  onActionClick 
}: RecommendationsSectionProps) {
  const highPriorityRecs = recommendations.filter(r => r.priority === "high");
  const mediumPriorityRecs = recommendations.filter(r => r.priority === "medium");
  const lowPriorityRecs = recommendations.filter(r => r.priority === "low");

  const groupedRecommendations = [
    { priority: "high", recommendations: highPriorityRecs },
    { priority: "medium", recommendations: mediumPriorityRecs },
    { priority: "low", recommendations: lowPriorityRecs }
  ].filter(group => group.recommendations.length > 0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl text-red-600 mb-1">{highPriorityRecs.length}</div>
            <div className="text-sm text-gray-600">High Priority</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl text-orange-600 mb-1">{mediumPriorityRecs.length}</div>
            <div className="text-sm text-gray-600">Medium Priority</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl text-blue-600 mb-1">{lowPriorityRecs.length}</div>
            <div className="text-sm text-gray-600">Low Priority</div>
          </CardContent>
        </Card>
      </div>

      {/* Recommendations by Priority */}
      {groupedRecommendations.map(({ priority, recommendations: recs }) => (
        <div key={priority} className="space-y-4">
          <div className="flex items-center space-x-2">
            {priorityConfig[priority as keyof typeof priorityConfig].icon}
            <h3 className="text-xl text-gray-900">
              {priorityConfig[priority as keyof typeof priorityConfig].label} Recommendations
            </h3>
          </div>

          <div className="grid gap-4">
            {recs.map((recommendation) => (
              <Card key={recommendation.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CardTitle className="text-lg">{recommendation.title}</CardTitle>
                        <Badge 
                          variant="outline" 
                          className={priorityConfig[recommendation.priority].color}
                        >
                          {recommendation.category}
                        </Badge>
                      </div>
                      <CardDescription className="text-sm">
                        {recommendation.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Implementation Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">Timeframe:</span>
                      <span className="text-gray-900">{recommendation.timeframe}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">Effort:</span>
                      <span className={effortConfig[recommendation.effort].color}>
                        {effortConfig[recommendation.effort].label}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">Impact:</span>
                      <span className={impactConfig[recommendation.impact].color}>
                        {impactConfig[recommendation.impact].label}
                      </span>
                    </div>
                  </div>

                  {/* Resources */}
                  {recommendation.resources && recommendation.resources.length > 0 && (
                    <div className="space-y-2">
                      <div className="text-sm text-gray-700">Resources:</div>
                      <div className="flex flex-wrap gap-2">
                        {recommendation.resources.map((resource, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            className="h-8 text-xs"
                            onClick={() => window.open(resource.url, '_blank')}
                          >
                            {resource.type === "external" && <ExternalLink className="h-3 w-3 mr-1" />}
                            {resource.type === "guide" && <FileText className="h-3 w-3 mr-1" />}
                            {resource.type === "tool" && <Shield className="h-3 w-3 mr-1" />}
                            {resource.title}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Button */}
                  {recommendation.action && onActionClick && (
                    <div className="flex justify-end">
                      <Button
                        onClick={() => onActionClick(recommendation)}
                        className="bg-gray-900 hover:bg-gray-800 text-white"
                        size="sm"
                      >
                        {recommendation.action}
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}

      {/* Next Steps */}
      <Card className="bg-gray-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span>Next Steps</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>Start with high-priority recommendations for immediate impact</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span>Schedule medium-priority items for the next quarter</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Plan low-priority improvements for ongoing security enhancement</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}