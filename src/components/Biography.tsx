
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Users, Lightbulb } from "lucide-react";

export const Biography = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Manipal University Jaipur - Master of Computer Applications (MCA)"
    },
    {
      icon: Award,
      title: "Bootcamp",
      description: "PW Institute of Innovation - Entrepreneurship & Technology Bootcamp"
    },
    {
      icon: Lightbulb,
      title: "Certifications",
      description: "Specialized courses from Google, IBM, University of Michigan via Coursera"
    },
    {
      icon: Users,
      title: "Hackathons & Projects",
      description: "Active participant in AWS events and builder of a robust technical portfolio"
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
              I'm Raj Mishra, currently pursuing my Master of Computer Applications (MCA) at Manipal University Jaipur. 
              My academic foundation is built upon a Bachelor of Science from Dr. B.R. Ambedkar University, 
              complemented by an intensive Entrepreneurship & Technology bootcamp at the PW Institute of Innovation. 
              This diverse educational path has given me a unique blend of deep technical expertise and strong business acumen.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My primary focus lies at the intersection of innovative technology and problem-solving—particularly within 
              Data Science, AI/ML, and software development. I am deeply passionate about continuously expanding my knowledge 
              and stay ahead of the curve through specialized certifications from industry leaders like Google, IBM, 
              and the University of Michigan.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Throughout my journey, I have actively participated in hackathons and AWS collaborative events, 
              developing capstone projects and maintaining a robust portfolio on GitHub. My ultimate goal is to leverage 
              my comprehensive background to bridge the gap between cutting-edge technical capabilities and scalable, 
              real-world business solutions.
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
