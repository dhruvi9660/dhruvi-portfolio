import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Cog, 
  BarChart3,
  Shield,
  Zap
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Full-Stack Development",
      description: "End-to-end web application development with modern frameworks, responsive design, and scalable architecture.",
      features: [
        "React & TypeScript Frontend",
        "Spring Boot Backend APIs",
        "Database Design & Integration",
        "Responsive UI/UX Development"
      ],
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "ESG Data Solutions",
      description: "Specialized in Environmental, Social, and Governance data processing, reporting, and analytics platforms.",
      features: [
        "Data Pipeline Development",
        "ESG Reporting Automation",
        "Snowflake Data Warehousing",
        "Real-time Data Processing"
      ],
      gradient: "from-green-500 to-green-700"
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud Architecture",
      description: "Design and implement scalable cloud solutions using AWS services and modern DevOps practices.",
      features: [
        "AWS Cloud Infrastructure",
        "Microservices Architecture",
        "CI/CD Pipeline Setup",
        "Performance Optimization"
      ],
      gradient: "from-purple-500 to-purple-700"
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics and visualization solutions.",
      features: [
        "Data Visualization Dashboards",
        "Business Intelligence Solutions",
        "Automated Reporting Systems",
        "Performance Metrics Tracking"
      ],
      gradient: "from-orange-500 to-orange-700"
    },
    {
      icon: <Cog className="w-12 h-12" />,
      title: "API Development",
      description: "Build robust, secure, and well-documented APIs for seamless system integration and data exchange.",
      features: [
        "RESTful API Design",
        "Authentication & Security",
        "API Documentation",
        "Third-party Integrations"
      ],
      gradient: "from-red-500 to-red-700"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Automation Solutions",
      description: "Streamline business processes with intelligent automation and workflow optimization.",
      features: [
        "Process Automation",
        "Workflow Optimization",
        "Monitoring & Alerting",
        "Report Generation"
      ],
      gradient: "from-yellow-500 to-yellow-700"
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-primary mb-4">
            Services & Expertise
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life with cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-professional group relative overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Service Icon */}
              <div className="relative mb-6">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
              </div>

              {/* Service Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-navy-primary mb-3 group-hover:text-navy-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-text-secondary">
                      <div className="w-1.5 h-1.5 bg-navy-primary rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-navy-primary/20 rounded-xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-professional max-w-3xl mx-auto">
            <Shield className="w-16 h-16 text-navy-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-navy-primary mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Let's collaborate to create scalable, innovative solutions that drive your business forward. 
              With expertise in modern technologies and enterprise-scale development, I'm here to turn your vision into reality.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-hero"
            >
              Let's Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;