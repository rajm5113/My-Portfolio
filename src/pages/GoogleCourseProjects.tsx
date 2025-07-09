import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

export const GoogleCourseProjects = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-light gradient-text mb-4">
              Google Course Projects
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore my projects and achievements from Google's professional certification programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Google Data Analytics Project */}
            <Card className="gradient-hover-bg border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  Google Data Analytics Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => toggleSection("analytics")}
                  className="w-full justify-between bg-blue-600 hover:bg-blue-700 text-white"
                >
                  View Projects
                  {expandedSection === "analytics" ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </Button>
                
                {expandedSection === "analytics" && (
                  <div className="mt-4 space-y-3 animate-fade-in">
                    <Button
                      onClick={() => window.open("https://docs.google.com/spreadsheets/d/1E3BhM77v7loZCfRfI_uGq0cpYaSd9slfjmeNsdFV8u0/edit?usp=sharing", "_blank")}
                      className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2"
                    >
                      Data Visualisation Project
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Google Digital Marketing Projects */}
            <Card className="gradient-hover-bg border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  Google Digital Marketing Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => toggleSection("marketing")}
                  className="w-full justify-between bg-purple-600 hover:bg-purple-700 text-white"
                >
                  View Projects
                  {expandedSection === "marketing" ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </Button>
                
                {expandedSection === "marketing" && (
                  <div className="mt-4 space-y-3 animate-fade-in">
                    <div className="p-4 bg-gray-50 rounded-lg text-center">
                      <p className="text-gray-600">
                        Marketing projects will be added here soon!
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GoogleCourseProjects;