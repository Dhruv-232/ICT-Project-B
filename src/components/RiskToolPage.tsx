import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { AlertTriangle, Shield, Server, Users, Lock, Wifi, Database, Check, FileText } from "lucide-react";
import { RiskHeatMap } from "./RiskHeatMap";
import { RecommendationsSection } from "./RecommendationsSection";

interface RiskCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  questions: {
    id: string;
    question: string;
    options: { value: string; label: string; risk: number }[];
  }[];
}

// Risk-based recommendations data
const getRiskRecommendations = (riskScore: number) => {
  if (riskScore > 60) {
    return [
      {
        id: "critical-mfa",
        title: "Implement Multi-Factor Authentication",
        description: "Deploy MFA across all critical systems and user accounts to prevent unauthorized access",
        priority: "high" as const,
        category: "Access Control",
        timeframe: "1-2 weeks",
        effort: "medium" as const,
        impact: "high" as const,
        action: "Start Implementation",
        resources: [
          { title: "MFA Setup Guide", url: "#", type: "guide" as const },
          { title: "ACSC MFA Guidelines", url: "https://www.cyber.gov.au/", type: "external" as const }
        ]
      },
      {
        id: "critical-updates",
        title: "Emergency System Updates",
        description: "Immediately patch all systems and software to address known vulnerabilities",
        priority: "high" as const,
        category: "Patch Management",
        timeframe: "1 week",
        effort: "high" as const,
        impact: "high" as const,
        action: "Schedule Updates",
        resources: [
          { title: "Patch Management Tool", url: "#", type: "tool" as const }
        ]
      },
      {
        id: "critical-backup",
        title: "Establish Backup Procedures",
        description: "Implement automated, tested backup and recovery procedures for critical data",
        priority: "high" as const,
        category: "Data Protection",
        timeframe: "2-3 weeks",
        effort: "medium" as const,
        impact: "high" as const,
        action: "Setup Backups",
        resources: [
          { title: "Backup Strategy Guide", url: "#", type: "guide" as const }
        ]
      },
      {
        id: "critical-training",
        title: "Cyber security Staff Training",
        description: "Conduct immediate cyber security awareness training for all employees",
        priority: "high" as const,
        category: "Human Resources",
        timeframe: "2 weeks",
        effort: "low" as const,
        impact: "medium" as const,
        action: "Schedule Training",
        resources: [
          { title: "Training Materials", url: "#", type: "training" as const }
        ]
      }
    ];
  } else if (riskScore > 40) {
    return [
      {
        id: "medium-passwords",
        title: "Strengthen Password Policies",
        description: "Implement and enforce strong password requirements across the organization",
        priority: "medium" as const,
        category: "Access Control",
        timeframe: "2-4 weeks",
        effort: "low" as const,
        impact: "medium" as const,
        action: "Update Policies",
        resources: [
          { title: "Password Policy Template", url: "#", type: "guide" as const }
        ]
      },
      {
        id: "medium-backup",
        title: "Automated Backup Solutions",
        description: "Upgrade to automated backup systems with regular testing procedures",
        priority: "medium" as const,
        category: "Data Protection",
        timeframe: "4-6 weeks",
        effort: "medium" as const,
        impact: "high" as const,
        action: "Evaluate Solutions",
        resources: [
          { title: "Backup Solutions Comparison", url: "#", type: "guide" as const }
        ]
      },
      {
        id: "medium-awareness",
        title: "Enhanced Security Awareness",
        description: "Expand cyber security training program with regular updates and testing",
        priority: "medium" as const,
        category: "Training",
        timeframe: "6-8 weeks",
        effort: "medium" as const,
        impact: "medium" as const,
        action: "Plan Training",
        resources: [
          { title: "Security Awareness Program", url: "#", type: "training" as const }
        ]
      }
    ];
  } else {
    return [
      {
        id: "low-assessment",
        title: "Regular Security Assessments",
        description: "Schedule quarterly security assessments to maintain current protection levels",
        priority: "low" as const,
        category: "Monitoring",
        timeframe: "Ongoing",
        effort: "low" as const,
        impact: "medium" as const,
        action: "Schedule Assessment",
        resources: [
          { title: "Assessment Checklist", url: "#", type: "guide" as const }
        ]
      },
      {
        id: "low-detection",
        title: "Advanced Threat Detection",
        description: "Consider implementing advanced threat detection and monitoring solutions",
        priority: "low" as const,
        category: "Monitoring",
        timeframe: "3-6 months",
        effort: "high" as const,
        impact: "medium" as const,
        action: "Research Solutions",
        resources: [
          { title: "Threat Detection Guide", url: "#", type: "guide" as const }
        ]
      },
      {
        id: "low-emerging",
        title: "Emerging Threats Monitoring",
        description: "Establish processes to stay informed about new cyber security threats",
        priority: "low" as const,
        category: "Intelligence",
        timeframe: "Ongoing",
        effort: "low" as const,
        impact: "low" as const,
        action: "Setup Alerts",
        resources: [
          { title: "Threat Intelligence Feeds", url: "#", type: "external" as const }
        ]
      }
    ];
  }
};

