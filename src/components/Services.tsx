import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, BarChart, Lightbulb, Users, Zap } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack web applications using modern technologies like React, Node.js, and cloud platforms",
      features: ["Responsive Design", "API Integration", "Database Design", "Performance Optimization"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications with native performance and user experience",
      features: ["React Native", "iOS & Android", "API Integration", "App Store Deployment"]
    },
    {
      icon: BarChart,
      title: "Data Analytics",
      description: "Business intelligence solutions and data visualization to drive informed decisions",
      features: ["Data Visualization", "Business Intelligence", "Statistical Analysis", "Reporting"]
    },
    {
      icon: Lightbulb,
      title: "Innovation Consulting",
      description: "Strategic guidance for digital transformation and technology adoption",
      features: ["Technology Strategy", "Digital Transformation", "Process Optimization", "Innovation Workshops"]
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Leading development teams and managing technical projects from concept to deployment",
      features: ["Project Management", "Team Coordination", "Agile Methodologies", "Quality Assurance"]
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Quick development of MVP and proof-of-concept solutions for startups and enterprises",
      features: ["MVP Development", "Proof of Concept", "Technical Validation", "Market Testing"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light gradient-text mb-4">
            Services Offered
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Leveraging my technical expertise and business acumen to deliver comprehensive solutions 
            that bridge technology and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 text-sm text-gray-500">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-light gradient-warmup mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life with innovative technology solutions 
              and strategic business insights.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
