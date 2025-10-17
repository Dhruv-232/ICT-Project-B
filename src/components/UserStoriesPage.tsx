import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { CheckCircle, AlertTriangle, Building2, Shield, Users, TrendingUp, Clock, FileCheck } from "lucide-react";

interface UserStory {
  id: string;
  persona: string;
  role: string;
  company: string;
  companySize: string;
  industry: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: string[];
  tools: string[];
  quote: string;
  icon: React.ReactNode;
}

const userStories: UserStory[] = [
  {
    id: "sarah-retail",
    persona: "Sarah Chen",
    role: "Business Owner",
    company: "Chen's Electronics",
    companySize: "10 employees",
    industry: "Retail",
    challenge: "As the owner of a small business that doesn't know much about Cybersecurity.I want to use a simple compliance plan that is made for my industry and business size. That way, I can understand and follow the law's Cybersecurity requirements without having to be a tech expert.my electronics store processes customer payments daily but had no formal Cybersecurity measures. After hearing about data breaches affecting similar businesses, I realized I needed to protect customer information but didn't know where to start.",
    solution: "I used CyberWise Core's Risk Assessment Tool to identify her biggest vulnerabilities and followed the Compliance Checklist to implement essential security measures. The step-by-step guidance helped to prioritize actions based on my specific business needs.",
    outcome: "Within 3 months, Sarah implemented multi-factor authentication, regular backups, and staff training. Her business now meets Privacy Act requirements and has robust protection against common cyber threats.",
    metrics: ["90% reduction in security risks", "100% staff trained", "Privacy Act compliant", "3-month implementation"],
    tools: ["Risk Assessment", "Compliance Checklist", "Staff Training Resources"],
    quote: "CyberWise Core turned Cybersecurity from an overwhelming challenge into manageable steps. Now I sleep better knowing my customers' data is protected.",
    icon: <Building2 className="h-5 w-5" />
  },
  {
    id: "marcus-manufacturing",
    persona: "Marcus Williams",
    role: "IT ",
    company: "Precision Parts Co.",
    companySize: "45 employees",
    industry: "Manufacturing",
    challenge: "Marcus managed a manufacturing company with outdated systems and minimal IT security. When new Cybersecurity regulations came into effect, he needed to quickly assess compliance gaps while maintaining production schedules.",
    solution: "Using CyberWise Core's compliance frameworks, Marcus systematically evaluated their systems against ACSC Essential Eight requirements. The Risk Tool helped him prioritize upgrades that wouldn't disrupt operations.",
    outcome: "Precision Parts achieved full compliance with Cybersecurity regulations while improving operational efficiency. The systematic approach prevented costly production delays during implementation.",
    metrics: ["100% regulatory compliance", "Zero production downtime", "40% faster incident response", "Essential Eight certified"],
    tools: ["ACSC Essential Eight", "Risk Assessment", "Implementation Guides"],
    quote: "The structured approach meant we could upgrade our security without stopping production. CyberWise Core made compliance achievable for a busy manufacturing operation.",
    icon: <Shield className="h-5 w-5" />
  },
  {
    id: "dr-patel-healthcare",
    persona: "Dr. Priya Patel",
    role: "Practice Manager",
    company: "Westside Medical Clinic",
    companySize: "8 staff members",
    industry: "Healthcare",
    challenge: "Dr. Patel's medical practice handles sensitive patient data daily. With increasing cyber threats targeting healthcare and strict privacy requirements, she needed to ensure patient information was properly protected without impacting patient care.",
    solution: "Dr. Patel used CyberWise Core to conduct a comprehensive risk assessment of their patient data systems. The Privacy Act compliance checklist helped implement necessary safeguards while the training resources educated all staff on Cybersecurity best practices.",
    outcome: "The clinic now maintains excellent Cybersecurity hygiene while providing seamless patient care. All staff understand their role in protecting patient privacy, and systems are regularly monitored and updated.",
    metrics: ["100% Privacy Act compliance", "8/8 staff certified", "50% reduction in security incidents", "Patient trust maintained"],
    tools: ["Privacy Act Compliance", "Risk Assessment", "Staff Training"],
    quote: "Our patients trust us with their most sensitive information. CyberWise Core helps us honor that trust with proper Cybersecurity measures.",
    icon: <Users className="h-5 w-5" />
  },
  {
    id: "james-consulting",
    persona: "James Thompson",
    role: "IT Consultant",
    company: "Independent Consultant",
    companySize: "Serves 20+ SME clients",
    industry: "Professional Services",
    challenge: "James helps small businesses with their technology needs but struggled to provide consistent Cybersecurity guidance. Each client had different requirements and he needed a reliable framework to assess and improve their security posture.",
    solution: "James adopted CyberWise Core as his standard Cybersecurity assessment tool. He uses the Risk Assessment for client evaluations and the compliance checklists to create tailored security roadmaps for each business.",
    outcome: "James now provides consistent, high-quality Cybersecurity services to all his clients. The standardized approach has improved client outcomes and allowed him to expand his security consulting services.",
    metrics: ["20+ clients served", "95% client satisfaction", "3x faster assessments", "New revenue stream created"],
    tools: ["All Assessment Tools", "Compliance Frameworks", "Client Reports"],
    quote: "CyberWise Core transformed how I deliver Cybersecurity services. My clients get professional-grade assessments and I can serve more businesses effectively.",
    icon: <TrendingUp className="h-5 w-5" />
  }
];

