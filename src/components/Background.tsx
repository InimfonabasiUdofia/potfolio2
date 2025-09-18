import React, { useState, useEffect } from 'react';
import inimfon from "./../../public/inimfon.svg"
import {  Github, Linkedin, Mail, ExternalLink, Code, ChevronRight } from 'lucide-react';

// Type definitions
type Skill = {
  name: string;
  level: number;
  icon: React.ReactElement;
};

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
};

type SectionId = 'home' | 'about' | 'skills' | 'projects' | 'contact';

const Portfolio: React.FC = () => {

  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  // Smooth scrolling to sections
  const scrollToSection = (sectionId: SectionId): void => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });

  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const skills: Skill[] = [
    { name: 'React.js', level: 90, icon: <Code className="w-6 h-6" /> },
    { name: 'JavaScript', level: 85, icon: <Code className="w-6 h-6" /> },
    { name: 'Typescript', level: 80, icon: <Code className="w-6 h-6" /> },
    { name: 'Firebase', level: 75, icon: <Code className="w-6 h-6" /> },
    { name: 'Next.js', level: 70, icon: <Code className="w-6 h-6" /> },
    { name: 'Java', level: 75, icon: <Code className="w-6 h-6" /> }
  ];

  const projects: Project[] = [
    {
      title: 'Green Research',
      description: 'Developed a web application that analyzes environmental data to recommend the most suitable crops for a specific region. Leveraged React, APIs, and geolocation data to deliver actionable insights for farmers and agricultural stakeholders.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      tech: ['React js', 'Bootstrap', 'Firestore', 'Firebase'],
      github: '#',
      live: 'https://green-reasearch-movs.vercel.app/'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      tech: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
      github: '#',
      live: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      tech: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind'],
      github: '#',
      live: '#'
    }
    ,
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      tech: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind'],
      github: '#',
      live: '#'
    }
  ];

  const sectionIds: SectionId[] = ['home', 'about', 'skills', 'projects', 'contact'];

  return (
    <div className="min-h-screen w-full bg-black text-white overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0">
          <defs>
            <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#222" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" opacity="0.5">
            <animateTransform attributeName="transform" type="translate"
              values="0,0; 1,0; 0,0; -1,0; 0,0"
              dur="8s" repeatCount="indefinite"/>
          </rect>
          <rect width="100%" height="100%" fill="url(#grid)" opacity="0.3">
            <animateTransform attributeName="transform" type="translate"
              values="0,0; 0,1; 0,0; 0,-1; 0,0"
              dur="9s" repeatCount="indefinite"/>
          </rect>
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className=" top-0 left-0 right-0 z-50  border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
               <img className='h-7' src={inimfon} alt="" />
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {sectionIds.map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-colors duration-200 hover:text-purple-400 ${
                      activeSection === section ? 'text-purple-400' : 'text-white'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
            
            </div>
          </div>

          {/* Mobile Navigation */}
          
        </nav>

        {/* Hero Section */}
        <section id="home" className=" flex items-center justify-center px-4 pt-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className={`transform transition-all duration-1000 ${isVisible.home ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">IU</span>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                  Inimfon Udofia
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
                Full Stack Developer & UI/UX Designer
              </p>
              
              <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                Passionate about creating beautiful, functional web applications that solve real-world problems
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <a href="https://cal.com/inimfonabasi-udofia/30min?overlayCalendar=true">
                <button
                  // onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-200 transform hover:scale-105"
                >
                  Book a call
                </button>
                </a>
                
                <button className="px-8 py-3 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold rounded-full transition-all duration-200 flex items-center gap-2">
                  Resume
                </button>
              </div>
              
              <div className="flex justify-center space-x-6">
                <a href="https://github.com/InimfonabasiUdofia" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/inimfonabasi-udofia/" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                  <Linkedin size={24} />
                </a>
                <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=inimfonabasi2323@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
>
  <Mail size={24} />
</a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`transform transition-all duration-1000 ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              
              <div className="grid   items-center">
                <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
  I’m a frontend developer specializing in <span className="font-semibold">React.js</span> and 
  <span className="font-semibold"> Next.js</span>, focused on transforming ideas into scalable, 
  high-performance web applications that delight users and drive business results.  Over the past few years, I’ve built modern, responsive UIs with React, Next.js, TypeScript, Bootstrap ,Vanilla css
  and Tailwind CSS, while also optimizing app performance, accessibility, and SEO using SSR/SSG 
  and clean, maintainable code. Some highlights include cutting page load times by <span className="font-semibold"> 40% </span> 
   for a high-traffic e-commerce platform, developing a real-time dashboard with React and Redux, 
  and helping teams deliver faster through reusable component libraries. I also have strong experience with <span className="font-semibold"> frontend testing </span> 
  — ensuring reliability and maintainability using tools like Jest, React Testing Library, 
  and Cypress for end-to-end testing and currently pursuing my Computer Science degree.
</p>

                  
                 
                </div>
                
               
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`transform transition-all duration-1000 ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Skills & Expertise
                </span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-purple-400">
                        {skill.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                    </div>
                    
                    <div className="mb-2">
                      <div className="flex justify-between text-sm text-gray-400 mb-1">
                        <span>Proficiency</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: isVisible.skills ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className={`transform transition-all duration-1000 ${isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Featured Projects
                </span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {projects.map((project) => (
                  <div
                    key={project.title}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
                  >
                    <div className="relative overflow-hidden">
                    
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                      <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded transition-colors duration-200"
                        >
                          <Github size={16} />
                          Code
                        </a>
                        <a
                          href={project.live}
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-sm rounded transition-all duration-200"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <div className={`transform transition-all duration-1000 ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </h2>
              
              <div className="text-center mb-12">
                <p className="text-lg text-gray-300 mb-8">
                  I'm always interested in hearing about new opportunities and interesting projects. 
                  Let's create something amazing together!
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                  <Mail className="w-8 h-8 mx-auto mb-4 text-purple-400" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-400">john.smith@email.com</p>
                </div>
                
                <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                  <Github className="w-8 h-8 mx-auto mb-4 text-purple-400" />
                  <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
                  <p className="text-gray-400">@johnsmith</p>
                </div>
                
                <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                  <Linkedin className="w-8 h-8 mx-auto mb-4 text-purple-400" />
                  <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
                  <p className="text-gray-400">John Smith</p>
                </div>
              </div>
              
              <div className="text-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-200 transform hover:scale-105 flex items-center gap-2 mx-auto">
                  <Mail size={20} />
                  Let's Talk
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-400 border-t border-white/10">
          <p>&copy; 2024 John Smith. Crafted with ❤️ and React.</p>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;