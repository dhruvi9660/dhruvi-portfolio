import { 
  Code, 
  Database, 
  Cloud, 
  Server, 
  Palette, 
  Cpu,
  GitBranch,
  Layers
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "Java", level: 95, icon: "☕" },
        { name: "Python", level: 90, icon: "🐍" },
        { name: "SQL", level: 88, icon: "📊" },
        { name: "JavaScript", level: 85, icon: "🚀" },
        { name: "TypeScript", level: 80, icon: "📘" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="w-8 h-8" />,
      skills: [
        { name: "Spring Boot", level: 95, icon: "🍃" },
        { name: "React", level: 88, icon: "⚛️" },
        { name: "Vaadin", level: 85, icon: "🎯" },
        { name: "Django", level: 75, icon: "🎸" },
        { name: "Flask", level: 70, icon: "🌶️" }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "PostgreSQL", level: 92, icon: "🐘" },
        { name: "Snowflake", level: 88, icon: "❄️" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "MySQL", level: 75, icon: "🐬" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8" />,
      skills: [
        { name: "AWS", level: 85, icon: "☁️" },
        { name: "Apache Airflow", level: 88, icon: "🌪️" },
        { name: "Jenkins", level: 80, icon: "🔧" },
        { name: "CI/CD", level: 82, icon: "🔄" },
        { name: "Docker", level: 75, icon: "🐳" }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding navy-gradient">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Comprehensive expertise across the full technology stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 animate-fade-up group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="text-white group-hover:text-blue-200 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="group/skill">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-white/60 text-sm font-medium">{skill.level}%</span>
                    </div>
                    
                    {/* Skill Progress Bar */}
                    <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-400 to-blue-200 rounded-full transition-all duration-1000 ease-out group-hover/skill:from-blue-300 group-hover/skill:to-blue-100"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(index * 150) + (idx * 100)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Machine Learning', 'TensorFlow', 'OpenCV', 'ROS', 'Microservices', 
              'API Development', 'Data Analytics', 'ETL Pipelines', 'Agile Development',
              'System Design', 'Performance Optimization', 'Security Best Practices'
            ].map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium hover:bg-white/30 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;