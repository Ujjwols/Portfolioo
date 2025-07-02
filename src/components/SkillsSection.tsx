
import { Code, Palette, Smartphone, Globe, Database, Zap, Gamepad, Container } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const SkillsSection = () => {
  const skills = [
    { name: "Frontend Development", icon: Code, description: "React, TypeScript, Next.js" },
    { name: "UI/UX Design", icon: Palette, description: "Figma, Prototyping" },
    { name: "Mobile Development", icon: Smartphone, description: "React Native, Flutter, Dart" },
    { name: "Web Technologies", icon: Globe, description: "HTML5, CSS3, JavaScript" },
    { name: "Backend Development", icon: Database, description: "Node.js, Express.js, MongoDB, Firebase" },
    { name: "Performance Optimization", icon: Zap, description: "SEO, Core Web Vitals" },
    { name: "Game Development", icon: Gamepad, description: "Unity, C#, Game Design" },
    { name: "DevOps & Containerization", icon: Container, description: "Docker, Deployment, Microservices" }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent leading-tight">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-8 rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-gray-800/80 border-gray-700 hover:bg-gray-700/80 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-emerald-500/20 to-teal-500/20 mr-4 border border-emerald-500/30">
                    <skill.icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                </div>
                <p className="text-gray-300 text-sm">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
