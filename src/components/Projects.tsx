import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Bukit Cendana",
      description: "Responsive web developed with Laravel as a personal thesis project. Includes an admin panel to manage visitor data and showcase information about Bukit Cendana, one of the most popular nature tourism destinations in Lampung.",
      technologies: ["PHP", "JavaScript", "Laravel", "MySQL", "Bootstrap"],
      imgSrc: "/images/bukitcendana.png",
      github: "https://github.com/ryanzuni/Project",
      demo: "#"
    },
    {
      title: "Marketplace Katering",
      description: "Responsive web app built with Laravel. Features separate interfaces for admin and users. Admin manages content, menu data, and user-facing display. Users can browse catering services, view detailed information, and interact with the content added by admin.",
      technologies: ["JavaScript", "PHP", "Laravel", "MySQL"],
      imgSrc: "/images/marketplacekatering.png", 
      github: "#",
      demo: "#"
    },
    {
      title: "Admin Website",
      description: "Responsive admin dashboard built with Express.js and JavaScript. Created as a personal project to sharpen backend development skills. Includes OpenAI-powered chat and is currently under active development.",
      technologies: ["Express.Js", "JavaScript", "OpenAI API (Chat Integration)", "HTML", "CSS"],
      imgSrc: "/images/admin.png", 
      github: "https://github.com/ryanzuni/admin-pembelian",
      demo: "#"
    },
    {
      title: "Dental Clinic",
      description: "Responsive web app developed for a dental clinic client. Includes dedicated access for admin, doctors, and nurses to manage information and handle clinic transactions. Patients can view clinic details and submit appointment requests. Fully completed and delivere.",
      technologies: ["JavaScript", "HTML", "PHP", "Bootstrap"],
      imgSrc: "/images/dentalclinic.png", 
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          My <span className="text-blue-400">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.imgSrc}
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