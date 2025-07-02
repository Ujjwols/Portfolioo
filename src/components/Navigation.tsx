
export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800/90 backdrop-blur-md border-b border-gray-700/50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Portfolio
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">About</a>
            <a href="#skills" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">Projects</a>
            <a href="#blog" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">Blog</a>
            <a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
