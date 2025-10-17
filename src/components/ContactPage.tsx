import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <Card className="max-w-md w-full text-center">
          <CardContent className="pt-12 pb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl text-gray-900 mb-4">Message Sent Successfully!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for contacting CyberWise Core. We'll get back to you within 24 hours.
            </p>
            <Button 
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  company: "",
                  subject: "",
                  message: "",
                  inquiryType: ""
                });
              }}
              className="bg-gray-900 hover:bg-gray-800 text-white"
            >
              Send Another Message
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about Cybersecurity compliance? Need help with our tools? 
              Our team of experts is here to help your business stay secure.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Mail className="h-8 w-8 text-gray-700 mx-auto mb-3" />
                <h3 className="text-lg text-gray-900 mb-2">Email Us</h3>
                <p className="text-sm text-gray-600 mb-2">support@cyberwisecore.com.au</p>
                <p className="text-xs text-gray-500">Response within 24 hours</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Phone className="h-8 w-8 text-gray-700 mx-auto mb-3" />
                <h3 className="text-lg text-gray-900 mb-2">Call Us</h3>
                <p className="text-sm text-gray-600 mb-2">1800 CYBER WISE</p>
                <p className="text-xs text-gray-500">Mon-Fri, 9AM-5PM AEST</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <MapPin className="h-8 w-8 text-gray-700 mx-auto mb-3" />
                <h3 className="text-lg text-gray-900 mb-2">Visit Us</h3>
                <p className="text-sm text-gray-600 mb-2">Sydney, NSW</p>
                <p className="text-xs text-gray-500">By appointment only</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Clock className="h-8 w-8 text-gray-700 mx-auto mb-3" />
                <h3 className="text-lg text-gray-900 mb-2">Support Hours</h3>
                <p className="text-sm text-gray-600 mb-2">24/7 Emergency</p>
                <p className="text-xs text-gray-500">For security incidents</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Enter your company name (optional)"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiryType">Inquiry Type *</Label>
                  <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Information</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="compliance">Compliance Guidance</SelectItem>
                      <SelectItem value="training">Training & Education</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                      <SelectItem value="emergency">Security Emergency</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Brief description of your inquiry"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Please provide details about your inquiry, including your current Cybersecurity challenges or questions..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending Message...
                    </div>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Information */}
            <div>
              <h2 className="text-3xl text-gray-900 mb-6">How We Can Help</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl text-gray-900 mb-3">Compliance Guidance</h3>
                  <p className="text-gray-600 mb-3">
                    Get expert advice on Australian Cybersecurity regulations including the Privacy Act 1988, 
                    Cybersecurity Act 2024, and ACSC Essential Eight implementation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Privacy Act 1988</Badge>
                    <Badge variant="outline">Cybersecurity Act 2024</Badge>
                    <Badge variant="outline">Essential Eight</Badge>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl text-gray-900 mb-3">Technical Support</h3>
                  <p className="text-gray-600 mb-3">
                    Need help using our risk assessment tools or compliance checklists? 
                    Our technical team can guide you through the process.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Risk Assessment</Badge>
                    <Badge variant="outline">Compliance Tools</Badge>
                    <Badge variant="outline">Report Generation</Badge>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl text-gray-900 mb-3">Emergency Response</h3>
                  <p className="text-gray-600 mb-3">
                    Experiencing a Cybersecurity incident? Contact our emergency response team 
                    for immediate assistance with containment and reporting.
                  </p>
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-800">
                      <strong>Security Emergency:</strong> Call 1800 CYBER WISE and select option 1 
                      for immediate incident response support.
                    </p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl text-gray-900 mb-3">Training & Education</h3>
                  <p className="text-gray-600">
                    Interested in Cybersecurity training for your team? We offer customized 
                    training programs tailored to your industry and compliance requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}