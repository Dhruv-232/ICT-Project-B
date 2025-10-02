import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Shield, Users, FileCheck, Target, CheckCircle, ArrowRight } from "lucide-react";

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-8">
              <Shield className="h-10 w-10 text-gray-700" />
            </div>
            <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">
              About CyberWise Core
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're dedicated to helping small and medium enterprises (SMEs) navigate the complex landscape of cybersecurity compliance with Australian government requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Making government cybersecurity compliance accessible, understandable, and achievable for every Australian SME.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-gray-700" />
                </div>
                <CardTitle>SME-Focused</CardTitle>
                <CardDescription>
                  Specifically designed for the unique challenges and resource constraints of small and medium enterprises.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="h-8 w-8 text-gray-700" />
                </div>
                <CardTitle>Government Aligned</CardTitle>
                <CardDescription>
                  Our checklists and assessments are directly aligned with Australian government cybersecurity frameworks and regulations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-gray-700" />
                </div>
                <CardTitle>Practical Solutions</CardTitle>
                <CardDescription>
                  We provide actionable guidance and tools that SMEs can implement regardless of their technical expertise or budget.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-gray-900 mb-4">How We Help SMEs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              CyberWise Core bridges the gap between complex government cybersecurity requirements and practical SME implementation.
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-2">
                <CheckCircle className="h-6 w-6 text-gray-700" />
              </div>
              <div>
                <h3 className="text-xl text-gray-900 mb-3">Simplified Compliance Tracking</h3>
                <p className="text-gray-600 mb-4">
                  Our interactive checklists break down complex government frameworks like the Privacy Act 1988, 
                  Cybersecurity Act 2024, ACSC Essential Eight, and Ransomware Reporting Rules into manageable, 
                  actionable items that SMEs can understand and implement.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Privacy Act 1988</Badge>
                  <Badge variant="outline">Cybersecurity Act 2024</Badge>
                  <Badge variant="outline">ACSC Essential Eight</Badge>
                  <Badge variant="outline">Ransomware Reporting</Badge>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-2">
                <Target className="h-6 w-6 text-gray-700" />
              </div>
              <div>
                <h3 className="text-xl text-gray-900 mb-3">Risk Assessment & Mitigation</h3>
                <p className="text-gray-600 mb-4">
                  Our comprehensive risk assessment tool evaluates your organization's cybersecurity posture 
                  across key areas including IT infrastructure, access management, data protection, and staff training. 
                  We provide tailored recommendations that align with government best practices while being practical for SME budgets.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-2">
                <FileCheck className="h-6 w-6 text-gray-700" />
              </div>
              <div>
                <h3 className="text-xl text-gray-900 mb-3">Audit-Ready Documentation</h3>
                <p className="text-gray-600 mb-4">
                  Generate comprehensive compliance reports that demonstrate your adherence to government cybersecurity 
                  requirements. Our reports are designed to meet audit standards and can be easily shared with 
                  regulators, insurers, or business partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SMEs Choose Us Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-gray-900 mb-4">Why SMEs Choose CyberWise Core</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg text-gray-900 mb-2">No Technical Expertise Required</h4>
                  <p className="text-gray-600">
                    Our tools are designed for business owners and managers, not IT specialists. 
                    Plain language explanations make complex cybersecurity concepts accessible.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg text-gray-900 mb-2">Cost-Effective Compliance</h4>
                  <p className="text-gray-600">
                    Avoid expensive consultancy fees. Our platform provides the same level of guidance 
                    at a fraction of the cost of traditional compliance services.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg text-gray-900 mb-2">Always Up-to-Date</h4>
                  <p className="text-gray-600">
                    Government requirements change regularly. Our platform is continuously updated 
                    to reflect the latest regulations and best practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg text-gray-900 mb-2">Sector-Specific Guidance</h4>
                  <p className="text-gray-600">
                    Different industries have different requirements. Our platform adapts to show 
                    only the compliance items relevant to your specific sector and business size.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg text-gray-900 mb-2">Progress Tracking</h4>
                  <p className="text-gray-600">
                    Monitor your compliance journey with visual progress indicators and detailed 
                    reporting that shows exactly what you've accomplished and what remains.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg text-gray-900 mb-2">Risk Prioritization</h4>
                  <p className="text-gray-600">
                    Not all security measures are equally important. We help you prioritize 
                    actions based on your specific risk profile and regulatory requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-gray-900 mb-4">Ready to Secure Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of Australian SMEs who are already using CyberWise Core to meet 
            their government cybersecurity compliance requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3"
              onClick={() => onNavigate("risk-tool")}
            >
              Start Risk Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-gray-700 border-gray-300 hover:bg-gray-50 px-8 py-3"
              onClick={() => onNavigate("compliance")}
            >
              View Compliance Checklist
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}