import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Filter } from "lucide-react";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and admin dashboard",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development",
      github: "https://github.com/yourusername/project1",
      demo: "https://project1-demo.com"
    },
    {
      title: "Data Visualization Project",
      description: "Comprehensive data analytics project showcasing data visualization and business insights",
      image: "/placeholder.svg",
      technologies: ["Google Sheets", "Data Analysis", "Visualization", "Statistics"],
      category: "Data Science",
      demo: "https://docs.google.com/spreadsheets/d/1E3BhM77v7loZCfRfI_uGq0cpYaSd9slfjmeNsdFV8u0/edit?usp=sharing"
    },
    {
      title: "SQL Business Analytics",
      description: "MySQL project solving real business problems with advanced SQL queries and database optimization",
      image: "/placeholder.svg",
      technologies: ["MySQL", "SQL", "Database Design", "Business Intelligence"],
      category: "Data Science",
      github: "https://github.com/rajm5113/mint_classics_project_SQL/blob/main/2%20mint_classics_project_queries.sql",
      demo: "https://github.com/rajm5113/mint_classics_project_SQL"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for business intelligence and data visualization",
      image: "/placeholder.svg",
      technologies: ["Python", "Tableau", "SQL", "AWS"],
      category: "Data Science",
      github: "https://github.com/yourusername/project2",
      demo: "https://project2-demo.com"
    },
    {
      title: "Mobile Health App",
      description: "React Native app for tracking health metrics and wellness goals",
      image: "/placeholder.svg",
      technologies: ["React Native", "Firebase", "Health APIs"],
      category: "Mobile Development",
      github: "https://github.com/yourusername/project3",
      demo: "https://project3-demo.com"
    },
    {
      title: "AI Chatbot Assistant",
      description: "Intelligent chatbot using natural language processing for customer support",
      image: "/placeholder.svg",
      technologies: ["Python", "TensorFlow", "NLP", "Flask"],
      category: "AI/ML",
      github: "https://github.com/yourusername/project4",
      demo: "https://project4-demo.com"
    },
    {
      title: "Blockchain Voting System",
      description: "Secure and transparent voting system built on blockchain technology",
      image: "/placeholder.svg",
      technologies: ["Solidity", "Ethereum", "Web3.js", "React"],
      category: "Blockchain",
      github: "https://github.com/yourusername/project5",
      demo: "https://project5-demo.com"
    },
    {
      title: "IoT Smart Home",
      description: "IoT-based smart home automation system with remote monitoring",
      image: "/placeholder.svg",
      technologies: ["Arduino", "Raspberry Pi", "MQTT", "React"],
      category: "IoT",
      github: "https://github.com/yourusername/project6",
      demo: "https://project6-demo.com"
    }
  ];

  const categories = ["All", "Web Development", "Data Science", "Mobile Development", "AI/ML", "Blockchain", "IoT", "Marketing", "Finance", "Digital Marketing & E-Commerce"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light gradient-text mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Filter className="h-5 w-5 text-gray-500 mt-2" />
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className={`gradient-button-hover ${
                activeFilter === category 
                  ? "bg-blue-600 hover:bg-blue-700" 
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="gradient-hover-bg border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg font-semibold text-gray-900">{project.title}</CardTitle>
                  <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800">
                    {project.category}
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild className="gradient-button-hover">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  <Button size="sm" asChild className="gradient-button-hover bg-blue-600 hover:bg-blue-700">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