const riskCategories: RiskCategory[] = [
  {
    id: "incident-response",
    name: "Incident Response",
    icon: <FileText className="h-5 w-5" />,
    description: "Assess your incident response capabilities and preparedness",
    questions: [
      {
        id: "written_plan",
        question: "Do you have a written incident response plan in place?",
        options: [
          { value: "comprehensive", label: "Yes, comprehensive written plan", risk: 1 },
          { value: "basic", label: "Yes, basic written plan", risk: 2 },
          { value: "informal", label: "Informal procedures only", risk: 4 },
          { value: "no", label: "No written plan", risk: 5 },
        ],
      },
      {
        id: "plan_updated",
        question: "Has your incident response plan been reviewed or updated in the past 12 months?",
        options: [
          { value: "yes", label: "Yes, recently updated", risk: 1 },
          { value: "overdue", label: "Overdue for update", risk: 3 },
          { value: "no", label: "No recent updates", risk: 5 },
        ],
      },
      {
        id: "staff_knowledge",
        question: "Do all staff know what to do if there is a suspected cyber incident?",
        options: [
          { value: "well_trained", label: "Yes, all staff are well-trained", risk: 1 },
          { value: "some_knowledge", label: "Some staff have knowledge", risk: 3 },
          { value: "no", label: "Staff don't know procedures", risk: 5 },
        ],
      },
      {
        id: "designated_team",
        question: "Is there a designated person or team responsible for responding to cyber incidents?",
        options: [
          { value: "dedicated_team", label: "Yes, dedicated incident response team", risk: 1 },
          { value: "designated_person", label: "Yes, designated person", risk: 2 },
          { value: "no", label: "No designated response team", risk: 5 },
        ],
      },
      {
        id: "incident_definition",
        question: "Have you clearly defined what counts as a 'cyber incident' in your business?",
        options: [
          { value: "clear_definition", label: "Yes, clear definitions documented", risk: 1 },
          { value: "basic", label: "Basic understanding exists", risk: 3 },
          { value: "no", label: "No clear definitions", risk: 5 },
        ],
      },
      {
        id: "detection_process",
        question: "Do you have a process to quickly detect suspicious activity on your systems?",
        options: [
          { value: "automated", label: "Yes, automated detection systems", risk: 1 },
          { value: "manual", label: "Manual monitoring processes", risk: 3 },
          { value: "no", label: "No detection processes", risk: 5 },
        ],
      },
      {
        id: "phishing_reporting",
        question: "Are staff trained to report phishing emails or suspicious messages?",
        options: [
          { value: "well_trained", label: "Yes, staff are well-trained", risk: 1 },
          { value: "basic", label: "Basic training provided", risk: 3 },
          { value: "no", label: "No phishing reporting training", risk: 5 },
        ],
      },
      {
        id: "incident_recording",
        question: "Do you record all security incidents, even minor ones?",
        options: [
          { value: "comprehensive", label: "Yes, comprehensive incident logging", risk: 1 },
          { value: "major_only", label: "Only major incidents recorded", risk: 3 },
          { value: "no", label: "No incident recording", risk: 5 },
        ],
      },
      {
        id: "plan_testing",
        question: "Have you tested your incident response plan through a drill or simulation?",
        options: [
          { value: "regular", label: "Yes, regular testing", risk: 1 },
          { value: "occasional", label: "Occasional testing", risk: 3 },
          { value: "no", label: "No plan testing", risk: 5 },
        ],
      },
      {
        id: "contact_list",
        question: "Do you have a list of who to contact (internally and externally) during a cyber incident?",
        options: [
          { value: "comprehensive", label: "Yes, comprehensive contact list", risk: 1 },
          { value: "basic", label: "Basic contact information", risk: 3 },
          { value: "no", label: "No incident contact list", risk: 5 },
        ],
      },
      {
        id: "system_isolation",
        question: "Can you isolate affected systems quickly if there's a breach?",
        options: [
          { value: "rapid", label: "Yes, rapid isolation capabilities", risk: 1 },
          { value: "manual", label: "Manual isolation possible", risk: 3 },
          { value: "no", label: "No isolation capabilities", risk: 5 },
        ],
      },
      {
        id: "ransomware_reporting",
        question: "Do you know the steps required to report a ransomware incident to the Australian Government under the Ransomware Reporting Rules 2025?",
        options: [
          { value: "well_informed", label: "Yes, well-informed on reporting requirements", risk: 1 },
          { value: "basic", label: "Basic knowledge of requirements", risk: 3 },
          { value: "no", label: "No knowledge of reporting requirements", risk: 5 },
        ],
      },
      {
        id: "critical_systems",
        question: "Have you identified which systems or data are most critical to your operations?",
        options: [
          { value: "comprehensive", label: "Yes, comprehensive asset inventory", risk: 1 },
          { value: "basic", label: "Basic identification completed", risk: 3 },
          { value: "no", label: "No critical asset identification", risk: 5 },
        ],
      },
      {
        id: "backup_recovery",
        question: "Are backups included in your recovery plan after a cyber incident?",
        options: [
          { value: "integrated", label: "Yes, fully integrated recovery plan", risk: 1 },
          { value: "basic", label: "Basic backup recovery procedures", risk: 3 },
          { value: "no", label: "No backup recovery plan", risk: 5 },
        ],
      },
      {
        id: "lessons_learned",
        question: "Do you review lessons learned after each incident?",
        options: [
          { value: "systematic", label: "Yes, systematic post-incident reviews", risk: 1 },
          { value: "informal", label: "Informal reviews conducted", risk: 3 },
          { value: "no", label: "No post-incident reviews", risk: 4 },
        ],
      },
      {
        id: "privacy_alignment",
        question: "Is your incident response plan aligned with your Privacy Act obligations?",
        options: [
          { value: "fully_aligned", label: "Yes, fully aligned with Privacy Act", risk: 1 },
          { value: "partially", label: "Partially aligned", risk: 3 },
          { value: "no", label: "No Privacy Act alignment", risk: 5 },
        ],
      },
      {
        id: "activity_logs",
        question: "Do you keep logs of system activity that could help you investigate incidents?",
        options: [
          { value: "comprehensive", label: "Yes, comprehensive logging", risk: 1 },
          { value: "basic", label: "Basic logging in place", risk: 3 },
          { value: "no", label: "No activity logging", risk: 5 },
        ],
      },
      {
        id: "data_breach_notification",
        question: "Are staff aware of who to notify if customer data is exposed?",
        options: [
          { value: "clear_procedures", label: "Yes, clear notification procedures", risk: 1 },
          { value: "basic", label: "Basic awareness exists", risk: 3 },
          { value: "no", label: "No clear notification procedures", risk: 5 },
        ],
      },
      {
        id: "external_support",
        question: "Have you established a relationship with a cybersecurity professional or service provider?",
        options: [
          { value: "established", label: "Yes, established relationship", risk: 1 },
          { value: "identified", label: "Service provider identified", risk: 3 },
          { value: "no", label: "No external cybersecurity support", risk: 4 },
        ],
      },
      {
        id: "business_continuity",
        question: "Can your business continue operating if systems go offline due to an attack?",
        options: [
          { value: "robust_plan", label: "Yes, robust continuity plan", risk: 1 },
          { value: "basic_plan", label: "Basic continuity procedures", risk: 3 },
          { value: "no", label: "No business continuity plan", risk: 5 },
        ],
      },
      {
        id: "credential_changes",
        question: "Are passwords or access credentials changed immediately after an incident?",
        options: [
          { value: "immediate", label: "Yes, immediate credential changes", risk: 1 },
          { value: "delayed", label: "Changes made within reasonable time", risk: 3 },
          { value: "no", label: "No systematic credential changes", risk: 5 },
        ],
      },
      {
        id: "root_cause_analysis",
        question: "Have you ever performed a root cause analysis after a security event?",
        options: [
          { value: "systematic", label: "Yes, systematic root cause analysis", risk: 1 },
          { value: "informal", label: "Informal analysis conducted", risk: 3 },
          { value: "no", label: "No root cause analysis", risk: 4 },
        ],
      },
      {
        id: "reputation_protection",
        question: "Is your plan designed to reduce damage to your brand and reputation?",
        options: [
          { value: "comprehensive", label: "Yes, comprehensive reputation management", risk: 1 },
          { value: "basic", label: "Basic reputation considerations", risk: 3 },
          { value: "no", label: "No reputation protection plan", risk: 4 },
        ],
      },
      {
        id: "customer_communication",
        question: "Do you have a strategy to communicate with customers during or after a breach?",
        options: [
          { value: "detailed_plan", label: "Yes, detailed communication plan", risk: 1 },
          { value: "basic_plan", label: "Basic communication procedures", risk: 3 },
          { value: "no", label: "No customer communication plan", risk: 5 },
        ],
      },
      {
        id: "leadership_notification",
        question: "Are incidents shared with leadership or decision-makers promptly?",
        options: [
          { value: "immediate", label: "Yes, immediate leadership notification", risk: 1 },
          { value: "timely", label: "Timely notification processes", risk: 2 },
          { value: "delayed", label: "Delayed or inconsistent notification", risk: 4 },
          { value: "no", label: "No leadership notification process", risk: 5 },
        ],
      },
    ],
  },
  {
    id: "access",
    name: "Access Management",
    icon: <Lock className="h-5 w-5" />,
    description: "Evaluate user access controls and authentication",
    questions: [
      {
        id: "staff_mfa",
        question: "Do all staff need to use multi-factor authentication when logging into accounts?",
        options: [
          { value: "yes", label: "Yes, all staff use MFA", risk: 1 },
          { value: "some", label: "Some staff use MFA", risk: 3 },
          { value: "no", label: "No, MFA not required", risk: 5 },
        ],
      },
      {
        id: "admin_accounts",
        question: "Are administrator accounts separate from regular staff logins?",
        options: [
          { value: "yes", label: "Yes, admin accounts are separate", risk: 1 },
          { value: "sometimes", label: "Sometimes separate", risk: 3 },
          { value: "no", label: "No, shared with regular accounts", risk: 5 },
        ],
      },
      {
        id: "individual_accounts",
        question: "Does each employee have their own username and password?",
        options: [
          { value: "yes", label: "Yes, individual accounts for all", risk: 1 },
          { value: "mostly", label: "Most employees have individual accounts", risk: 2 },
          { value: "no", label: "No, accounts are shared", risk: 5 },
        ],
      },
      {
        id: "shared_logins",
        question: "Are shared logins avoided wherever possible?",
        options: [
          { value: "yes", label: "Yes, shared logins are avoided", risk: 1 },
          { value: "sometimes", label: "Sometimes avoided", risk: 3 },
          { value: "no", label: "No, shared logins are common", risk: 5 },
        ],
      },
      {
        id: "password_policy",
        question: "Do you have a clear policy for creating strong passwords?",
        options: [
          { value: "yes", label: "Yes, clear policy exists", risk: 1 },
          { value: "basic", label: "Basic guidelines exist", risk: 3 },
          { value: "no", label: "No password policy", risk: 5 },
        ],
      },
      {
        id: "password_enforcement",
        question: "Are staff required to follow that policy when creating passwords?",
        options: [
          { value: "yes", label: "Yes, policy is enforced", risk: 1 },
          { value: "sometimes", label: "Sometimes enforced", risk: 3 },
          { value: "no", label: "No enforcement", risk: 5 },
        ],
      },
      {
        id: "password_managers",
        question: "Are password managers provided or recommended to your team?",
        options: [
          { value: "provided", label: "Password managers are provided", risk: 1 },
          { value: "recommended", label: "Password managers are recommended", risk: 2 },
          { value: "no", label: "No password manager guidance", risk: 4 },
        ],
      },
      {
        id: "access_review",
        question: "Do you regularly check who has access to your systems and files?",
        options: [
          { value: "regular", label: "Yes, regular access reviews", risk: 1 },
          { value: "occasional", label: "Occasional reviews", risk: 3 },
          { value: "no", label: "No regular reviews", risk: 5 },
        ],
      },
      {
        id: "staff_departure",
        question: "When a staff member leaves the business, is their access removed straight away?",
        options: [
          { value: "immediate", label: "Yes, access removed immediately", risk: 1 },
          { value: "delayed", label: "Removed within a few days", risk: 3 },
          { value: "no", label: "No formal process", risk: 5 },
        ],
      },
      {
        id: "cloud_protection",
        question: "Is extra login protection used for cloud systems and sensitive data?",
        options: [
          { value: "yes", label: "Yes, extra protection in place", risk: 1 },
          { value: "some", label: "Some systems have extra protection", risk: 3 },
          { value: "no", label: "No extra protection", risk: 5 },
        ],
      },
      {
        id: "account_lockout",
        question: "Do accounts lock automatically after too many incorrect password attempts?",
        options: [
          { value: "yes", label: "Yes, automatic lockout enabled", risk: 1 },
          { value: "some", label: "Some systems have lockout", risk: 3 },
          { value: "no", label: "No automatic lockout", risk: 5 },
        ],
      },
      {
        id: "session_timeout",
        question: "Are accounts set to log out after a period of no activity?",
        options: [
          { value: "yes", label: "Yes, automatic timeout enabled", risk: 1 },
          { value: "some", label: "Some systems have timeout", risk: 3 },
          { value: "no", label: "No automatic timeout", risk: 4 },
        ],
      },
      {
        id: "admin_access_limited",
        question: "Is access to admin settings limited to only those who really need it?",
        options: [
          { value: "yes", label: "Yes, strictly limited", risk: 1 },
          { value: "mostly", label: "Mostly limited", risk: 2 },
          { value: "no", label: "No, admin access is widespread", risk: 5 },
        ],
      },
      {
        id: "login_tracking",
        question: "Do you track who logs in and out of your systems?",
        options: [
          { value: "yes", label: "Yes, comprehensive logging", risk: 1 },
          { value: "some", label: "Some systems are logged", risk: 3 },
          { value: "no", label: "No login tracking", risk: 4 },
        ],
      },
      {
        id: "privileged_monitoring",
        question: "Are high-level accounts more closely monitored than regular ones?",
        options: [
          { value: "yes", label: "Yes, privileged accounts monitored", risk: 1 },
          { value: "some", label: "Some monitoring in place", risk: 3 },
          { value: "no", label: "No special monitoring", risk: 4 },
        ],
      },
      {
        id: "contractor_access",
        question: "Do contractors or outside suppliers get temporary access with restrictions?",
        options: [
          { value: "yes", label: "Yes, restricted temporary access", risk: 1 },
          { value: "sometimes", label: "Sometimes restricted", risk: 3 },
          { value: "no", label: "No restrictions on external access", risk: 5 },
        ],
      },
      {
        id: "least_privilege",
        question: "Are employees only given access to the files and tools they need for their job?",
        options: [
          { value: "yes", label: "Yes, least privilege principle", risk: 1 },
          { value: "mostly", label: "Mostly follows this principle", risk: 2 },
          { value: "no", label: "No, broad access is common", risk: 5 },
        ],
      },
      {
        id: "access_approval",
        question: "Is new access always approved before being granted?",
        options: [
          { value: "yes", label: "Yes, formal approval process", risk: 1 },
          { value: "sometimes", label: "Sometimes approved", risk: 3 },
          { value: "no", label: "No formal approval process", risk: 5 },
        ],
      },
      {
        id: "access_revalidation",
        question: "Do you check regularly that everyone still needs the access they've been given?",
        options: [
          { value: "regular", label: "Yes, regular revalidation", risk: 1 },
          { value: "occasional", label: "Occasional checks", risk: 3 },
          { value: "no", label: "No revalidation process", risk: 5 },
        ],
      },
      {
        id: "system_accounts",
        question: "Are system accounts used by software regularly reviewed and updated?",
        options: [
          { value: "yes", label: "Yes, regular reviews", risk: 1 },
          { value: "sometimes", label: "Occasional reviews", risk: 3 },
          { value: "no", label: "No regular reviews", risk: 4 },
        ],
      },
      {
        id: "inactive_accounts",
        question: "Are unused accounts removed after a period of inactivity?",
        options: [
          { value: "automatic", label: "Yes, automatic removal", risk: 1 },
          { value: "manual", label: "Manual removal when noticed", risk: 3 },
          { value: "no", label: "No removal process", risk: 5 },
        ],
      },
      {
        id: "location_blocking",
        question: "Do you block or flag login attempts from unknown or unexpected locations?",
        options: [
          { value: "yes", label: "Yes, location-based controls", risk: 1 },
          { value: "some", label: "Some location monitoring", risk: 3 },
          { value: "no", label: "No location-based controls", risk: 4 },
        ],
      },
      {
        id: "access_audits",
        question: "Are access logs included in your regular audits or security reviews?",
        options: [
          { value: "yes", label: "Yes, regular audit inclusion", risk: 1 },
          { value: "sometimes", label: "Sometimes included", risk: 3 },
          { value: "no", label: "No audit of access logs", risk: 4 },
        ],
      },
      {
        id: "password_rotation",
        question: "Are staff required to change their passwords from time to time?",
        options: [
          { value: "regular", label: "Yes, regular password changes", risk: 2 },
          { value: "risk-based", label: "Only when security risk identified", risk: 1 },
          { value: "no", label: "No password rotation policy", risk: 4 },
        ],
      },
      {
        id: "phishing_awareness",
        question: "Do your staff understand how phishing scams could trick them into giving away passwords?",
        options: [
          { value: "trained", label: "Yes, staff are trained on phishing", risk: 1 },
          { value: "basic", label: "Basic awareness exists", risk: 3 },
          { value: "no", label: "No phishing awareness training", risk: 5 },
        ],
      },
    ],
  },
  {
    id: "data",
    name: "Data Protection",
    icon: <Database className="h-5 w-5" />,
    description: "Review data handling and backup procedures",
    questions: [
      {
        id: "data_inventory",
        question: "Do you know what personal or sensitive information your business collects and stores?",
        options: [
          { value: "comprehensive", label: "Yes, comprehensive data inventory", risk: 1 },
          { value: "partial", label: "Partial understanding", risk: 3 },
          { value: "no", label: "No clear understanding", risk: 5 },
        ],
      },
      {
        id: "secure_storage",
        question: "Is sensitive customer or staff data stored securely (e.g. encrypted)?",
        options: [
          { value: "fully_encrypted", label: "Yes, all sensitive data encrypted", risk: 1 },
          { value: "partially_encrypted", label: "Some data encrypted", risk: 3 },
          { value: "no_encryption", label: "No encryption used", risk: 5 },
        ],
      },
      {
        id: "access_control",
        question: "Do you control who can access personal or sensitive data within your business?",
        options: [
          { value: "strict_controls", label: "Yes, strict access controls", risk: 1 },
          { value: "basic_controls", label: "Basic access controls", risk: 3 },
          { value: "no_controls", label: "No access controls", risk: 5 },
        ],
      },
      {
        id: "staff_training",
        question: "Are staff trained to handle personal data responsibly?",
        options: [
          { value: "comprehensive", label: "Yes, comprehensive training", risk: 1 },
          { value: "basic", label: "Basic training provided", risk: 3 },
          { value: "no", label: "No data handling training", risk: 5 },
        ],
      },
      {
        id: "role_based_access",
        question: "Do you limit access to customer data based on job roles?",
        options: [
          { value: "strict_roles", label: "Yes, strict role-based access", risk: 1 },
          { value: "basic_roles", label: "Basic role limitations", risk: 3 },
          { value: "no_roles", label: "No role-based restrictions", risk: 5 },
        ],
      },
      {
        id: "mfa_protection",
        question: "Do you use multi-factor authentication (MFA) to protect data access?",
        options: [
          { value: "enforced", label: "Yes, MFA enforced for data access", risk: 1 },
          { value: "optional", label: "MFA available but optional", risk: 3 },
          { value: "no", label: "No MFA for data access", risk: 5 },
        ],
      },
      {
        id: "database_protection",
        question: "Are your customer databases or spreadsheets protected with strong passwords?",
        options: [
          { value: "strong_protection", label: "Yes, strong password protection", risk: 1 },
          { value: "basic_protection", label: "Basic password protection", risk: 3 },
          { value: "no_protection", label: "No password protection", risk: 5 },
        ],
      },
      {
        id: "secure_locations",
        question: "Is data stored in secure locations, either on-premises or in the cloud?",
        options: [
          { value: "secure_locations", label: "Yes, secure storage locations", risk: 1 },
          { value: "partially_secure", label: "Some secure locations", risk: 3 },
          { value: "insecure", label: "Insecure storage locations", risk: 5 },
        ],
      },
      {
        id: "data_location_awareness",
        question: "Do you know where all your business data is stored?",
        options: [
          { value: "fully_mapped", label: "Yes, all data locations mapped", risk: 1 },
          { value: "partially_mapped", label: "Partially mapped", risk: 3 },
          { value: "unknown", label: "Data locations unknown", risk: 5 },
        ],
      },
      {
        id: "regular_backups",
        question: "Are regular backups made of important business and customer data?",
        options: [
          { value: "automated_regular", label: "Yes, automated regular backups", risk: 1 },
          { value: "manual_regular", label: "Manual regular backups", risk: 2 },
          { value: "irregular", label: "Irregular backups", risk: 4 },
          { value: "no_backups", label: "No regular backups", risk: 5 },
        ],
      },
      {
        id: "backup_security",
        question: "Are your backups stored securely and tested regularly?",
        options: [
          { value: "secure_tested", label: "Yes, secure and regularly tested", risk: 1 },
          { value: "secure_not_tested", label: "Secure but not tested", risk: 3 },
          { value: "insecure", label: "Insecure backup storage", risk: 5 },
        ],
      },
      {
        id: "data_retention",
        question: "Do you have a process for deleting or archiving old data you no longer need?",
        options: [
          { value: "systematic", label: "Yes, systematic retention process", risk: 1 },
          { value: "ad_hoc", label: "Ad-hoc data deletion", risk: 3 },
          { value: "no_process", label: "No data retention process", risk: 4 },
        ],
      },
      {
        id: "breach_notification",
        question: "Do you notify customers if their personal data is involved in a breach?",
        options: [
          { value: "clear_process", label: "Yes, clear notification process", risk: 1 },
          { value: "unclear_process", label: "Unclear notification process", risk: 3 },
          { value: "no_process", label: "No notification process", risk: 5 },
        ],
      },
      {
        id: "overseas_transfer",
        question: "Is any data transferred or stored overseas, and do you check it's protected?",
        options: [
          { value: "verified_protection", label: "Yes, overseas protection verified", risk: 1 },
          { value: "unverified", label: "Overseas storage but unverified", risk: 4 },
          { value: "no_overseas", label: "No overseas data storage", risk: 1 },
        ],
      },
      {
        id: "public_document_privacy",
        question: "Are personal details removed from public documents or reports?",
        options: [
          { value: "systematic_removal", label: "Yes, systematic removal process", risk: 1 },
          { value: "ad_hoc_removal", label: "Ad-hoc removal", risk: 3 },
          { value: "no_removal", label: "No removal process", risk: 5 },
        ],
      },
      {
        id: "regular_review",
        question: "Do you review your data protection practices regularly?",
        options: [
          { value: "regular_reviews", label: "Yes, regular reviews", risk: 1 },
          { value: "occasional_reviews", label: "Occasional reviews", risk: 3 },
          { value: "no_reviews", label: "No regular reviews", risk: 4 },
        ],
      },
      {
        id: "privacy_act_obligations",
        question: "Have you identified your obligations under the Privacy Act 1988?",
        options: [
          { value: "fully_identified", label: "Yes, obligations fully identified", risk: 1 },
          { value: "partially_identified", label: "Partially identified", risk: 3 },
          { value: "not_identified", label: "Obligations not identified", risk: 5 },
        ],
      },
      {
        id: "data_minimization",
        question: "Do you collect only the minimum personal information needed for your services?",
        options: [
          { value: "minimal_collection", label: "Yes, minimal data collection", risk: 1 },
          { value: "some_excess", label: "Collect some unnecessary data", risk: 3 },
          { value: "excessive_collection", label: "Collect excessive data", risk: 5 },
        ],
      },
      {
        id: "third_party_protection",
        question: "Do third-party providers (e.g. software or IT services) follow strong data protection rules?",
        options: [
          { value: "verified_compliance", label: "Yes, verified compliance", risk: 1 },
          { value: "assumed_compliance", label: "Assumed but not verified", risk: 3 },
          { value: "unknown_practices", label: "Unknown third-party practices", risk: 5 },
        ],
      },
      {
        id: "device_security",
        question: "Are devices used by staff (laptops, phones) secured and up to date?",
        options: [
          { value: "fully_secured", label: "Yes, all devices secured and updated", risk: 1 },
          { value: "partially_secured", label: "Some devices secured", risk: 3 },
          { value: "unsecured", label: "Devices not secured", risk: 5 },
        ],
      },
      {
        id: "access_tracking",
        question: "Do you keep track of who accesses or changes personal data?",
        options: [
          { value: "comprehensive_logs", label: "Yes, comprehensive access logs", risk: 1 },
          { value: "basic_logs", label: "Basic access tracking", risk: 3 },
          { value: "no_tracking", label: "No access tracking", risk: 5 },
        ],
      },
      {
        id: "transfer_encryption",
        question: "Is personal data encrypted during transfer (e.g. email, file sharing)?",
        options: [
          { value: "always_encrypted", label: "Yes, always encrypted in transit", risk: 1 },
          { value: "sometimes_encrypted", label: "Sometimes encrypted", risk: 3 },
          { value: "never_encrypted", label: "Never encrypted in transit", risk: 5 },
        ],
      },
      {
        id: "breach_response_plan",
        question: "Do you have a breach response plan specific to data exposure?",
        options: [
          { value: "specific_plan", label: "Yes, specific data breach plan", risk: 1 },
          { value: "general_plan", label: "General incident response plan", risk: 3 },
          { value: "no_plan", label: "No breach response plan", risk: 5 },
        ],
      },
      {
        id: "privacy_notices",
        question: "Do you provide privacy notices to customers when collecting their data?",
        options: [
          { value: "comprehensive_notices", label: "Yes, comprehensive privacy notices", risk: 1 },
          { value: "basic_notices", label: "Basic privacy notices", risk: 3 },
          { value: "no_notices", label: "No privacy notices", risk: 5 },
        ],
      },
      {
        id: "privacy_impact_assessment",
        question: "Have you done a privacy impact assessment for new systems or services?",
        options: [
          { value: "systematic_pia", label: "Yes, systematic privacy impact assessments", risk: 1 },
          { value: "ad_hoc_pia", label: "Ad-hoc assessments", risk: 3 },
          { value: "no_pia", label: "No privacy impact assessments", risk: 4 },
        ],
      },
    ],
  },
  {
    id: "training",
    name: "Staff Training",
    icon: <Users className="h-5 w-5" />,
    description: "Assess cybersecurity awareness and training",
    questions: [
      {
        id: "basic_training_completed",
        question: "Has everyone completed basic cybersecurity training in the past year?",
        options: [
          { value: "yes", label: "Yes, all staff completed training", risk: 1 },
          { value: "most", label: "Most staff completed training", risk: 2 },
          { value: "some", label: "Some staff completed training", risk: 4 },
          { value: "no", label: "No recent training completed", risk: 5 },
        ],
      },
      {
        id: "new_hire_training",
        question: "Do new hires get cybersecurity training when they join the company?",
        options: [
          { value: "yes", label: "Yes, all new hires receive training", risk: 1 },
          { value: "sometimes", label: "Sometimes provided", risk: 3 },
          { value: "no", label: "No formal new hire training", risk: 5 },
        ],
      },
      {
        id: "threat_familiarity",
        question: "Are employees familiar with common cyber threats like phishing, ransomware, and social engineering?",
        options: [
          { value: "well_trained", label: "Yes, well-trained on threats", risk: 1 },
          { value: "basic_knowledge", label: "Basic knowledge exists", risk: 3 },
          { value: "no", label: "No threat awareness training", risk: 5 },
        ],
      },
      {
        id: "reporting_knowledge",
        question: "Do staff know how to report suspicious emails or activities?",
        options: [
          { value: "clear_process", label: "Yes, clear reporting process", risk: 1 },
          { value: "some_knowledge", label: "Some knowledge of reporting", risk: 3 },
          { value: "no", label: "No clear reporting process", risk: 5 },
        ],
      },
      {
        id: "security_reminders",
        question: "Do we use posters, reminders, or internal campaigns to keep cybersecurity top of mind?",
        options: [
          { value: "regular", label: "Yes, regular reminders and campaigns", risk: 1 },
          { value: "occasional", label: "Occasional reminders", risk: 3 },
          { value: "no", label: "No ongoing awareness campaigns", risk: 4 },
        ],
      },
      {
        id: "phishing_training",
        question: "Have employees been trained to spot and handle phishing emails?",
        options: [
          { value: "comprehensive", label: "Yes, comprehensive phishing training", risk: 1 },
          { value: "basic", label: "Basic phishing awareness", risk: 3 },
          { value: "no", label: "No phishing training", risk: 5 },
        ],
      },
      {
        id: "social_engineering_awareness",
        question: "Do staff understand what social engineering is and how to avoid falling for it?",
        options: [
          { value: "well_trained", label: "Yes, well-trained on social engineering", risk: 1 },
          { value: "basic", label: "Basic understanding", risk: 3 },
          { value: "no", label: "No social engineering training", risk: 5 },
        ],
      },
      {
        id: "phishing_simulations",
        question: "Do we run phishing simulations or tests at least once a year?",
        options: [
          { value: "regular", label: "Yes, regular simulations", risk: 1 },
          { value: "annual", label: "Annual simulations", risk: 2 },
          { value: "no", label: "No phishing simulations", risk: 4 },
        ],
      },
      {
        id: "password_training",
        question: "Have employees been taught how to create and manage strong passwords?",
        options: [
          { value: "comprehensive", label: "Yes, comprehensive password training", risk: 1 },
          { value: "basic", label: "Basic password guidance", risk: 3 },
          { value: "no", label: "No password training", risk: 5 },
        ],
      },
      {
        id: "password_privacy",
        question: "Do staff understand the importance of keeping passwords and login details private?",
        options: [
          { value: "yes", label: "Yes, staff understand password privacy", risk: 1 },
          { value: "mostly", label: "Most staff understand", risk: 2 },
          { value: "no", label: "No password privacy training", risk: 5 },
        ],
      },
      {
        id: "mfa_training",
        question: "Are employees familiar with multi-factor authentication (MFA) and how to use it?",
        options: [
          { value: "well_trained", label: "Yes, well-trained on MFA", risk: 1 },
          { value: "basic", label: "Basic MFA knowledge", risk: 3 },
          { value: "no", label: "No MFA training", risk: 5 },
        ],
      },
      {
        id: "data_handling_training",
        question: "Have employees been trained on how to handle personal or sensitive data securely?",
        options: [
          { value: "comprehensive", label: "Yes, comprehensive data handling training", risk: 1 },
          { value: "basic", label: "Basic data handling guidance", risk: 3 },
          { value: "no", label: "No data handling training", risk: 5 },
        ],
      },
      {
        id: "privacy_act_awareness",
        question: "Do staff understand their responsibilities under the Privacy Act 1988?",
        options: [
          { value: "well_trained", label: "Yes, well-trained on Privacy Act", risk: 1 },
          { value: "basic", label: "Basic understanding", risk: 3 },
          { value: "no", label: "No Privacy Act training", risk: 5 },
        ],
      },
      {
        id: "secure_storage_sharing",
        question: "Are employees aware of secure ways to store and share data (e.g., avoiding USB drives or personal email)?",
        options: [
          { value: "well_trained", label: "Yes, well-trained on secure practices", risk: 1 },
          { value: "basic", label: "Basic understanding", risk: 3 },
          { value: "no", label: "No secure storage/sharing training", risk: 5 },
        ],
      },
      {
        id: "incident_response_training",
        question: "Do employees know how to respond if they suspect a cyber incident?",
        options: [
          { value: "clear_procedures", label: "Yes, clear incident response procedures", risk: 1 },
          { value: "basic", label: "Basic incident awareness", risk: 3 },
          { value: "no", label: "No incident response training", risk: 5 },
        ],
      },
      {
        id: "breach_contact_knowledge",
        question: "Are staff clear on who to contact if they think there's been a data breach or cyberattack?",
        options: [
          { value: "clear", label: "Yes, clear contact procedures", risk: 1 },
          { value: "somewhat", label: "Somewhat clear", risk: 3 },
          { value: "no", label: "No clear contact procedures", risk: 5 },
        ],
      },
      {
        id: "incident_procedures",
        question: "Do we have clear, easy-to-follow procedures in place for dealing with a cyber incident?",
        options: [
          { value: "comprehensive", label: "Yes, comprehensive procedures", risk: 1 },
          { value: "basic", label: "Basic procedures exist", risk: 3 },
          { value: "no", label: "No formal procedures", risk: 5 },
        ],
      },
      {
        id: "safe_browsing_training",
        question: "Have employees been educated on safe internet browsing and how to avoid risky websites?",
        options: [
          { value: "comprehensive", label: "Yes, comprehensive browsing safety training", risk: 1 },
          { value: "basic", label: "Basic browsing guidance", risk: 3 },
          { value: "no", label: "No safe browsing training", risk: 5 },
        ],
      },
      {
        id: "public_wifi_awareness",
        question: "Do staff understand the risks of using public Wi-Fi for work tasks?",
        options: [
          { value: "well_aware", label: "Yes, well-aware of public Wi-Fi risks", risk: 1 },
          { value: "basic", label: "Basic understanding", risk: 3 },
          { value: "no", label: "No public Wi-Fi risk training", risk: 5 },
        ],
      },
      {
        id: "byod_awareness",
        question: "Are employees aware of company rules about using personal devices for work (BYOD)?",
        options: [
          { value: "clear_policy", label: "Yes, clear BYOD policy and training", risk: 1 },
          { value: "basic", label: "Basic BYOD awareness", risk: 3 },
          { value: "no", label: "No BYOD policy or training", risk: 5 },
        ],
      },
      {
        id: "training_refresh",
        question: "Do we refresh or update cybersecurity training at least once a year?",
        options: [
          { value: "regular", label: "Yes, regular training updates", risk: 1 },
          { value: "annual", label: "Annual training refresh", risk: 2 },
          { value: "no", label: "No regular training updates", risk: 4 },
        ],
      },
      {
        id: "ongoing_awareness",
        question: "Are employees encouraged to stay up to date with the latest security threats and best practices?",
        options: [
          { value: "actively", label: "Yes, actively encouraged", risk: 1 },
          { value: "sometimes", label: "Sometimes encouraged", risk: 3 },
          { value: "no", label: "No ongoing encouragement", risk: 4 },
        ],
      },
      {
        id: "leadership_support",
        question: "Does leadership actively support and promote a culture of security awareness?",
        options: [
          { value: "strong", label: "Yes, strong leadership support", risk: 1 },
          { value: "moderate", label: "Moderate leadership support", risk: 3 },
          { value: "no", label: "No leadership support", risk: 5 },
        ],
      },
      {
        id: "policy_acknowledgment",
        question: "Have all staff read and acknowledged the company's cybersecurity policies?",
        options: [
          { value: "all", label: "Yes, all staff have acknowledged", risk: 1 },
          { value: "most", label: "Most staff have acknowledged", risk: 2 },
          { value: "some", label: "Some staff have acknowledged", risk: 4 },
          { value: "no", label: "No formal acknowledgment process", risk: 5 },
        ],
      },
      {
        id: "policy_testing",
        question: "Do we test or quiz employees to make sure they understand the company's cybersecurity policies?",
        options: [
          { value: "regular", label: "Yes, regular testing", risk: 1 },
          { value: "occasional", label: "Occasional testing", risk: 3 },
          { value: "no", label: "No policy testing", risk: 4 },
        ],
      },
    ],
  },
];

