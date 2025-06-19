
import { Code, Coffee, Heart } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          About <span className="text-blue-400">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hello! I'm Ryan Zuni Pangestu, a passionate web developer based in Jakarta Barat. 
              I love creating digital experiences that are not only functional but also beautiful and intuitive.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              With a strong foundation in both frontend and backend technologies, I enjoy working 
              on full-stack projects that challenge me to grow and learn new things every day.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or enjoying a good cup of coffee while planning my next project.
            </p>
            
            <div className="flex space-x-8 pt-6">
              <div className="text-center">
                <Code className="text-blue-400 mx-auto mb-2" size={32} />
                <p className="text-gray-300 font-semibold">Clean Code</p>
              </div>
              <div className="text-center">
                <Coffee className="text-blue-400 mx-auto mb-2" size={32} />
                <p className="text-gray-300 font-semibold">Coffee Lover</p>
              </div>
              <div className="text-center">
                <Heart className="text-blue-400 mx-auto mb-2" size={32} />
                <p className="text-gray-300 font-semibold">Passionate</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Location:</span>
                  <span className="text-blue-400">Jakarta Barat</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Role:</span>
                  <span className="text-blue-400">Web Developer</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Experience:</span>
                  <span className="text-blue-400">Full Stack</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Availability:</span>
                  <span className="text-green-400">Open to Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
