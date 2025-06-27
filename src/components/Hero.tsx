
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
              <img
                src="/images/Photo_RyanZuniPangestu.jpeg"
                alt="Ryan Zuni Pangestu"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-blue-400">Ryan</span> Zuni Pangestu
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
            Web Developer
          </h2>
          
          <div className="flex items-center justify-center text-gray-400 mb-8">
            <MapPin size={20} className="mr-2" />
            <span className="text-lg">Jakarta Barat, Indonesia</span>
          </div>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate web developer with expertise in modern technologies. 
            I create responsive, user-friendly applications that deliver exceptional digital experiences.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="mailto:ryanzunipangestu@gmail.com"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="inline mr-2" size={20} />
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </a>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/ryanzuni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/ryan-zuni-pangestu-70933525a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
