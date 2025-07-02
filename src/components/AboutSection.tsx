
export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent leading-tight">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-8 rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with expertise in the MERN stack, specializing in creating scalable web applications and modern user experiences. I have extensive experience with MongoDB, Express.js, React, and Node.js.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Recently, I've been diving into game development and mastering Docker containerization for efficient deployment. When I'm not coding, you can find me exploring new technologies, writing technical articles on Medium, or contributing to open-source projects.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium border border-emerald-500/30">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-teal-500/20 text-teal-300 rounded-full text-sm font-medium border border-teal-500/30">
                MERN Expert
              </span>
              <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/30">
                Game Developer
              </span>
              <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-medium border border-green-500/30">
                DevOps Enthusiast
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 p-8 shadow-2xl border border-gray-700">
              <div className="w-full h-full rounded-xl bg-gray-800/80 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <p className="text-gray-300 font-medium">Always learning, always growing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
