import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  BookOpen,
  ExternalLink,
  FileText,
  Shield,
  Users,
  AlertTriangle,
  CheckCircle,
  Download,
  Play,
  Calendar,
  Globe,
  Lock,
  Search,
  Lightbulb,
} from "lucide-react";

interface Resource {
  title: string;
  description: string;
  type: "guide" | "document" | "video" | "webinar" | "tool" | "checklist";
  level: "beginner" | "intermediate" | "advanced";
  duration?: string;
  url?: string;
  downloadUrl?: string;
  guide?: string;
  assessment?: string;
  training?: string;
  tags: string[];
}

interface ResourceCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  resources: Resource[];
}

const resourceCategories: ResourceCategory[] = [
  {
    id: "government-frameworks",
    name: "Government Frameworks",
    description:
      "Official Australian government cybersecurity frameworks and legislation",
    icon: <Shield className="h-5 w-5" />,
    resources: [
      {
        title: "Privacy Act 1988 - Complete Guide",
        description:
          "Comprehensive guide to understanding and implementing Privacy Act requirements for SMEs",
        type: "guide",
        level: "beginner",
        duration: "45 min read",
        url: "https://www.oaic.gov.au/privacy/privacy-legislation/the-privacy-act",
        tags: ["Privacy Act", "Data Protection", "Legal Requirements"],
      },
      {
        title: "Cybersecurity Act 2024 Implementation Guide",
        description:
          "Step-by-step guide for critical infrastructure cybersecurity obligations",
        type: "document",
        level: "intermediate",
        duration: "1 hour read",
        url: "https://www.cisc.gov.au/",
        tags: ["Cybersecurity Act", "Critical Infrastructure", "Compliance"],
      },
      {
        title: "ACSC Essential Eight Maturity Model",
        description:
          "Detailed implementation guide for the Essential Eight cybersecurity strategies",
        type: "guide",
        level: "intermediate",
        duration: "2 hours",
        url: "https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/essential-eight",
        tags: ["Essential Eight", "ACSC", "Security Controls"],
      },
      {
        title: "Ransomware Reporting Rules 2025",
        description:
          "Understanding mandatory ransomware incident reporting requirements",
        type: "document",
        level: "beginner",
        duration: "30 min read",
        url: "https://www.cyber.gov.au/",
        tags: ["Ransomware", "Incident Reporting", "Legal Requirements"],
      },
    ],
  },
  {
    id: "implementation-guides",
    name: "Implementation Guides",
    description:
      "Practical guides for implementing cybersecurity measures in your organization",
    icon: <BookOpen className="h-5 w-5" />,
    resources: [
      {
        title: "SME Cybersecurity Quick Start Guide",
        description:
          "Essential first steps for small businesses starting their cybersecurity journey",
        type: "guide",
        level: "beginner",
        duration: "20 min read",
        guide: "#",
        tags: ["SME", "Getting Started", "Basics"],
      },
      {
        title: "Multi-Factor Authentication Setup Guide",
        description:
          "Complete guide to implementing MFA across your organization",
        type: "guide",
        level: "beginner",
        duration: "30 min read",
        guide: "#",
        tags: ["MFA", "Authentication", "Security"],
      },
      {
        title: "Data Backup and Recovery Planning",
        description:
          "Creating effective backup strategies and disaster recovery plans",
        type: "guide",
        level: "intermediate",
        duration: "1 hour read",
        guide: "#",
        tags: ["Backup", "Disaster Recovery", "Business Continuity"],
      },
      {
        title: "Employee Security Training Program",
        description:
          "Framework for developing cybersecurity awareness training for staff",
        type: "guide",
        level: "intermediate",
        duration: "45 min read",
        guide: "#",
        tags: ["Training", "Awareness", "Human Factors"],
      },
      {
        title: "Incident Response Plan Template",
        description:
          "Ready-to-use template for creating your cybersecurity incident response plan",
        type: "tool",
        level: "intermediate",
        duration: "2 hours setup",
        guide: "#",
        tags: ["Incident Response", "Template", "Emergency Planning"],
      },
    ],
  },
  {
    id: "assessment-tools",
    name: "Assessment Tools",
    description:
      "Tools and checklists to evaluate your current cybersecurity posture",
    icon: <CheckCircle className="h-5 w-5" />,
    resources: [
      {
        title: "Cybersecurity Maturity Self-Assessment",
        description:
          "Evaluate your organization's cybersecurity maturity across key domains",
        type: "tool",
        level: "beginner",
        duration: "30 minutes",
        assessment: "#",
        tags: ["Self-Assessment", "Maturity", "Evaluation"],
      },
      {
        title: "Privacy Impact Assessment Template",
        description:
          "Template for conducting privacy impact assessments on new projects",
        type: "checklist",
        level: "intermediate",
        duration: "1 hour",
        assessment: "#",
        tags: ["Privacy", "PIA", "Template"],
      },
      {
        title: "Essential Eight Readiness Checklist",
        description:
          "Comprehensive checklist to assess your Essential Eight implementation",
        type: "checklist",
        level: "intermediate",
        duration: "45 minutes",
        assessment: "#",
        tags: ["Essential Eight", "Checklist", "Assessment"],
      },
      {
        title: "Risk Assessment Methodology",
        description:
          "Structured approach to identifying and assessing cybersecurity risks",
        type: "guide",
        level: "advanced",
        duration: "2 hours",
        assessment: "#",
        tags: ["Risk Assessment", "Methodology", "Risk Management"],
      },
    ],
  },
  {
    id: "training-education",
    name: "Training & Education",
    description:
      "Educational resources and training materials for teams and individuals",
    icon: <Users className="h-5 w-5" />,
    resources: [
      {
        title: "Cybersecurity Awareness for Employees",
        description:
          "Interactive training module covering common threats and safe practices",
        type: "video",
        level: "beginner",
        duration: "25 minutes",
        training: "#",
        tags: ["Employee Training", "Awareness", "Phishing"],
      },
      {
        title: "Password Security Best Practices",
        description: "Comprehensive guide to password management and security",
        type: "guide",
        level: "beginner",
        duration: "15 min read",
        training: "#",
        tags: ["Passwords", "Authentication", "Best Practices"],
      },
      {
        title: "Social Engineering Recognition",
        description:
          "Learn to identify and respond to social engineering attacks",
        type: "video",
        level: "beginner",
        duration: "30 minutes",
        training: "#",
        tags: ["Social Engineering", "Phishing", "Awareness"],
      },
      {
        title: "Secure Remote Work Practices",
        description:
          "Guidelines for maintaining security while working remotely",
        type: "guide",
        level: "beginner",
        duration: "20 min read",
        training: "#",
        tags: ["Remote Work", "VPN", "Home Office Security"],
      },
      {
        title: "Monthly Cybersecurity Webinar Series",
        description:
          "Regular webinars covering current threats and compliance updates",
        type: "webinar",
        level: "beginner",
        duration: "1 hour",
        training: "#",
        tags: ["Webinar", "Current Threats", "Updates"],
      },
    ],
  },
  {
    id: "incident-response",
    name: "Incident Response",
    description:
      "Resources for preparing for and responding to cybersecurity incidents",
    icon: <AlertTriangle className="h-5 w-5" />,
    resources: [
      {
        title: "Data Breach Response Checklist",
        description:
          "Step-by-step checklist for responding to data security incidents",
        type: "checklist",
        level: "beginner",
        duration: "Immediate use",
        downloadUrl: "#",
        url: "#",
        tags: ["Data Breach", "Incident Response", "Emergency"],
      },
      {
        title: "Ransomware Attack Response Guide",
        description:
          "Comprehensive guide for responding to ransomware incidents",
        type: "guide",
        level: "intermediate",
        duration: "1 hour read",
        url: "#",
        tags: ["Ransomware", "Incident Response", "Recovery"],
      },
      {
        title: "Communication Templates for Incidents",
        description:
          "Pre-written templates for communicating during security incidents",
        type: "tool",
        level: "beginner",
        duration: "Setup: 30 min",
        downloadUrl: "#",
        url: "#",
        tags: ["Communication", "Templates", "Crisis Management"],
      },
      {
        title: "Forensic Evidence Preservation",
        description:
          "Guidelines for preserving digital evidence during incidents",
        type: "guide",
        level: "advanced",
        duration: "45 min read",
        url: "#",
        tags: ["Forensics", "Evidence", "Investigation"],
      },
    ],
  },
  {
    id: "industry-specific",
    name: "Industry-Specific Resources",
    description:
      "Tailored guidance for specific industry sectors and compliance requirements",
    icon: <Globe className="h-5 w-5" />,
    resources: [
      {
        title: "Healthcare Cybersecurity Guide",
        description:
          "Specific guidance for healthcare providers and patient data protection",
        type: "guide",
        level: "intermediate",
        duration: "1.5 hours",
        url: "#",
        tags: ["Healthcare", "Patient Data", "HIPAA-aligned"],
      },
      {
        title: "Financial Services Security Framework",
        description:
          "Cybersecurity requirements and best practices for financial institutions",
        type: "document",
        level: "advanced",
        duration: "2 hours",
        url: "#",
        tags: ["Finance", "Banking", "Financial Data"],
      },
      {
        title: "Retail PCI DSS Compliance Guide",
        description: "Payment Card Industry compliance for retail businesses",
        type: "guide",
        level: "intermediate",
        duration: "1 hour",
        url: "#",
        tags: ["Retail", "PCI DSS", "Payment Security"],
      },
      {
        title: "Education Sector Cybersecurity",
        description:
          "Protecting student data and educational technology systems",
        type: "guide",
        level: "beginner",
        duration: "45 minutes",
        url: "#",
        tags: ["Education", "Student Data", "EdTech"],
      },
    ],
  },
];

