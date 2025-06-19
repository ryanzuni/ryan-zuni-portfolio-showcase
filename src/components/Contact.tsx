
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Get In <span className="text-blue-400">Touch</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Let's Work Together</h3>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I'm always interested in hearing about new opportunities and exciting projects. 
              Whether you're a company looking to hire, or you're just interested in chatting 
              about web development, feel free to reach out!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-blue-500 p-3 rounded-full mr-4">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <a
                    href="mailto:ryan.zuni.pangestu@gmail.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    ryan.zuni.pangestu@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-500 p-3 rounded-full mr-4">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <a
                    href="tel:+6281234567890"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    +62 812-3456-7890
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-500 p-3 rounded-full mr-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-300">Jakarta Barat, Indonesia</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/ryanzuni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-blue-500 p-3 rounded-full transition-colors duration-300"
                >
                  <Github className="text-white" size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/ryanzunipangestu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-blue-500 p-3 rounded-full transition-colors duration-300"
                >
                  <Linkedin className="text-white" size={24} />
                </a>
                <a
                  href="https://instagram.com/ryanzuni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-blue-500 p-3 rounded-full transition-colors duration-300"
                >
                  <Instagram className="text-white" size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-700/50 rounded-xl p-8 backdrop-blur-sm border border-gray-600">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-600 border border-gray-500 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-600 border border-gray-500 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-slate-600 border border-gray-500 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors duration-300 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © 2024 Ryan Zuni Pangestu. Made with ❤️ using React.js & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};
