
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, BarChart, Lightbulb } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Technical Skills",
      skills: [
        "Python", "Web Development", "HTML/CSS", "JavaScript", 
        "AI/ML", "Data Science", "Data Analysis", "Git", "GitHub"
      ]
    },
    {
      icon: Palette,
      title: "Design & Development",
      skills: [
        "Web Design", "Responsive Design", "UI/UX Basics", 
        "Frontend Development", "Project Development"
      ]
    },
    {
      icon: BarChart,
      title: "Business & Analytics",
      skills: [
        "Data Analysis", "Digital Marketing", "Business Strategy", 
        "Entrepreneurship", "Project Management", "Critical Thinking"
      ]
    },
    {
      icon: Lightbulb,
      title: "Soft Skills",
      skills: [
        "Leadership", "Problem Solving", "Innovation", 
        "Team Collaboration", "Adaptability", "Management"
      ]
    }
  ];

  const certifications = [
    {
      name: "Web Design for Everybody",
      issuer: "University of Michigan",
      year: "2024"
    },
    {
      name: "Python for Everybody",
      issuer: "University of Michigan", 
      year: "2024"
    },
    {
      name: "Data Analyst Certificate",
      issuer: "Google",
      year: "2024"
    },
    {
      name: "Digital Marketing",
      issuer: "Google",
      year: "2024"
    },
    {
      name: "AI Developer Course",
      issuer: "IBM (Pursuing)",
      year: "2024"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light gradient-text mb-4">
            Skills & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-light gradient-warmup mb-8 text-center">Technical Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="gradient-hover-bg border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <category.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-light gradient-warmup mb-8 text-center">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="gradient-hover-bg border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-sm text-gray-600 mb-1">{cert.issuer}</p>
                  <p className="text-xs text-gray-500">{cert.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
