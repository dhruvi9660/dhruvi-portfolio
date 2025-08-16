import { ExternalLink, Github, Calendar, Users, Trophy, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Shell Eco-Marathon: Autonomous Programming",
      category: "AI/ML & Robotics",
      year: "2022",
      description: "Self-driving car simulation achieving 85%+ accuracy using Python, ROS, and TensorFlow. Secured top 10 position globally in the competition.",
      technologies: ["Python", "ROS", "TensorFlow", "Computer Vision", "Machine Learning"],
      highlights: [
        "85%+ accuracy in autonomous navigation",
        "Top 10 global ranking",
        "Real-time decision making system"
      ],
      icon: <Trophy className="w-6 h-6" />,
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      title: "AI-Powered Attendance Tracking System",
      category: "Computer Vision",
      year: "2022",
      description: "CNN-based attendance system using OpenCV with 95% accuracy, deployed for 100+ users with real-time face recognition.",
      technologies: ["Python", "OpenCV", "CNN", "Deep Learning", "Flask"],
      highlights: [
        "95% recognition accuracy",
        "Deployed for 100+ users",
        "Real-time processing"
      ],
      icon: <Users className="w-6 h-6" />,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Course Management System",
      category: "Enterprise Software",
      year: "2020",
      description: "Comprehensive Java console application with secure role-based authentication, attendance tracking, test management, and study material distribution.",
      technologies: ["Java", "MySQL", "Security", "Authentication"],
      highlights: [
        "Role-based access control",
        "Comprehensive attendance system",
        "Secure authentication"
      ],
      icon: <Code className="w-6 h-6" />,
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "IIT Bombay E-Yantra Robotics",
      category: "Robotics",
      year: "2022",
      description: "Advanced robotics solutions using ROS framework for competitive robotics challenges, focusing on autonomous navigation and task completion.",
      technologies: ["ROS", "Python", "Robotics", "Autonomous Systems"],
      highlights: [
        "IIT Bombay competition",
        "Autonomous task completion",
        "Advanced robotics algorithms"
      ],
      icon: <Trophy className="w-6 h-6" />,
      gradient: "from-red-500 to-pink-600"
    },
    {
      title: "Club Management System",
      category: "Web Development",
      year: "2021",
      description: "Django-based platform for managing gym and swimming club memberships with automated invoice generation and email notifications.",
      technologies: ["Django", "Python", "PostgreSQL", "Email Integration"],
      highlights: [
        "Automated invoice generation",
        "Email notification system",
        "Membership management"
      ],
      icon: <Users className="w-6 h-6" />,
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      title: "AAHAAR - Food Delivery App",
      category: "Mobile Development",
      year: "2021",
      description: "Flutter-based home food delivery application with COVID-specific safety features and real-time order tracking.",
      technologies: ["Flutter", "Dart", "Firebase", "Mobile Development"],
      highlights: [
        "COVID-specific features",
        "Real-time order tracking",
        "Home food delivery focus"
      ],
      icon: <Code className="w-6 h-6" />,
      gradient: "from-purple-500 to-indigo-600"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A showcase of innovative solutions spanning AI/ML, web development, and enterprise software
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="card-project group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Header */}
              <div className="relative p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${project.gradient} text-white`}>
                    {project.icon}
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-navy-light rounded-full text-xs font-medium text-navy-primary">
                      <Calendar className="w-3 h-3" />
                      {project.year}
                    </span>
                  </div>
                </div>
                
                <div className="mb-2">
                  <span className="text-sm font-medium text-navy-secondary">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold text-navy-primary mb-3 group-hover:text-navy-secondary transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Project Details */}
              <div className="px-6 pb-6">
                {/* Key Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-navy-primary mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-text-secondary">
                        <div className="w-1 h-1 bg-navy-primary rounded-full flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-navy-primary mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 bg-accent-light rounded-md text-xs font-medium text-navy-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-navy-primary text-white rounded-lg hover:bg-navy-secondary transition-colors text-sm font-medium">
                    <ExternalLink className="w-4 h-4" />
                    View Details
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-navy-primary text-navy-primary rounded-lg hover:bg-navy-primary hover:text-white transition-colors text-sm font-medium">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>

        {/* Additional Projects Section */}
        <div className="mt-16 text-center">
          <div className="card-professional max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-navy-primary mb-6">Additional Notable Projects</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <h4 className="font-semibold text-navy-primary">AADHIKSHA NGO Management Website (2020-21)</h4>
                <p className="text-text-secondary text-sm">Platform connecting NGOs with volunteers, streamlining management tasks and community engagement.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-navy-primary">Society Management System (2021)</h4>
                <p className="text-text-secondary text-sm">Python application for managing notices, maintenance records, and personal messaging within residential societies.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-navy-primary">Library Management System (2019-20)</h4>
                <p className="text-text-secondary text-sm">C-based application for comprehensive library record management and book tracking system.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-navy-primary">Thai Twitter Sentiment Analysis (2021)</h4>
                <p className="text-text-secondary text-sm">Research paper studying performance analysis of sentiment analysis techniques for Thai language social media data.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;