interface Props {
  onNavigate?: (page: string) => void;
}

export function UserStoriesPage({ onNavigate }: Props) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl text-gray-900 mb-6">Real Stories, Real Results</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how SME businesses across Australia are using CyberWise Core to strengthen their Cybersecurity posture and achieve compliance with confidence.
        </p>
      </div>

      {/* Success Metrics Overview */}
      <div className="grid md:grid-cols-4 gap-6 mb-16">
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="text-2xl text-gray-900 mb-2">500+</div>
            <p className="text-sm text-gray-600">Businesses Protected</p>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <div className="text-2xl text-gray-900 mb-2">95%</div>
            <p className="text-sm text-gray-600">Risk Reduction Average</p>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <div className="text-2xl text-gray-900 mb-2">3 Months</div>
            <p className="text-sm text-gray-600">Average Implementation</p>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileCheck className="h-6 w-6 text-orange-600" />
            </div>
            <div className="text-2xl text-gray-900 mb-2">100%</div>
            <p className="text-sm text-gray-600">Compliance Success Rate</p>
          </CardContent>
        </Card>
      </div>

      {/* User Stories */}
      <div className="space-y-12">
        {userStories.map((story, index) => (
          <Card key={story.id} className="overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* User Profile */}
              <div className="lg:col-span-1 bg-gray-50 p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    {story.icon}
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-1">{story.persona}</h3>
                    <p className="text-sm text-gray-600 mb-2">{story.role}</p>
                    <p className="text-sm text-gray-800">{story.company}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Company Size:</span>
                    <span className="text-xs text-gray-800">{story.companySize}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Industry:</span>
                    <span className="text-xs text-gray-800">{story.industry}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm text-gray-700 mb-2">Tools Used:</h4>
                  <div className="flex flex-wrap gap-1">
                    {story.tools.map((tool) => (
                      <Badge key={tool} variant="secondary" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                <blockquote className="text-sm text-gray-700 italic border-l-2 border-gray-300 pl-4">
                  "{story.quote}"
                </blockquote>
              </div>

              {/* Story Content */}
              <div className="lg:col-span-2 p-8">
                <div className="space-y-8">
                  {/* Challenge */}
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <AlertTriangle className="h-4 w-4 text-orange-500" />
                      <h4 className="text-lg text-gray-900">The Challenge</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{story.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Shield className="h-4 w-4 text-blue-500" />
                      <h4 className="text-lg text-gray-900">The Solution</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{story.solution}</p>
                  </div>

                  {/* Outcome */}
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <h4 className="text-lg text-gray-900">The Outcome</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">{story.outcome}</p>
                    
                    {/* Success Metrics */}
                    <div className="grid sm:grid-cols-2 gap-3">
                      {story.metrics.map((metric) => (
                        <div key={metric} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <Card className="bg-gray-900 text-white">
          <CardContent className="py-12">
            <h2 className="text-2xl mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of Australian SMEs who have strengthened their Cybersecurity posture with CyberWise Core. 
              Start your risk assessment today and take the first step toward better protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => onNavigate?.("risk-tool")}
                className="bg-white text-gray-900 hover:bg-gray-100"
              >
                Start Risk Assessment
              </Button>
              <Button 
                onClick={() => onNavigate?.("compliance")}
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                Check Compliance
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}