import { Briefcase, MapPin, Calendar, TrendingUp, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    title: "Influencer Marketing Analyst Intern",
    company: "Clipwise (Startup)",
    period: "Dec 2025 – Feb 2026",
    location: "BHIVE Workspace, HSR Campus · Bangalore · Onsite",
    type: "Internship",
    color: "from-blue-500 to-purple-600",
    badgeColor: "bg-blue-100 text-blue-700",
    highlights: [
      "Tracked and analyzed YouTube performance metrics (views, engagement, subscriber growth) across 50+ creators — identifying top 15% high-performers driving **2x higher campaign ROI**.",
      "Built an automated influencer discovery pipeline using **Google Apps Script + YouTube Data API**, reducing manual lead generation by ~70% and increasing qualified leads by 40%.",
      "Designed data-driven retargeting strategies by analyzing historical creator performance, improving collaboration conversion rates via engagement analytics.",
      "Created weekly performance dashboards consolidating campaign KPIs (CPV, engagement rate, reach, conversions) enabling real-time leadership decisions.",
      "Managed full outreach pipeline — used AI tools (ChatGPT, Claude) to A/B test messaging templates, increasing creator response rates.",
    ],
  },
  {
    title: "Team Lead – Retail Startup Simulation",
    company: "ZYON Enterprises",
    period: "Mar 2025 – May 2025",
    location: "PW IOI Campus (Last Mile Programme) · Bengaluru",
    type: "Leadership Program",
    color: "from-orange-500 to-pink-500",
    badgeColor: "bg-orange-100 text-orange-700",
    highlights: [
      "Led a team to launch a two-day retail pop-up generating **₹33,000 in sales** with break-even on Day 1 through real-time demand analysis and dynamic pricing.",
      "Analyzed customer purchase patterns to identify top-performing SKUs, optimizing inventory and pricing strategy to maximize daily profitability by **25%**.",
      "Negotiated ₹40,000 in vendor credit and secured ₹2,000 in external funding with only ₹3,000 team investment — demonstrating ROI-driven business planning.",
    ],
  },
  {
    title: "Freelance Data Operations Associate",
    company: "upGrad",
    period: "2025",
    location: "Remote · Freelance",
    type: "Freelance",
    color: "from-green-500 to-teal-500",
    badgeColor: "bg-green-100 text-green-700",
    highlights: [
      "Executed data migration and content transfer projects, moving structured and unstructured data across platforms while ensuring accuracy and completeness.",
      "Designed spreadsheet-based data synchronization workflows using **Google Sheets & Excel** to track, validate and reconcile data across multiple sources.",
      "Developed standardized data entry templates and validation rules streamlining batch processing and improving workflow efficiency for recurring data operations.",
    ],
  },
];

// Render bold text from **text** markdown
const renderHighlight = (text: string) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="font-semibold text-gray-900">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
};

export const Experience = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className="text-center mb-16 scroll-fade-up"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(40px)", transition: "all 0.7s ease" }}
        >
          <h2 className="text-3xl sm:text-4xl font-light gradient-text mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4" />
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Real-world impact across startups, retail, and freelance — building scalable solutions and leading teams.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-green-400 transform md:-translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(50px)",
                  transition: `all 0.7s ease ${index * 0.2}s`,
                }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br ${exp.color} transform md:-translate-x-2 -translate-y-1 top-6 z-10 hidden sm:block shadow-lg`} />

                {/* Card */}
                <div
                  className={`magnetic-glow ml-0 sm:ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"} bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition-all duration-300`}
                  onMouseMove={(e) => {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    card.style.setProperty("--mouse-x", (e.clientX - rect.left) + "px");
                    card.style.setProperty("--mouse-y", (e.clientY - rect.top) + "px");
                  }}
                >
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 leading-tight">{exp.title}</h3>
                      <p className="text-blue-600 font-medium text-sm mt-0.5">{exp.company}</p>
                    </div>
                    <span className={"text-xs font-medium px-3 py-1 rounded-full " + exp.badgeColor}>
                      {exp.type}
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className={`h-0.5 w-full rounded-full bg-gradient-to-r ${exp.color} mb-4 opacity-30`} />

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                        <ChevronRight className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>{renderHighlight(point)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
