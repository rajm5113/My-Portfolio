
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Users, Lightbulb } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "PW IOI Institute of Innovation - Entrepreneurship, Management & Technology"
    },
    {
      icon: Award,
      title: "Certifications",
      description: "Specialized courses from Google, IBM, Microsoft, and other leading companies"
    },
    {
      icon: Users,
      title: "Hackathons",
      description: "Participated in multiple hackathons with innovative solutions"
    },
    {
      icon: Lightbulb,
      title: "Projects",
      description: "Developed numerous projects showcasing technical and entrepreneurial skills"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light gradient-text mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate student at PW IOI Institute of Innovation, where I'm pursuing studies in 
              Entrepreneurship, Management, and Technology. My journey extends beyond traditional academics 
              as I actively audit lectures and complete specialized courses from industry leaders like 
              Google, IBM, and Microsoft through Coursera.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With a strong foundation in both technical skills and business acumen, I've participated 
              in multiple hackathons and developed numerous projects that showcase my ability to innovate 
              and solve real-world problems. I'm constantly learning and applying new technologies to 
              create meaningful solutions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My goal is to bridge the gap between technology and business, creating innovative solutions 
              that make a positive impact on society while building sustainable and scalable ventures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                  <p className="text-sm text-gray-600">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
