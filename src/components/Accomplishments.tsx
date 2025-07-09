
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Star, Target, Zap, Award, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Accomplishments = () => {
  const navigate = useNavigate();
  const accomplishments = [
    {
      icon: Trophy,
      title: "Multiple Hackathon Participation",
      description: "Active participant in PW IOI hackathons and AWS collaborative events",
      year: "2024"
    },
    {
      icon: Star,
      title: "Google Certifications",
      description: "Data Analyst and Digital Marketing Professional Certificates",
      year: "2024",
      clickable: true
    },
    {
      icon: Award,
      title: "University of Michigan",
      description: "Web Design for Everybody & Python for Everybody Specializations",
      year: "2024"
    },
    {
      icon: BookOpen,
      title: "IBM AI Developer",
      description: "Currently pursuing AI Developer Professional Certificate",
      year: "2024"
    },
    {
      icon: Target,
      title: "Capstone Projects",
      description: "Successfully working on multiple capstone projects from Coursera",
      year: "2024"
    },
    {
      icon: Zap,
      title: "GitHub Portfolio",
      description: "Extensive collection of projects showcasing technical skills",
      year: "2024"
    }
  ];

  return (
    <section id="accomplishments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light gradient-text mb-4">
            Accomplishments
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my achievements, certifications, and recognition received throughout my learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accomplishments.map((accomplishment, index) => (
            <Card 
              key={index} 
              className={`gradient-hover-bg border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                accomplishment.clickable ? 'cursor-pointer' : ''
              }`}
              onClick={accomplishment.clickable ? () => navigate('/google-course-projects') : undefined}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <accomplishment.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-2">
                  {accomplishment.year}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                  {accomplishment.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {accomplishment.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
