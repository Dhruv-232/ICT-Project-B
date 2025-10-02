import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { CheckSquare, Download, ExternalLink, Shield, FileText, AlertTriangle, Lock } from "lucide-react";
import { RecommendationsSection } from "./RecommendationsSection";

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  required: boolean;
  sector?: string[];
  businessSize?: string[];
}

interface ComplianceFramework {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  externalLink?: string;
  items: ChecklistItem[];
}

// Compliance-based recommendations
const getComplianceRecommendations = (progressPercentage: number, businessSize: string, sector: string) => {
  const recommendations = [];

  // Base recommendations based on completion percentage
  if (progressPercentage < 25) {
    recommendations.push(
      {
        id: "start-privacy",
        title: "Begin with Privacy Fundamentals",
        description: "Start your compliance journey by implementing basic privacy policies and data handling procedures",
        priority: "high" as const,
        category: "Privacy",
        timeframe: "2-3 weeks",
        effort: "low" as const,
        impact: "high" as const,
        action: "Start Privacy Basics",
        resources: [
          { title: "Privacy Policy Template", url: "#", type: "guide" as const },
          { title: "OAIC Privacy Guidelines", url: "https://www.oaic.gov.au/", type: "external" as const }
        ]
      },
      {
        id: "essential-eight-start",
        title: "Implement Essential Eight Basics",
        description: "Focus on the foundational ACSC Essential Eight security controls to establish baseline protection",
        priority: "high" as const,
        category: "Security",
        timeframe: "4-6 weeks",
        effort: "medium" as const,
        impact: "high" as const,
        action: "Start Essential Eight",
        resources: [
          { title: "Essential Eight Implementation Guide", url: "#", type: "guide" as const }
        ]
      }
    );
  } else if (progressPercentage < 50) {
    recommendations.push(
      {
        id: "expand-controls",
        title: "Expand Security Controls",
        description: "Build on your foundation by implementing additional security measures and monitoring capabilities",
        priority: "medium" as const,
        category: "Security",
        timeframe: "6-8 weeks",
        effort: "medium" as const,
        impact: "medium" as const,
        action: "Expand Controls",
        resources: [
          { title: "Security Controls Checklist", url: "#", type: "guide" as const }
        ]
      },
      {
        id: "data-governance",
        title: "Strengthen Data Governance",
        description: "Develop comprehensive data classification and handling procedures",
        priority: "medium" as const,
        category: "Data Management",
        timeframe: "4-6 weeks",
        effort: "medium" as const,
        impact: "high" as const,
        action: "Develop Procedures",
        resources: [
          { title: "Data Governance Framework", url: "#", type: "guide" as const }
        ]
      }
    );
  } else if (progressPercentage < 75) {
    recommendations.push(
      {
        id: "advanced-monitoring",
        title: "Advanced Monitoring and Detection",
        description: "Implement sophisticated monitoring tools and incident response procedures",
        priority: "medium" as const,
        category: "Monitoring",
        timeframe: "8-12 weeks",
        effort: "high" as const,
        impact: "medium" as const,
        action: "Setup Monitoring",
        resources: [
          { title: "Monitoring Solutions Guide", url: "#", type: "guide" as const }
        ]
      }
    );
  }

  // Sector-specific recommendations
  if (sector === "healthcare") {
    recommendations.push({
      id: "healthcare-specific",
      title: "Healthcare Data Protection",
      description: "Implement healthcare-specific privacy and security measures for patient data protection",
      priority: "high" as const,
      category: "Healthcare",
      timeframe: "3-4 weeks",
      effort: "medium" as const,
      impact: "high" as const,
      action: "Review Healthcare Requirements",
      resources: [
        { title: "Healthcare Privacy Guide", url: "#", type: "guide" as const }
      ]
    });
  }

  if (sector === "finance") {
    recommendations.push({
      id: "finance-specific",
      title: "Financial Services Compliance",
      description: "Ensure compliance with financial sector cybersecurity and privacy requirements",
      priority: "high" as const,
      category: "Finance",
      timeframe: "4-6 weeks",
      effort: "high" as const,
      impact: "high" as const,
      action: "Review Finance Requirements",
      resources: [
        { title: "Financial Services Guide", url: "#", type: "guide" as const }
      ]
    });
  }

  // Business size specific recommendations
  if (businessSize === "small") {
    recommendations.push({
      id: "small-business",
      title: "Small Business Security Essentials",
      description: "Focus on cost-effective security measures that provide maximum protection for small businesses",
      priority: "medium" as const,
      category: "Small Business",
      timeframe: "2-4 weeks",
      effort: "low" as const,
      impact: "medium" as const,
      action: "Review Small Business Guide",
      resources: [
        { title: "Small Business Cybersecurity Guide", url: "#", type: "guide" as const }
      ]
    });
  }

  // Always include continuous improvement recommendations
  recommendations.push({
    id: "continuous-improvement",
    title: "Continuous Compliance Monitoring",
    description: "Establish regular reviews and updates to maintain compliance as regulations evolve",
    priority: "low" as const,
    category: "Process",
    timeframe: "Ongoing",
    effort: "low" as const,
    impact: "medium" as const,
    action: "Setup Reviews",
    resources: [
      { title: "Compliance Review Schedule", url: "#", type: "guide" as const }
    ]
  });

  return recommendations;
};

