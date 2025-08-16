import { GraduationCap, Code, Database, Cloud } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-primary mb-4">
            About Me
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Passionate full-stack developer with expertise in scalable web applications and ESG data solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Bio */}
          <div className="space-y-6 animate-fade-up">
            <div className="card-professional">
              <h3 className="text-2xl font-bold text-navy-primary mb-4">Professional Journey</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                With 2 years of experience in full-stack development and ESG data solutions, I specialize in 
                building scalable applications that drive business value. My expertise spans across modern web 
                technologies, secure microservices architecture, and AI/ML-driven solutions.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                I'm proficient in Java, Spring Boot, Python, React, PostgreSQL, and Vaadin, with a proven track 
                record of delivering enterprise-scale solutions. I thrive in collaborative environments and am 
                passionate about solving complex technical challenges.
              </p>
              <p className="text-text-secondary leading-relaxed">
                As a quick learner with a collaborative mindset, I continuously explore new technologies and 
                methodologies to enhance development processes and deliver high-quality solutions.
              </p>
            </div>
          </div>

          {/* Education & Highlights */}
          <div className="space-y-6 animate-fade-up delay-300">
            {/* Education */}
            <div className="card-professional">
              <div className="flex items-center gap-3 mb-4">
                <div className="skill-icon">
                  <GraduationCap className="w-8 h-8 text-navy-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-primary">Education</h3>
                  <p className="text-text-secondary">Academic Foundation</p>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-navy-primary">Bachelor of Technology in Computer Science</h4>
                <p className="text-text-secondary">KJ Somaiya College Of Engineering, Vidyavihar</p>
                <p className="text-text-secondary">2019 – 2023 | CGPA: 8.93/10</p>
              </div>
            </div>

            {/* Key Strengths */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card-professional p-6">
                <div className="skill-icon mb-4">
                  <Code className="w-8 h-8 text-navy-primary" />
                </div>
                <h4 className="font-semibold text-navy-primary mb-2">Full-Stack Development</h4>
                <p className="text-sm text-text-secondary">End-to-end web applications</p>
              </div>
              
              <div className="card-professional p-6">
                <div className="skill-icon mb-4">
                  <Database className="w-8 h-8 text-navy-primary" />
                </div>
                <h4 className="font-semibold text-navy-primary mb-2">ESG Data Solutions</h4>
                <p className="text-sm text-text-secondary">Scalable data pipelines</p>
              </div>
              
              <div className="card-professional p-6">
                <div className="skill-icon mb-4">
                  <Cloud className="w-8 h-8 text-navy-primary" />
                </div>
                <h4 className="font-semibold text-navy-primary mb-2">Cloud Architecture</h4>
                <p className="text-sm text-text-secondary">AWS & microservices</p>
              </div>
              
              <div className="card-professional p-6">
                <div className="skill-icon mb-4">
                  <GraduationCap className="w-8 h-8 text-navy-primary" />
                </div>
                <h4 className="font-semibold text-navy-primary mb-2">Continuous Learning</h4>
                <p className="text-sm text-text-secondary">Latest technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;