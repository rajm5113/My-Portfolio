import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Filter } from "lucide-react";
import courseraProjectNetwork from "@/assets/coursera-project-network.png";

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
      title: "SQL Data Analysis with CASE Statements",
      description: "Advanced SQL project using CASE statements for complex data analysis and reporting",
      image: "/lovable-uploads/41a4b641-927c-4a8a-9b5d-b11d0d71cfce.png",
      technologies: ["SQL", "Data Analysis", "CASE Statements", "MySQL"],
      category: "Data Science",
      github: "https://github.com/rajm5113/SQL-CASE-Statements/blob/main/My%20work%20on%20Querry%20Employee.sql",
      demo: "https://github.com/rajm5113/SQL-CASE-Statements",
      certificateUrl: "https://drive.google.com/file/d/1xm33sP3bzcG5_VBH4K7S7ZvK8KNoM5hh/view?usp=sharing"
    },
    {
      title: "Mint Classics SQL Project",
      description: "MySQL project solving real business problems with advanced SQL queries and database optimization",
      image: "/lovable-uploads/6ffe9998-7459-4140-9dbf-c5e71090cd40.png",
      technologies: ["MySQL", "SQL", "Database Design", "Business Intelligence"],
      category: "Data Science",
      github: "https://github.com/rajm5113/mint_classics_project_SQL/blob/main/2%20mint_classics_project_queries.sql",
      demo: "https://github.com/rajm5113/mint_classics_project_SQL"
    },
    {
      title: "Online Grocer Using MySQL Workbench",
      description: "Interactive dashboard for business intelligence and data visualization",
      image: "/lovable-uploads/6ffe9998-7459-4140-9dbf-c5e71090cd40.png",
      technologies: ["MySQL", "MySQL Workbench", "SQL", "Database Design"],
      category: "Data Science",
      github: "https://github.com/rajm5113/Manage-Data-for-an-Online-Grocer-Using-MySQL-Workbench/blob/main/3.1%20SQL%20Scripts.sql",
      demo: "https://github.com/rajm5113/Manage-Data-for-an-Online-Grocer-Using-MySQL-Workbench"
    },
    {
      title: "Data Visualization using Google Sheet",
      description: "Comprehensive data analytics project showcasing data visualization and business insights",
      image: "/lovable-uploads/6eea356a-4004-4f6b-bf1c-da2bdb24fff4.png",
      technologies: ["Google Sheets", "Data Analysis", "Visualization", "Statistics"],
      category: "Data Science",
      demo: "https://docs.google.com/spreadsheets/d/1E3BhM77v7loZCfRfI_uGq0cpYaSd9slfjmeNsdFV8u0/edit?usp=sharing"
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
      title: "Emotion Detection Web-Application",
      description: "AI-powered web application that detects emotions from facial expressions using machine learning",
      image: "/lovable-uploads/92310693-614f-4a1d-861f-7d2812fb0bbd.png",
      technologies: ["Python", "Flask", "TensorFlow", "OpenCV", "Machine Learning"],
      category: "AI/ML",
      github: "https://github.com/rajm5113/oaqjp-final-project-emb-ai",
      demo: "https://github.com/rajm5113/oaqjp-final-project-emb-ai/blob/main/Pictures%20of%20emotion_detector_journey/6b.png"
    },
    {
      title: "Image Captioning",
      description: "AI-powered image captioning system that generates descriptive text for images using deep learning models",
      image: "/lovable-uploads/08d470cd-24fa-49bf-980e-0a5e191e5294.png",
      technologies: ["Python", "Deep Learning", "Computer Vision", "Neural Networks", "Image Processing"],
      category: "AI/ML",
      github: "https://github.com/rajm5113/image_captioning/blob/main/image_cap.ipynb",
      demo: "https://github.com/rajm5113/image_captioning/blob/main/Screenshot%202025-08-01%20194602.png"
    },
    {
      title: "Brand Marketing and SEO Tools using Wix",
      description: "Comprehensive digital marketing project covering website creation, logo design, social media content, and SEO management using Wix platform",
      image: "/lovable-uploads/adfc3856-a948-474d-a3e5-36def4947fa2.png",
      technologies: ["Wix", "SEO", "Logo Design", "Social Media Design", "Video Creation"],
      category: "Digital Marketing & E-Commerce",
      demo: "https://drive.google.com/file/d/1yQ2RqId1QRESvNe7nTFWe6wlm2WZV3p8/view?usp=sharing"
    },
    {
      title: "Use Mailchimp to Build an E-mail Marketing Campaign",
      description: "Use features in Mailchimp. Use design tools to create an email marketing campaign. Prepare an email marketing campaign for distribution.",
      image: "/lovable-uploads/4ef526c0-532e-4b82-af0e-d3144d506ef8.png",
      technologies: ["Mailchimp", "Email Marketing", "Campaign Design", "Marketing Automation"],
      category: "Digital Marketing & E-Commerce",
      demo: "https://drive.google.com/file/d/1KZ_N6Wm9wSaPUKxd-UF9shJm437m7ljS/view?usp=sharing"
    },
    {
      title: "Google Ads for Beginners",
      description: "Create a Google Ads account and set up first campaign structure. Create ad groups, do keyword research, set up audience targeting, and write ads. Learn how to use the tools and settings available to optimize campaigns and make them profitable.",
      image: "/lovable-uploads/b520ce78-4b3f-43c4-af17-bad4cb794669.png",
      technologies: ["Google Ads", "PPC", "Keyword Research", "Audience Targeting", "Campaign Optimization"],
      category: "Digital Marketing & E-Commerce",
      demo: "https://drive.google.com/file/d/1bKhW_egZ-up2dYAYxWEMhXVXW2ya0OdL/view?usp=sharing"
    },
    {
      title: "Introduction to SQL for BigQuery and Cloud SQL",
      description: "Identify the different components and hierarchies within the BigQuery console. Create a new Cloud SQL instance and load your exported CSV file as a new table. Run CREATE DATABASE, CREATE TABLE, DELETE, INSERT INTO, and UNION queries in Cloud SQL.",
      image: "/lovable-uploads/c5fab4f6-e5d0-4c8e-b863-a0833a30cbda.png",
      technologies: ["BigQuery", "Cloud SQL", "SQL", "Google Cloud Platform", "Database Management"],
      category: "Data Science",
      demo: "https://www.linkedin.com/posts/raj-mishra-4ba018202_googlecloud-bigquery-sql-activity-7346474037193187328-NcbJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADOdqc4BXSSqByo0B3AvOMtTJmTGuunnQt8"
    },
    {
      title: "Python Data Science Project",
      description: "Comprehensive data science project involving web scraping, data analysis, and visualization using Python",
      image: "/lovable-uploads/08d470cd-24fa-49bf-980e-0a5e191e5294.png",
      technologies: ["Web Scraping", "Jupyter", "Data Analysis", "Pandas", "Data Science", "Data Manipulation", "Data Processing", "Matplotlib", "Data Collection", "Dashboard", "Python Programming", "Data Visualization"],
      category: "Data Science",
      demo: "https://www.linkedin.com/posts/raj-mishra-4ba018202_datascience-python-tesla-activity-7310125781806895105-kHO-?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADOdqc4BXSSqByo0B3AvOMtTJmTGuunnQt8"
    },
    {
      title: "Python Project for Data Engineering",
      description: "Advanced data engineering project focusing on ETL processes, database management, and API development",
      image: "/lovable-uploads/08d470cd-24fa-49bf-980e-0a5e191e5294.png",
      technologies: ["Style Guides", "Web Scraping", "Databases", "Data Manipulation", "Data Processing", "Unit Testing", "IDEs", "ETL", "SQL", "RESTful API", "Code Review", "Data Transformation"],
      category: "Data Science",
      demo: "https://github.com/rajm5113/ETL-pipeline-code.py/blob/main/practise.ipynb"
    }
  ];

  const categories = ["All", "Data Science", "Digital Marketing & E-Commerce", "Finance", "AI/ML", "Web Development"];

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
                <a 
                  href={project.title === "SQL Data Analysis with CASE Statements" && project.certificateUrl ? project.certificateUrl : 
                        project.title === "Brand Marketing and SEO Tools using Wix" ? project.demo :
                        project.title === "Use Mailchimp to Build an E-mail Marketing Campaign" ? project.demo :
                        project.title === "Google Ads for Beginners" ? project.demo :
                        project.title === "Introduction to SQL for BigQuery and Cloud SQL" ? project.demo :
                        project.title === "Python Data Science Project" ? "https://drive.google.com/file/d/1FVtFA2mySD1Ls88x-5WrjjzNENFC4Vsw/view?usp=sharing" :
                        project.title === "Python Project for Data Engineering" ? "https://drive.google.com/file/d/1SA9npU67bsfUR1PN0f_x-F-OWY6bS_Ko/view?usp=sharing" : undefined}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={project.title === "SQL Data Analysis with CASE Statements" || project.title === "Brand Marketing and SEO Tools using Wix" || project.title === "Use Mailchimp to Build an E-mail Marketing Campaign" || project.title === "Google Ads for Beginners" || project.title === "Introduction to SQL for BigQuery and Cloud SQL" || project.title === "Python Data Science Project" || project.title === "Python Project for Data Engineering" ? "cursor-pointer" : ""}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  {project.title === "SQL Data Analysis with CASE Statements" && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-md">View Certificate</span>
                    </div>
                  )}
                  {project.title === "Brand Marketing and SEO Tools using Wix" && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-md">View Certificate</span>
                    </div>
                  )}
                  {project.title === "Use Mailchimp to Build an E-mail Marketing Campaign" && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-md">View Certificate</span>
                    </div>
                  )}
                  {project.title === "Google Ads for Beginners" && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-md">View Certificate</span>
                    </div>
                  )}
                  {project.title === "Introduction to SQL for BigQuery and Cloud SQL" && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-md">View Certificate</span>
                    </div>
                  )}
                  {project.title === "Python Data Science Project" && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-md">View Certificate</span>
                    </div>
                  )}
                  {project.title === "Python Project for Data Engineering" && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-md">View Project</span>
                    </div>
                  )}
                </a>
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
