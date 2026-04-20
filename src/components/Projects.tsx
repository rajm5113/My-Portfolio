import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Filter } from "lucide-react";
import courseraProjectNetwork from "@/assets/coursera-project-network.png";
import ibmLogo from "@/assets/ibm-logo.png";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
      setActiveFilter(decodeURIComponent(category));
    }
  }, []);

  const projects = [
    {
      title: "The Business Intelligence (BI) Analyst Capstone Project",
      description: "Applied data analysis techniques to derive meaningful insights and uncover patterns. Designed and executed a practical BI project showcasing proficiency in BI tools like IBM Cognos Analytics, Tableau, Looker, and Excel with pivot tables, regression analysis, and data visualization.",
      image: ibmLogo,
      technologies: ["Data Analysis", "Data Manipulation", "IBM Cognos Analytics", "Pivot Tables And Charts", "Regression Analysis", "Looker", "Tableau Software", "Business Intelligence", "Microsoft Excel", "Microsoft PowerPoint", "Presentations"],
      category: "Data Science",
      demo: "https://drive.google.com/drive/folders/15GXAp3qKdlJoVhNfw4_ri40CTSfQFfP7?usp=sharing",
      demoLabel: "View",
      certificateUrl: "https://drive.google.com/file/d/14FGGGejA3Q6CFegogwhhaOlPY_pAPxSi/view?usp=sharing"
    },
    {
      title: "Deploy and Maintain Power BI Assets and Capstone project",
      description: "Comprehensive Power BI project covering data storage technologies, analysis, visualization, and reporting with advanced statistical insights and data integration techniques",
      image: "/lovable-uploads/power-bi-project.png",
      technologies: ["Data Storage Technologies", "Data Analysis", "SQL", "Database Design", "Data Visualization", "Statistical Visualization", "Power BI", "Data Storage", "Statistical Reporting", "Data Integration", "Data Literacy", "Data Manipulation"],
      category: "Data Science",
      demo: "https://www.linkedin.com/posts/raj-mishra-4ba018202_my-workspace-slides-activity-7373558772088303617-OZsW?utm_source=share&utm_medium=member_desktop&rcm=ACoAADOdqc4BXSSqByo0B3AvOMtTJmTGuunnQt8"
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
      title: "MediMind Medical AI Assistant",
      description: "Medical AI Assistant | Fine-tuned Phi-2 + QLoRA + DPO + RAG. Warning: Educational information only. NOT a substitute for professional medical advice. Always consult a licensed physician.",
      image: "/lovable-uploads/medimind-thumbnail.png",
      technologies: ["Phi-2", "QLoRA", "DPO", "RAG", "FAISS", "Gradio"],
      category: "AI/ML",
      demo: "https://huggingface.co/spaces/raj5113/medimind",
      github: "https://github.com/rajm5113/MediMind"
    },
    {
      title: "MediAssist Agent",
      description: "AI-powered medical assistant built with LangChain for effortless information retrieval from PubMed articles. Features domain flexibility for extensible knowledge retrieval across various medical disciplines.",
      image: "/lovable-uploads/mediassist-agent.png",
      technologies: ["LangChain", "Python", "PubMed API", "LLMs", "Information Retrieval"],
      category: "AI/ML",
      demo: "https://share.streamlit.io/rajm5113/mediassist-agent/main/ui/app.py",
      github: "https://github.com/rajm5113/mediassist-agent.git"
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
      title: "Startup Simulation – Last Mile Program",
      description: "Team-based retail entrepreneurship project managing a two-day stall at Yellow Living Hostel. Sold anime figurines, Marvel/DC keychains, and aesthetic analogue watches. Achieved ₹33,000 in sales with optimized pricing and inventory management, breaking even on Day 1.",
      image: "/lovable-uploads/startup-simulation-ioi.png",
      technologies: ["Retail Management", "Sales Strategy", "Financial Tracking", "Inventory Management", "Customer Engagement", "Product Analysis"],
      category: "Entrepreneurship/Business",
      pptUrl: "https://drive.google.com/file/d/1eyfCR4Olho03w8t3jGjpwtSHpt_mQdSm/view?usp=sharing",
      financeUrl: "https://docs.google.com/spreadsheets/d/1AcKhdIoTgY-0GTaGxZHOnYyyrPzrhi4E/edit?usp=sharing&ouid=104718452063063399362&rtpof=true&sd=true"
    },
    {
      title: "Capstone Project Digital Marketing and Growth Hacking",
      description: "Demonstrated digital marketing and AI skills in a portfolio-worthy capstone project. Designed and executed digital marketing strategies using SEO, content marketing, paid advertising, social media, and email marketing. Developed campaign assets including briefs, content plans, ad strategies, email sequences, and AI-enhanced materials tailored to target audiences. Applied audience targeting, budgeting, channel selection, and performance forecasting to simulate real-world marketing challenges.",
      image: ibmLogo,
      technologies: ["Target Audience", "Presentations", "Smart Goals", "Search Engine Optimization", "Paid Media", "Business Analysis", "Digital Advertising", "Social Media Strategy", "Social Media Marketing", "Marketing Analytics", "Content Strategy", "E-Commerce", "Digital Marketing", "Social Media Campaigns", "Web Analytics", "LinkedIn", "Market Analysis", "Advertising Campaigns", "Content Marketing"],
      category: "Marketing",
      demo: "https://drive.google.com/drive/folders/1FXSyjQj5XGjfgfMcXXygZK0Dpm9oL-ae?usp=sharing",
      demoLabel: "View",
      pptUrl: "https://canva.link/lx04h2bwr2mrlqi"
    },
    {
      title: "Project Crafting Portfolio-Ready SEO Content",
      description: "Complete end-to-end SEO process from content creation to technical and off-page optimization. Learned to write SEO-ready content that is clear, engaging, and grammatically correct. Optimized blog content for on-page SEO including keyword placement, readability, and meta optimization. Created and validated schema markup (structured data) for blog posts. Evaluated and selected relevant backlinking opportunities based on site relevance, domain authority (DA), and link type.",
      image: ibmLogo,
      technologies: ["SEO Content Writing", "On-Page SEO", "Keyword Optimization", "Meta Optimization", "Schema Markup", "Structured Data", "Backlinking", "Domain Authority", "Technical SEO", "Off-Page Optimization"],
      category: "Marketing",
      demo: "https://1drv.ms/f/c/bc5e214ec772491d/IgD8iY8DZBijQLaOpjX4ObK_Adj_HPxrEwyHFI26fKc9AaY?e=IuYDGJ",
      demoLabel: "View"
    },
    {
      title: "Royal Enfield Brand Campaign",
      description: "Comprehensive brand marketing campaign for Royal Enfield executed across YouTube and Instagram, tracking impressions, views, profile activity, and engagement metrics using Google Ads analytics and campaign boosting strategies.",
      image: "/lovable-uploads/royal-enfield-campaign.png",
      technologies: ["YouTube Campaign", "Instagram Marketing", "Google Ads Analytics", "Campaign Boosting", "Impressions Tracking", "Profile Activity Analysis", "Social Media Marketing", "Brand Marketing"],
      category: "Marketing",
      pptUrl: "https://drive.google.com/file/d/10dmwMKFD9fw197qVMnaofOOTwGXjeYI2/view?usp=sharing",
      instagramUrl: "https://1drv.ms/v/c/bc5e214ec772491d/EZfLJJvvTSlHuDGpdv7hKeQBdJK2KEftbU3LaDkNUZT0Ug?e=ax6H5Q",
      linkedinUrl: "https://www.linkedin.com/posts/raj-mishra-4ba018202_royalenfield-pwinstituteofinnovation-filmmaking-activity-7363757873463529472-nk-E?utm_source=share&utm_medium=member_desktop&rcm=ACoAADOdqc4BXSSqByo0B3AvOMtTJmTGuunnQt8"
    },
    {
      title: "Brand Marketing and SEO Tools using Wix",
      description: "Comprehensive digital marketing project covering website creation, logo design, social media content, and SEO management using Wix platform",
      image: "/lovable-uploads/adfc3856-a948-474d-a3e5-36def4947fa2.png",
      technologies: ["Wix", "SEO", "Logo Design", "Social Media Design", "Video Creation"],
      category: "Marketing",
      demo: "https://drive.google.com/file/d/1yQ2RqId1QRESvNe7nTFWe6wlm2WZV3p8/view",
      demoLabel: "View"
    },
    {
      title: "Use Mailchimp to Build an E-mail Marketing Campaign",
      description: "Use features in Mailchimp. Use design tools to create an email marketing campaign. Prepare an email marketing campaign for distribution.",
      image: "/lovable-uploads/4ef526c0-532e-4b82-af0e-d3144d506ef8.png",
      technologies: ["Mailchimp", "Email Marketing", "Campaign Design", "Marketing Automation"],
      category: "Marketing",
      demo: "https://www.coursera.org/account/accomplishments/verify/CJA35ZQ0TF6V",
      demoLabel: "View"
    },
    {
      title: "Google Ads for Beginners",
      description: "Create a Google Ads account and set up first campaign structure. Create ad groups, do keyword research, set up audience targeting, and write ads. Learn how to use the tools and settings available to optimize campaigns and make them profitable.",
      image: "/lovable-uploads/b520ce78-4b3f-43c4-af17-bad4cb794669.png",
      technologies: ["Google Ads", "PPC", "Keyword Research", "Audience Targeting", "Campaign Optimization"],
      category: "Marketing",
      demo: "https://www.coursera.org/account/accomplishments/verify/7E8SWZDVY1CS",
      demoLabel: "View"
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
      title: "Retail Data Analysis",
      description: "Online retail data analysis project using Python and Pandas",
      image: "/lovable-uploads/coursera-retail-analysis.png",
      technologies: ["Data Analysis", "Data Manipulation", "Descriptive Statistics", "Business Analytics", "Data-Driven Decision-Making", "Analytical Skills", "Data Cleansing", "Jupyter", "Exploratory Data Analysis", "Pandas", "Customer Analysis", "Matplotlib", "Data Visualization", "Statistical Analysis", "Trend Analysis", "Python Programming"],
      category: "Data Science",
      github: "https://github.com/rajm5113/Retail-data-analysis/blob/main/online_retail.ipynb",
      demo: "https://github.com/rajm5113/Retail-data-analysis/blob/main/README.md"
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
    },
    {
      title: "Voice-Assistant",
      description: "AI-powered voice assistant application with natural language processing and speech recognition capabilities",
      image: "/lovable-uploads/92310693-614f-4a1d-861f-7d2812fb0bbd.png",
      technologies: ["Python", "AI", "NLP", "Speech Recognition", "Machine Learning", "Voice Processing"],
      category: "AI/ML",
      github: "https://huggingface.co/spaces/raj5113/Voice-Assistant/tree/main",
      demo: "https://huggingface.co/spaces/raj5113/Voice-Assistant"
    },
    {
      title: "AI Career Coach",
      description: "AI-powered career coaching application that provides personalized guidance and recommendations for professional development",
      image: "/lovable-uploads/92310693-614f-4a1d-861f-7d2812fb0bbd.png",
      technologies: ["Python", "AI", "NLP", "Machine Learning", "Career Guidance", "Recommendation Systems"],
      category: "AI/ML",
      github: "https://huggingface.co/spaces/raj5113/ai-career-coach/tree/main",
      demo: "https://huggingface.co/spaces/raj5113/ai-career-coach"
    },
    {
      title: "Python Libraries for Data Analysis - Numpy and Pandas",
      description: "Understand python programming fundamentals for data analysis. Define single and multi-dimensional NumPy arrays. Import HTML data in Pandas DataFrames",
      image: "/lovable-uploads/6ffe9998-7459-4140-9dbf-c5e71090cd40.png",
      technologies: ["Data Analysis", "Computer Programming", "Pandas (Python Package)", "Data Science", "Data Manipulation", "Data Structures", "NumPy", "Python Programming"],
      category: "Data Science",
      github: "https://github.com/rajm5113/Python-for-Data-Analysis-Pandas-NumPy.git"
    },
  ];

  const categories = ["All", "Data Science", "AI/ML", "Marketing", "Entrepreneurship/Business", "Web Development"];

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
            <Card
              key={index}
              className="tilt-card magnetic-glow gradient-hover-bg border-0 shadow-md hover:shadow-lg transition-all duration-300 group"
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -6;
                const rotateY = ((x - centerX) / centerX) * 6;
                card.style.transform = "perspective(800px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) scale(1.02)";
                card.style.setProperty("--mouse-x", x + "px");
                card.style.setProperty("--mouse-y", y + "px");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
              }}
            >
              <div className="relative overflow-hidden">
                <a 
                  href={project.title === "The Business Intelligence (BI) Analyst Capstone Project" && project.certificateUrl ? project.certificateUrl :
                        project.title === "SQL Data Analysis with CASE Statements" && project.certificateUrl ? project.certificateUrl : 
                        project.title === "Brand Marketing and SEO Tools using Wix" ? project.demo :
                        project.title === "Use Mailchimp to Build an E-mail Marketing Campaign" ? project.demo :
                        project.title === "Google Ads for Beginners" ? project.demo :
                        project.title === "Introduction to SQL for BigQuery and Cloud SQL" ? project.demo :
                        project.title === "Python Data Science Project" ? "https://drive.google.com/file/d/1FVtFA2mySD1Ls88x-5WrjjzNENFC4Vsw/view?usp=sharing" :
                        project.title === "Python Project for Data Engineering" ? "https://drive.google.com/file/d/1SA9npU67bsfUR1PN0f_x-F-OWY6bS_Ko/view?usp=sharing" :
                        project.title === "Python Libraries for Data Analysis - Numpy and Pandas" ? "https://drive.google.com/file/d/1s6NNB5StY5Uua4ONoU_n3a2y03O_fpbE/view?usp=sharing" : undefined}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={project.title === "The Business Intelligence (BI) Analyst Capstone Project" || project.title === "SQL Data Analysis with CASE Statements" || project.title === "Brand Marketing and SEO Tools using Wix" || project.title === "Use Mailchimp to Build an E-mail Marketing Campaign" || project.title === "Google Ads for Beginners" || project.title === "Introduction to SQL for BigQuery and Cloud SQL" || project.title === "Python Data Science Project" || project.title === "Python Project for Data Engineering" || project.title === "Python Libraries for Data Analysis - Numpy and Pandas" ? "cursor-pointer" : ""}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  {project.title === "The Business Intelligence (BI) Analyst Capstone Project" && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-md">View Certificate</span>
                    </div>
                  )}
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
                  {project.title === "Python Libraries for Data Analysis - Numpy and Pandas" && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-md">View Certificate</span>
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
                <div className="text-gray-600 text-sm">
                  {project.description.includes("Warning:") ? (
                    <>
                      {project.description.split("Warning:")[0]}
                      <div className="mt-2 p-2 bg-red-50 border-l-4 border-red-500 rounded text-red-700 italic">
                        <span className="font-bold">Warning:</span> {project.description.split("Warning:")[1]}
                      </div>
                    </>
                  ) : (
                    project.description
                  )}
                </div>
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
                  {project.demo && (
                    <Button size="sm" asChild className="gradient-button-hover bg-blue-600 hover:bg-blue-700">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {project.demoLabel || "Demo"}
                      </a>
                    </Button>
                  )}
                  {project.pptUrl !== undefined && (
                    <Button size="sm" asChild className="gradient-button-hover bg-green-600 hover:bg-green-700">
                      <a href={project.pptUrl || "#"} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        PPT
                      </a>
                    </Button>
                  )}
                  {project.financeUrl !== undefined && (
                    <Button size="sm" asChild className="gradient-button-hover bg-purple-600 hover:bg-purple-700">
                      <a href={project.financeUrl || "#"} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Finance
                      </a>
                    </Button>
                  )}
                  {project.instagramUrl !== undefined && (
                    <Button size="sm" asChild className="gradient-button-hover bg-pink-600 hover:bg-pink-700">
                      <a href={project.instagramUrl || "#"} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Watch Ad
                      </a>
                    </Button>
                  )}
                  {project.linkedinUrl !== undefined && (
                    <Button size="sm" asChild className="gradient-button-hover bg-sky-600 hover:bg-sky-700">
                      <a href={project.linkedinUrl || "#"} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