const complianceFrameworks: ComplianceFramework[] = [
  {
    id: "privacy-act",
    name: "Privacy Act 1988",
    icon: <Shield className="h-5 w-5" />,
    description: "Australian Privacy Principles and data protection requirements",
    externalLink: "https://www.oaic.gov.au/privacy/privacy-legislation/the-privacy-act",
    items: [
      {
        id: "privacy-1",
        title: "Privacy Policy",
        description: "Maintain an up-to-date privacy policy that is clearly accessible",
        completed: false,
        required: true,
      },
      {
        id: "privacy-2",
        title: "Data Collection Notice",
        description: "Provide collection notices when collecting personal information",
        completed: false,
        required: true,
      },
      {
        id: "privacy-3",
        title: "Consent Management",
        description: "Implement proper consent mechanisms for data collection",
        completed: false,
        required: true,
      },
      {
        id: "privacy-4",
        title: "Data Breach Response",
        description: "Establish procedures for notifiable data breach requirements",
        completed: false,
        required: true,
      },
      {
        id: "privacy-5",
        title: "Access and Correction",
        description: "Provide mechanisms for individuals to access and correct their information",
        completed: false,
        required: true,
      },
    ],
  },
  {
    id: "cybersecurity-act",
    name: "Cybersecurity Act 2024",
    icon: <Lock className="h-5 w-5" />,
    description: "Critical infrastructure cybersecurity obligations",
    externalLink: "https://www.cisc.gov.au/",
    items: [
      {
        id: "cyber-1",
        title: "Risk Assessment",
        description: "Conduct regular cybersecurity risk assessments",
        completed: false,
        required: true,
        sector: ["finance", "healthcare"],
      },
      {
        id: "cyber-2",
        title: "Incident Response Plan",
        description: "Develop and maintain a cybersecurity incident response plan",
        completed: false,
        required: true,
      },
      {
        id: "cyber-3",
        title: "Security Controls",
        description: "Implement appropriate security controls for your sector",
        completed: false,
        required: true,
      },
      {
        id: "cyber-4",
        title: "Reporting Framework",
        description: "Establish reporting procedures for cybersecurity incidents",
        completed: false,
        required: true,
        sector: ["finance", "healthcare"],
      },
    ],
  },
  {
    id: "essential-eight",
    name: "ACSC Essential Eight",
    icon: <FileText className="h-5 w-5" />,
    description: "Australian Cyber Security Centre's baseline cybersecurity strategies",
    externalLink: "https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/essential-eight",
    items: [
      {
        id: "e8-1",
        title: "Application Control",
        description: "Prevent execution of unapproved/malicious programs",
        completed: false,
        required: true,
      },
      {
        id: "e8-2",
        title: "Patch Applications",
        description: "Update applications with security patches within 48 hours",
        completed: false,
        required: true,
      },
      {
        id: "e8-3",
        title: "Configure Microsoft Office Macro Settings",
        description: "Configure macro settings to block macros from the internet",
        completed: false,
        required: true,
      },
      {
        id: "e8-4",
        title: "User Application Hardening",
        description: "Configure web browsers and PDF viewers securely",
        completed: false,
        required: true,
      },
      {
        id: "e8-5",
        title: "Restrict Administrative Privileges",
        description: "Prevent unnecessary use of administrative privileges",
        completed: false,
        required: true,
      },
      {
        id: "e8-6",
        title: "Patch Operating Systems",
        description: "Update operating systems with security patches within 48 hours",
        completed: false,
        required: true,
      },
      {
        id: "e8-7",
        title: "Multi-factor Authentication",
        description: "Use MFA for all users, especially privileged accounts",
        completed: false,
        required: true,
      },
      {
        id: "e8-8",
        title: "Regular Backups",
        description: "Backup important data and test restoration processes",
        completed: false,
        required: true,
      },
    ],
  },
  {
    id: "ransomware-reporting",
    name: "Ransomware Reporting Rules 2025",
    icon: <AlertTriangle className="h-5 w-5" />,
    description: "Mandatory ransomware incident reporting requirements under Cyber Security Act 2024",
    externalLink: "https://www.cyber.gov.au/",
    items: [
      // Business Overview
      {
        id: "ransom-turnover",
        title: "Annual Turnover Assessment",
        description: "Determine if your business has annual turnover of more than $3 million (required for compliance)",
        completed: false,
        required: true,
      },
      // Ransomware Reporting Obligations
      {
        id: "ransom-incident-check",
        title: "Ransomware Incident Assessment",
        description: "Document any ransomware incidents experienced in the last 12 months",
        completed: false,
        required: true,
      },
      {
        id: "ransom-payment-reporting",
        title: "Payment Reporting to Authorities",
        description: "Report ransomware payment amounts and methods to Department of Home Affairs and ASD",
        completed: false,
        required: true,
      },
      {
        id: "ransom-entity-info",
        title: "Extorting Entity Information",
        description: "Provide information about extorting entity communications and negotiation details",
        completed: false,
        required: true,
      },
      {
        id: "ransom-variant-disclosure",
        title: "Ransomware Variant Disclosure",
        description: "Disclose specific ransomware variant or malware involved in incidents",
        completed: false,
        required: true,
      },
      {
        id: "ransom-business-impact",
        title: "Business Impact Reporting",
        description: "Report impact on infrastructure and customers from ransomware incidents",
        completed: false,
        required: true,
      },
      {
        id: "ransom-timeline-reporting",
        title: "Incident Timeline Documentation",
        description: "Report when incident occurred and when organization became aware",
        completed: false,
        required: true,
      },
      // Cybersecurity Risk Assessment
      {
        id: "ransom-risk-assessment",
        title: "Cybersecurity Risk Assessment",
        description: "Conduct comprehensive cybersecurity risk assessment for business operations",
        completed: false,
        required: true,
      },
      {
        id: "ransom-risk-mitigation",
        title: "Risk Mitigation Strategy Review",
        description: "Review and update risk management and mitigation strategies based on assessment",
        completed: false,
        required: true,
      },
      // Data Protection and Privacy
      {
        id: "ransom-privacy-compliance",
        title: "Privacy Act 1988 Compliance",
        description: "Follow Privacy Act requirements to protect customer data",
        completed: false,
        required: true,
      },
      {
        id: "ransom-data-encryption",
        title: "Sensitive Data Encryption",
        description: "Implement encryption for all sensitive customer and business data",
        completed: false,
        required: true,
      },
      {
        id: "ransom-privacy-policy-updates",
        title: "Privacy Policy Updates",
        description: "Regularly review and update privacy policies to maintain compliance",
        completed: false,
        required: true,
      },
      {
        id: "ransom-access-controls",
        title: "Data Access Controls",
        description: "Implement controls to restrict sensitive data access to authorized personnel only",
        completed: false,
        required: true,
      },
      {
        id: "ransom-staff-data-training",
        title: "Staff Data Protection Training",
        description: "Train employees on data protection and privacy practices",
        completed: false,
        required: true,
      },
      // Incident Response and Recovery
      {
        id: "ransom-incident-response-plan",
        title: "Formal Incident Response Plan",
        description: "Develop written incident response plan covering ransomware and other cyber threats",
        completed: false,
        required: true,
      },
      {
        id: "ransom-response-training",
        title: "Incident Response Training",
        description: "Train employees to execute incident response plan effectively",
        completed: false,
        required: true,
      },
      {
        id: "ransom-internal-reporting",
        title: "Internal Incident Reporting Procedures",
        description: "Ensure employees know how to report cybersecurity incidents internally",
        completed: false,
        required: true,
      },
      {
        id: "ransom-backup-procedures",
        title: "Regular Backup Procedures",
        description: "Implement regular backup of critical systems and data to prevent loss during attacks",
        completed: false,
        required: true,
      },
      // Employee Awareness and Training
      {
        id: "ransom-cybersecurity-training",
        title: "Regular Cybersecurity Training",
        description: "Provide ongoing cybersecurity training updated for emerging threats including ransomware",
        completed: false,
        required: true,
      },
      {
        id: "ransom-phishing-awareness",
        title: "Phishing and Social Engineering Training",
        description: "Train employees to identify phishing emails and social engineering tactics",
        completed: false,
        required: true,
      },
      // ACSC Essential Eight Compliance
      {
        id: "ransom-application-whitelisting",
        title: "Application Whitelisting",
        description: "Implement ACSC Essential Eight: Application whitelisting controls",
        completed: false,
        required: true,
      },
      {
        id: "ransom-patching-systems",
        title: "System and Application Patching",
        description: "Implement ACSC Essential Eight: Regular patching of applications and operating systems",
        completed: false,
        required: true,
      },
      {
        id: "ransom-admin-privileges",
        title: "Administrative Privilege Restrictions",
        description: "Implement ACSC Essential Eight: Restrict administrative privileges appropriately",
        completed: false,
        required: true,
      },
      {
        id: "ransom-mfa-implementation",
        title: "Multi-Factor Authentication",
        description: "Implement ACSC Essential Eight: Multi-factor authentication for all users",
        completed: false,
        required: true,
      },
      {
        id: "ransom-user-hardening",
        title: "User Application Hardening",
        description: "Implement ACSC Essential Eight: Secure configuration of user applications",
        completed: false,
        required: true,
      },
      {
        id: "ransom-daily-backups",
        title: "Daily Data Backups",
        description: "Implement ACSC Essential Eight: Daily backup of important business data",
        completed: false,
        required: true,
      },
      {
        id: "ransom-monitoring-logging",
        title: "System Monitoring and Logging",
        description: "Implement ACSC Essential Eight: Comprehensive monitoring and logging of systems",
        completed: false,
        required: true,
      },
      {
        id: "ransom-malware-defenses",
        title: "Strong Malware Defenses",
        description: "Implement ACSC Essential Eight: Deploy strong malware detection and prevention systems",
        completed: false,
        required: true,
      },
    ],
  },
];

