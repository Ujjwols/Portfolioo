
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <span className="text-3xl font-bold text-emerald-400">UK</span>
              </div>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Ujjwol Krishna Shrestha
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Full Stack Developer with MERN expertise crafting exceptional digital experiences with modern technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="flex space-x-4">
              <a href="https://github.com/Ujjwols" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors shadow-md border border-gray-600">
                <Github className="h-6 w-6 text-gray-300" />
              </a>
              <a href="https://www.linkedin.com/in/ujjwolshrestha/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors shadow-md border border-gray-600">
                <Linkedin className="h-6 w-6 text-teal-400" />
              </a>
              <a href="mailto:shrestha.ujjwol1@gmail.com" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors shadow-md border border-gray-600">
                <Mail className="h-6 w-6 text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
