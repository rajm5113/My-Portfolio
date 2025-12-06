
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Users, Lightbulb } from "lucide-react";

export const Biography = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "PW IOI Institute of Innovation - School of Management in Entrepreneurship & Technology"
    },
    {
      icon: Award,
      title: "Certifications",
      description: "Specialized courses from Google, IBM, University of Michigan through Coursera"
    },
    {
      icon: Users,
      title: "Hackathons",
      description: "Multiple participations at PW IOI and PW IOI with AWS events"
    },
    {
      icon: Lightbulb,
      title: "Projects",
      description: "Capstone projects and numerous GitHub repositories showcasing technical skills"
    }
  ];

  return (
    <section id="biography" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light gradient-text mb-4">
            Biography
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm Raj Mishra, a graduate from PW IOI Institute of Innovation, where I completed my studies 
              in the School of Management in Entrepreneurship & Technology. I have successfully completed 
              my 1st year at PW IOI and earned my Bachelor of Science degree, building a strong foundation 
              in both technical skills and business acumen.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My primary areas of interest span across Technology - particularly AI/ML and Data Science - 
              and Business domains including entrepreneurship, management, and critical thinking. I actively 
              pursue knowledge through specialized courses from industry leaders like Google, IBM, and the 
              University of Michigan via Coursera.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Throughout my academic journey, I was actively involved in hackathons at PW IOI and collaborative 
              events with AWS, working on capstone projects and building a robust portfolio on GitHub. 
              My goal is to bridge the gap between cutting-edge technology and innovative business solutions.
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
