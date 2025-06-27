
export const Skills = () => {
  const skills = [
    { name: "TypeScript", level: 55, color: "bg-blue-500" },
    { name: "Express.js", level: 65, color: "bg-zinc-500" },
    { name: "React.js", level: 65, color: "bg-cyan-500" },
    { name: "Node.js", level: 60, color: "bg-green-500" },
    { name: "JavaScript", level: 90, color: "bg-yellow-500" },
    { name: "PHP", level: 90, color: "bg-purple-500" },
    { name: "Laravel", level: 95, color: "bg-red-500" },
    { name: "Code Iginiter", level: 85, color: "bg-pink-500" },
    { name: "Tailwind CSS", level: 95, color: "bg-teal-500" },
    { name: "Bootstrap", level: 95, color: "bg-indigo-500" },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          My <span className="text-blue-400">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-slate-700/50 rounded-lg p-6 backdrop-blur-sm border border-gray-600 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                <span className="text-blue-400 font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-3">
                <div
                  className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                  style={{ 
                    width: `${skill.level}%`,
                    animationDelay: `${index * 0.1}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-9">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-10">
            {[
              "React", "Next.js", "Vue.js", "Angular", "Node.js", "Express", 
              "Laravel", "PHP", "MySQL", "Docker", "AWS", "Git", "REST APIs"
            ].map((tech) => (
              <span
                key={tech}
                className="bg-slate-700 text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-500 hover:text-white transition-colors duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
