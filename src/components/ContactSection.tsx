
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent leading-tight">
          Let's Work Together
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-8 rounded-full"></div>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="mailto:shrestha.ujjwol1@gmail.com">
            <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Mail className="h-5 w-5 mr-2" />
              Get In Touch
            </Button>
          </a>
          <div className="flex space-x-4">
            <a href="https://github.com/Ujjwols" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors transform hover:scale-110 shadow-md border border-gray-600">
              <Github className="h-6 w-6 text-gray-300" />
            </a>
            <a href="https://www.linkedin.com/in/ujjwolshrestha/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors transform hover:scale-110 shadow-md border border-gray-600">
              <Linkedin className="h-6 w-6 text-teal-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
