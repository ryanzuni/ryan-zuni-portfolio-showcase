
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution built with React.js and Laravel. Features include user authentication, payment integration, and admin dashboard.",
      technologies: ["React.js", "Laravel", "MySQL", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      github: "https://github.com/ryanzuni/ecommerce-platform",
      demo: "https://demo-ecommerce.com"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates. Built using React.js frontend and Node.js backend with Socket.io.",
      technologies: ["React.js", "Node.js", "Socket.io", "MongoDB"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      github: "https://github.com/ryanzuni/task-manager",
      demo: "https://demo-taskmanager.com"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website showcasing modern web development techniques. Features smooth animations and mobile-first design.",
      technologies: ["TypeScript", "React.js", "Tailwind CSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      github: "https://github.com/ryanzuni/portfolio",
      demo: "https://ryanzuni.dev"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with location-based forecasts. Integrates with multiple weather APIs for accurate data.",
      technologies: ["JavaScript", "PHP", "Bootstrap", "Chart.js"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      github: "https://github.com/ryanzuni/weather-dashboard",
      demo: "https://weather-demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          My <span className="text-blue-400">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-slate-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
