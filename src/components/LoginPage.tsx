import React from 'react';
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Shield, User, UserCheck, Eye, EyeOff, ArrowLeft } from "lucide-react";

interface LoginPageProps {
  onLogin: (userType: "business" | "admin", userData: any) => void;
}

type LoginMode = "select" | "business" | "admin";

export function LoginPage({ onLogin }: LoginPageProps) {
  const [mode, setMode] = useState<LoginMode>("select");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    companyName: "",
    adminId: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLogin = async (userType: "business" | "admin") => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const userData = userType === "business" 
        ? {
            email: formData.email,
            companyName: formData.companyName,
            userType: "business",
            permissions: ["risk-assessment", "compliance-checklist", "resources"]
          }
        : {
            email: formData.email,
            adminId: formData.adminId,
            userType: "admin",
            permissions: ["all-access", "user-management", "system-settings"]
          };
      
      onLogin(userType, userData);
      setIsLoading(false);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
      companyName: "",
      adminId: ""
    });
    setShowPassword(false);
  };

  const goBack = () => {
    setMode("select");
    resetForm();
  };

  if (mode === "select") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-3xl text-gray-900 mb-2">Welcome to CyberWise Core</h1>
            <p className="text-gray-600">Choose your account type to continue</p>
          </div>

          {/* Login Options */}
          <div className="space-y-4">
            <Card 
              className="cursor-pointer hover:shadow-md transition-shadow border-2 hover:border-gray-300"
              onClick={() => setMode("business")}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Business Owner</CardTitle>
                <CardDescription>
                  Access compliance tools, risk assessments, and resources for your organization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline" className="text-xs">Risk Assessment</Badge>
                  <Badge variant="outline" className="text-xs">Compliance Checklist</Badge>
                  <Badge variant="outline" className="text-xs">Resources</Badge>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="cursor-pointer hover:shadow-md transition-shadow border-2 hover:border-gray-300"
              onClick={() => setMode("admin")}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Admin Staff Member</CardTitle>
                <CardDescription>
                  Administrative access to manage compliance programs and user accounts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline" className="text-xs">User Management</Badge>
                  <Badge variant="outline" className="text-xs">System Settings</Badge>
                  <Badge variant="outline" className="text-xs">Full Access</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Demo Notice */}
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800 text-center">
              <strong>Demo Mode:</strong> Use any email and password to access the platform
            </p>
          </div>
        </div>
      </div>
    );
  }

  const isBusinessLogin = mode === "business";
  const cardIcon = isBusinessLogin ? User : UserCheck;
  const cardTitle = isBusinessLogin ? "Business Owner Login" : "Admin Staff Login";
  const cardDescription = isBusinessLogin 
    ? "Sign in to access your organization's Cybersecurity tools"
    : "Sign in to access administrative functions";

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={goBack}
          className="mb-6 p-2 hover:bg-gray-100"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to options
        </Button>

        {/* Login Form */}
        <Card>
          <CardHeader className="text-center">
            <div className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 ${
              isBusinessLogin ? 'bg-blue-100' : 'bg-green-100'
            }`}>
              {React.createElement(cardIcon, { 
                className: `h-8 w-8 ${isBusinessLogin ? 'text-blue-600' : 'text-green-600'}` 
              })}
            </div>
            <CardTitle className="text-2xl">{cardTitle}</CardTitle>
            <CardDescription>{cardDescription}</CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleLogin(isBusinessLogin ? "business" : "admin");
            }}>
              <div className="space-y-4">
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                {/* Business-specific fields */}
                {isBusinessLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Enter your company name"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
                      required
                    />
                  </div>
                )}

                {/* Admin-specific fields */}
                {!isBusinessLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="adminId">Admin ID</Label>
                    <Input
                      id="adminId"
                      type="text"
                      placeholder="Enter your admin ID"
                      value={formData.adminId}
                      onChange={(e) => handleInputChange("adminId", e.target.value)}
                      required
                    />
                  </div>
                )}

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-500" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Login Button */}
                <Button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Signing in...
                    </div>
                  ) : (
                    `Sign in as ${isBusinessLogin ? 'Business Owner' : 'Admin'}`
                  )}
                </Button>
              </div>
            </form>

            <Separator className="my-6" />

            {/* Help Text */}
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-600">
                Need help accessing your account?
              </p>
              <Button variant="link" className="text-sm text-blue-600 hover:text-blue-800">
                Contact Support
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Demo Instructions */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="text-sm text-blue-900 mb-2">Demo Login Instructions:</h4>
          <div className="space-y-1 text-xs text-blue-800">
            <p><strong>Business Owner:</strong> Any email + company name</p>
            <p><strong>Admin Staff:</strong> Any email + admin ID</p>
            <p>Password: Any value will work</p>
          </div>
        </div>
      </div>
    </div>
  );
}