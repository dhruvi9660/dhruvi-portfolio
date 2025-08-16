import { Building, Calendar, MapPin, ChevronRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "TIAA Global Capabilities (Nuveen, A TIAA Company)",
      position: "Full Stack Developer – Analyst",
      duration: "July 2023 – Present",
      location: "Powai, Mumbai",
      type: "Full-time",
      highlights: [
        "Built ESG data ingestion pipelines processing 100M+ records with 99.9% accuracy",
        "Led migration to Snowflake, reducing query times by 75% and improving data accessibility",
        "Automated ESG reports generation, cutting manual processing time from 8 hours to 30 minutes",
        "Developed RI Transparency UI and RI Research Platform serving 500+ internal users",
        "Implemented downstream data feed automation, improving data consistency by 95%",
        "Executed database migrations with zero downtime across production environments"
      ]
    },
    {
      company: "TIAA Global Capabilities",
      position: "Software Engineer Intern",
      duration: "June 2022 – Aug 2022",
      location: "Pune",
      type: "Internship",
      highlights: [
        "Built TIAA Daily Imports Dashboard with real-time monitoring capabilities",
        "Implemented real-time charts and alert system reducing incident response time by 60%",
        "Developed automated monitoring and notification system for critical data processes",
        "Collaborated with cross-functional teams to gather requirements and deliver solutions"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-primary mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            My journey in building enterprise-scale solutions and driving innovation
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="card-professional group animate-fade-up" style={{ animationDelay: `${index * 200}ms` }}>
              {/* Company Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 gap-4">
                <div className="flex items-start gap-4">
                  <div className="skill-icon flex-shrink-0">
                    <Building className="w-8 h-8 text-navy-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-navy-primary mb-1">
                      {exp.company}
                    </h3>
                    <h4 className="text-lg font-semibold text-navy-secondary mb-2">
                      {exp.position}
                    </h4>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <span className="px-2 py-1 bg-navy-light rounded-full text-xs font-medium text-navy-primary">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="space-y-3">
                <h5 className="font-semibold text-navy-primary mb-4">Key Achievements:</h5>
                <div className="grid gap-3">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 group/item">
                      <div className="flex-shrink-0 w-2 h-2 bg-navy-primary rounded-full mt-2 group-hover/item:bg-accent transition-colors"></div>
                      <p className="text-text-secondary leading-relaxed group-hover/item:text-text-primary transition-colors">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack (for current role) */}
              {index === 0 && (
                <div className="mt-6 pt-6 border-t border-border">
                  <h5 className="font-semibold text-navy-primary mb-3">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {['Java', 'Spring Boot', 'Python', 'React', 'PostgreSQL', 'Snowflake', 'AWS', 'Vaadin', 'Apache Airflow'].map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-accent-light rounded-full text-sm font-medium text-navy-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;