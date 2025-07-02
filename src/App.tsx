import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Scroll to section on route change (for hash-based routing)
const ScrollHandler = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.pathname.replace("/", ""); // e.g. "/about" → "about"
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <ScrollHandler>
          <Routes>
            {/* Map all routes to Index page */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<Index />} />
            <Route path="/skills" element={<Index />} />
            <Route path="/projects" element={<Index />} />
            <Route path="/blog" element={<Index />} />
            <Route path="/contact" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollHandler>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