export function RiskToolPage() {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateRiskScore = () => {
    let totalRisk = 0;
    let totalQuestions = 0;

    riskCategories.forEach(category => {
      category.questions.forEach(question => {
        const answer = answers[question.id];
        if (answer) {
          const option = question.options.find(opt => opt.value === answer);
          if (option) {
            totalRisk += option.risk;
            totalQuestions++;
          }
        }
      });
    });

    return totalQuestions > 0 ? Math.round((totalRisk / (totalQuestions * 5)) * 100) : 0;
  };

  const getRiskLevel = (score: number) => {
    if (score <= 20) return { level: "Low", color: "bg-green-500", textColor: "text-green-700" };
    if (score <= 40) return { level: "Medium", color: "bg-yellow-500", textColor: "text-yellow-700" };
    if (score <= 60) return { level: "High", color: "bg-orange-500", textColor: "text-orange-700" };
    return { level: "Critical", color: "bg-red-500", textColor: "text-red-700" };
  };

  const allQuestionsAnswered = riskCategories.every(category =>
    category.questions.every(question => answers[question.id])
  );

  if (showResults) {
    const riskScore = calculateRiskScore();
    const riskLevel = getRiskLevel(riskScore);

    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl text-gray-900 mb-4">Risk Assessment Results</h1>
          <p className="text-gray-600">Your cybersecurity risk analysis is complete</p>
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
              Based on your responses, your organization has a {riskLevel.level.toLowerCase()} cybersecurity risk profile.
            </p>
          </CardContent>
        </Card>

        {/* Detailed Recommendations */}
        <div className="mb-8">
          <RecommendationsSection
            title="Personalized Security Recommendations"
            subtitle="Based on your risk assessment, here are specific actions to improve your cybersecurity posture"
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
          <Button className="bg-gray-900 hover:bg-gray-800 text-white">
            Download Report
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl text-gray-900 mb-4">Cyber security Risk Assessment</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Evaluate your organization's cybersecurity posture across key risk areas. Complete all sections to receive a comprehensive risk score and recommendations.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Category Sidebar */}
        <div className="lg:col-span-1">
          <h2 className="text-lg text-gray-900 mb-4">Assessment Categories</h2>
          <div className="space-y-2">
            {riskCategories.map((category, index) => {
              const isCompleted = category.questions.every(q => answers[q.id]);
              const isCurrent = index === currentCategory;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setCurrentCategory(index)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    isCurrent 
                      ? 'border-gray-900 bg-gray-50' 
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded ${isCompleted ? 'bg-green-100' : 'bg-gray-100'}`}>
                      {category.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">{category.name}</div>
                      {isCompleted && (
                        <div className="text-xs text-green-600">Completed</div>
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
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-gray-100 rounded">
                  {riskCategories[currentCategory].icon}
                </div>
                <div>
                  <CardTitle>{riskCategories[currentCategory].name}</CardTitle>
                  <CardDescription>{riskCategories[currentCategory].description}</CardDescription>
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
                    <h3 className="text-lg text-gray-900">{question.question}</h3>
                    <Badge variant="outline" className="text-xs">Required</Badge>
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
                            ${isSelected 
                              ? 'border-gray-900 bg-gray-50 shadow-sm' 
                              : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                            }
                          `}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className={`text-base mb-1 ${isSelected ? 'text-gray-900' : 'text-gray-700'}`}>
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
                                        ? 'bg-green-400' 
                                        : option.risk === 3 
                                        ? 'bg-yellow-400' 
                                        : 'bg-red-400'
                                      : 'bg-gray-200'
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
              onClick={() => setCurrentCategory(Math.max(0, currentCategory - 1))}
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
                onClick={() => setCurrentCategory(Math.min(riskCategories.length - 1, currentCategory + 1))}
                className="bg-gray-900 hover:bg-gray-800 text-white"
              >
                Next
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}