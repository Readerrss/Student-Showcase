import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border py-8 relative">
      <div className="container max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        
        <div>
          <p className="font-mono text-sm text-muted-foreground">
            © 2026 Mitadru Karmakar
          </p>
          <p className="text-xs text-muted-foreground/70 mt-1">
            Techno India University | BCS-3A
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
          <span className="text-sm font-medium">All Systems Operational</span>
        </div>

      </div>

      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-primary/40 hover:-translate-y-1 transition-all z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}
