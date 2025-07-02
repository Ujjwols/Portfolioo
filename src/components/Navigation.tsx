import React, { useEffect, useState } from "react";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

export const Navigation = () => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      // Find the currently visible section
      const scrollPos = window.scrollY + 100; // offset for navbar height
      let currentSectionId = "";

      for (const section of SECTIONS) {
        const elem = document.getElementById(section.id);
        if (elem) {
          const offsetTop = elem.offsetTop;
          if (scrollPos >= offsetTop) {
            currentSectionId = section.id;
          }
        }
      }
      setActiveId(currentSectionId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800/90 backdrop-blur-md border-b border-gray-700/50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent cursor-default">
            Portfolio
          </div>
          <div className="hidden md:flex space-x-8">
            {SECTIONS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`font-medium transition-colors hover:text-emerald-400 ${
                  activeId === id ? "text-emerald-400" : "text-gray-300"
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Optional: smooth scroll style */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </nav>
  );
};
