import { ArrowRight, Download, Mail, Phone, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Profile Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-up">
            <div className="mb-6">
              <p className="text-white/80 text-lg font-medium mb-2">Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                Dhruvi Kantilal 
                <span className="block text-4xl lg:text-6xl bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent">
                  Patel
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 font-medium mb-6">
                Full Stack Developer – Analyst
              </p>
              <p className="text-lg text-white/75 max-w-2xl">
                ESG Data & Scalable Applications | 2 years of experience building enterprise-scale solutions
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button 
                onClick={() => scrollToSection('projects')}
                className="btn-hero group"
              >
                View Portfolio
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-outline-hero"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </button>
            </div>

            {/* Quick Contact Links */}
            <div className="flex items-center justify-center lg:justify-start gap-6">
              <a href="mailto:dhruvi@example.com" className="text-white/70 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="tel:+1234567890" className="text-white/70 hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/dhruvi-patel" className="text-white/70 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="flex-shrink-0 animate-fade-up delay-300">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Dhruvi Kantilal Patel - Full Stack Developer"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;