export function ComplianceChecklistPage() {
  const [businessSize, setBusinessSize] = useState<string>("");
  const [sector, setSector] = useState<string>("");
  const [checklist, setChecklist] = useState<ComplianceFramework[]>(complianceFrameworks);
  const [activeFramework, setActiveFramework] = useState<string | null>(null);

  // Calculate overall progress
  const totalItems = checklist.reduce((total, framework) => {
    return total + framework.items.filter(item => 
      (!item.sector || item.sector.includes(sector) || sector === "") &&
      (!item.businessSize || item.businessSize.includes(businessSize) || businessSize === "")
    ).length;
  }, 0);

  const completedItems = checklist.reduce((completed, framework) => {
    return completed + framework.items.filter(item => 
      item.completed &&
      (!item.sector || item.sector.includes(sector) || sector === "") &&
      (!item.businessSize || item.businessSize.includes(businessSize) || businessSize === "")
    ).length;
  }, 0);

  const progressPercentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

  const handleItemToggle = (frameworkId: string, itemId: string) => {
    setChecklist(prev => prev.map(framework => {
      if (framework.id === frameworkId) {
        return {
          ...framework,
          items: framework.items.map(item => 
            item.id === itemId ? { ...item, completed: !item.completed } : item
          )
        };
      }
      return framework;
    }));
  };

  const generateReport = () => {
    // In a real application, this would generate a proper PDF
    const reportData = {
      businessSize,
      sector,
      completionDate: new Date().toLocaleDateString(),
      progressPercentage,
      frameworks: checklist.map(framework => ({
        name: framework.name,
        items: framework.items.filter(item => 
          (!item.sector || item.sector.includes(sector) || sector === "") &&
          (!item.businessSize || item.businessSize.includes(businessSize) || businessSize === "")
        ).map(item => ({
          title: item.title,
          completed: item.completed,
          required: item.required
        }))
      }))
    };

    // Create a simple text report for demonstration
    let reportContent = `COMPLIANCE CHECKLIST REPORT\n\n`;
    reportContent += `Business Size: ${businessSize || 'Not specified'}\n`;
    reportContent += `Sector: ${sector || 'Not specified'}\n`;
    reportContent += `Completion Date: ${reportData.completionDate}\n`;
    reportContent += `Overall Progress: ${progressPercentage}%\n\n`;

    reportData.frameworks.forEach(framework => {
      reportContent += `${framework.name.toUpperCase()}\n`;
      reportContent += `${'='.repeat(framework.name.length)}\n`;
      framework.items.forEach(item => {
        reportContent += `${item.completed ? '✓' : '✗'} ${item.title}${item.required ? ' (Required)' : ''}\n`;
      });
      reportContent += '\n';
    });

    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `compliance-report-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getFrameworkProgress = (framework: ComplianceFramework) => {
    const relevantItems = framework.items.filter(item => 
      (!item.sector || item.sector.includes(sector) || sector === "") &&
      (!item.businessSize || item.businessSize.includes(businessSize) || businessSize === "")
    );
    const completed = relevantItems.filter(item => item.completed).length;
    return relevantItems.length > 0 ? Math.round((completed / relevantItems.length) * 100) : 0;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl text-gray-900 mb-4">Compliance Checklist</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ensure your organization meets all relevant cybersecurity compliance requirements. 
          Select your business details below to customize your checklist.
        </p>
      </div>

      {/* Business Configuration */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Organization Details</CardTitle>
          <CardDescription>
            Configure your business profile to see relevant compliance requirements
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
                  <SelectItem value="medium">Medium (51-250 employees)</SelectItem>
                  <SelectItem value="large">Large (250+ employees)</SelectItem>
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

      {/* Progress Overview */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Overall Progress</span>
            <Badge variant={progressPercentage === 100 ? "default" : "secondary"}>
              {progressPercentage}% Complete
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={progressPercentage} className="mb-4" />
          <div className="flex justify-between text-sm text-gray-600">
            <span>{completedItems} of {totalItems} items completed</span>
            <span>{totalItems - completedItems} remaining</span>
          </div>
        </CardContent>
      </Card>

      {/* Compliance Frameworks */}
      <div className="grid gap-6">
        <h2 className="text-2xl text-gray-900">Compliance Frameworks</h2>
        
        {checklist.map((framework) => {
          const frameworkProgress = getFrameworkProgress(framework);
          const relevantItems = framework.items.filter(item => 
            (!item.sector || item.sector.includes(sector) || sector === "") &&
            (!item.businessSize || item.businessSize.includes(businessSize) || businessSize === "")
          );
          
          return (
            <Card key={framework.id}>
              <CardHeader>
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
                      <CardDescription>{framework.description}</CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={frameworkProgress === 100 ? "default" : "secondary"}>
                      {frameworkProgress}%
                    </Badge>
                  </div>
                </div>
                <Progress value={frameworkProgress} className="mt-4" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {relevantItems.map((item) => (
                    <div key={item.id} className="flex items-start space-x-3 p-3 rounded-lg border border-gray-200">
                      <Checkbox
                        id={item.id}
                        checked={item.completed}
                        onCheckedChange={() => handleItemToggle(framework.id, item.id)}
                        className="mt-1"
                      />
                      <div className="flex-1 space-y-1">
                        <label 
                          htmlFor={item.id}
                          className="text-sm cursor-pointer flex items-center space-x-2"
                        >
                          <span className={item.completed ? "line-through text-gray-500" : "text-gray-900"}>
                            {item.title}
                          </span>
                          {item.required && (
                            <Badge variant="outline" className="text-xs">
                              Required
                            </Badge>
                          )}
                        </label>
                        <p className="text-xs text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {framework.externalLink && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(framework.externalLink, '_blank')}
                      className="w-full"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Official Documentation
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Compliance Recommendations */}
      <div className="mt-8">
        <RecommendationsSection
          title="Compliance Improvement Recommendations"
          subtitle="Tailored suggestions to enhance your compliance posture and security maturity"
          recommendations={getComplianceRecommendations(progressPercentage, businessSize, sector)}
          onActionClick={(recommendation) => {
            // Handle action clicks - could scroll to relevant section or open guides
            console.log("Action clicked for:", recommendation.title);
          }}
        />
      </div>

      {/* Report Generation */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Generate Compliance Report</CardTitle>
          <CardDescription>
            Download a comprehensive report of your compliance status for audit purposes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={generateReport}
            disabled={progressPercentage === 0}
            className="w-full bg-gray-900 hover:bg-gray-800 text-white"
          >
            <Download className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
          {progressPercentage === 0 && (
            <p className="text-sm text-gray-500 mt-2 text-center">
              Complete at least one checklist item to generate a report
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}