const getTypeIcon = (type: Resource["type"]) => {
  switch (type) {
    case "guide":
      return <BookOpen className="h-4 w-4" />;
    case "document":
      return <FileText className="h-4 w-4" />;
    case "video":
      return <Play className="h-4 w-4" />;
    case "webinar":
      return <Calendar className="h-4 w-4" />;
    case "tool":
      return <Lightbulb className="h-4 w-4" />;
    case "checklist":
      return <CheckCircle className="h-4 w-4" />;
    default:
      return <FileText className="h-4 w-4" />;
  }
};

const getLevelColor = (level: Resource["level"]) => {
  switch (level) {
    case "beginner":
      return "bg-green-100 text-green-800";
    case "intermediate":
      return "bg-yellow-100 text-yellow-800";
    case "advanced":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-8">
              <BookOpen className="h-10 w-10 text-gray-700" />
            </div>
            <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">
              Cybersecurity Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive guides, tools, and educational materials to help
              your organization understand and implement Australian
              cybersecurity compliance requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center p-4">
              <CardContent className="pt-6">
                <Shield className="h-8 w-8 text-gray-700 mx-auto mb-3" />
                <h3 className="text-lg text-gray-900 mb-2">Getting Started</h3>
                <p className="text-sm text-gray-600">
                  New to cybersecurity? Start with our beginner-friendly guides.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-4">
              <CardContent className="pt-6">
                <CheckCircle className="h-8 w-8 text-gray-700 mx-auto mb-3" />
                <h3 className="text-lg text-gray-900 mb-2">Assessment Tools</h3>
                <p className="text-sm text-gray-600">
                  Evaluate your current security posture with our assessment
                  tools.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-4">
              <CardContent className="pt-6">
                <FileText className="h-8 w-8 text-gray-700 mx-auto mb-3" />
                <h3 className="text-lg text-gray-900 mb-2">Templates</h3>
                <p className="text-sm text-gray-600">
                  Ready-to-use templates for policies, procedures, and plans.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-4">
              <CardContent className="pt-6">
                <Users className="h-8 w-8 text-gray-700 mx-auto mb-3" />
                <h3 className="text-lg text-gray-900 mb-2">Training</h3>
                <p className="text-sm text-gray-600">
                  Educational materials to build cybersecurity awareness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Resources Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="government-frameworks" className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 mb-8">
              {resourceCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="text-xs"
                >
                  {category.name.split(" ")[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {resourceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="mb-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-gray-100 rounded">
                      {category.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl text-gray-900">
                        {category.name}
                      </h2>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6">
                  {category.resources.map((resource, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-3">
                            <div className="p-2 bg-gray-100 rounded mt-1">
                              {getTypeIcon(resource.type)}
                            </div>
                            <div>
                              <CardTitle className="text-lg">
                                {resource.title}
                              </CardTitle>
                              <CardDescription className="mt-2">
                                {resource.description}
                              </CardDescription>
                            </div>
                          </div>
                          <div className="flex flex-col items-end space-y-2">
                            <Badge className={getLevelColor(resource.level)}>
                              {resource.level}
                            </Badge>
                            {resource.duration && (
                              <span className="text-sm text-gray-500">
                                {resource.duration}
                              </span>
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {resource.tags.map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              variant="outline"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex space-x-3">
                          {resource.url && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                window.open(resource.url, "_blank")
                              }
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              View Resource
                            </Button>
                          )}
                          {resource.downloadUrl && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                // In a real app, this would trigger actual download
                                console.log("Downloading:", resource.title);
                              }}
                            >
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          )}
                          {resource.guide && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                // In a real app, this would trigger actual download
                                console.log("Downloading:", resource.title);
                              }}
                            >
                              <BookOpen className="h-4 w-4 mr-2" />
                              Read Guide
                            </Button>
                          )}
                          {resource.assessment && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                console.log("Downloading:", resource.title);
                              }}
                            >
                              <Play className="h-4 w-4 mr-2" />
                              Take Assement
                            </Button>
                          )}
                          {resource.training && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                console.log("Start Training:", resource.title);
                              }}
                            >
                              <Play className="h-4 w-4 mr-2" />
                              Start Training
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cybersecurity threats and regulations are constantly evolving.
              Here are additional resources to keep your knowledge current.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>Official Government Sources</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg text-gray-900 mb-2">
                      Australian Cyber Security Centre (ACSC)
                    </h4>
                    <p className="text-gray-600 mb-2">
                      Latest threat intelligence and security guidance
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        window.open("https://www.cyber.gov.au/", "_blank")
                      }
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit ACSC
                    </Button>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="text-lg text-gray-900 mb-2">
                      Office of the Australian Information Commissioner (OAIC)
                    </h4>
                    <p className="text-gray-600 mb-2">
                      Privacy law guidance and breach notifications
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        window.open("https://www.oaic.gov.au/", "_blank")
                      }
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit OAIC
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Search className="h-5 w-5" />
                  <span>Industry Resources</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg text-gray-900 mb-2">
                      Australian Information Industry Association (AIIA)
                    </h4>
                    <p className="text-gray-600 mb-2">
                      Industry insights and cybersecurity initiatives
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        window.open("https://www.aiia.com.au/", "_blank")
                      }
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit AIIA
                    </Button>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="text-lg text-gray-900 mb-2">
                      Australian Computer Society (ACS)
                    </h4>
                    <p className="text-gray-600 mb-2">
                      Professional development and certification programs
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        window.open("https://www.acs.org.au/", "_blank")
                      }
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit ACS
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
