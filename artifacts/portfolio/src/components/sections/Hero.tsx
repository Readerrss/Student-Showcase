import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
          alt="Cyber Background" 
          className="w-full h-full object-cover opacity-20 dark:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background dark:from-background/60 dark:to-background"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium tracking-wide">Available for Internships</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-foreground tracking-tight mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Mitadru</span>
          </h1>

          <div className="text-xl sm:text-2xl font-mono text-muted-foreground h-[40px] mb-6 flex items-center">
            <Typewriter
              options={{
                strings: [
                  "B.Tech 3rd Year CSE Student",
                  "AI-ML Specialization",
                  "Game Developer (UE5)",
                  "BCS-3A @ Techno India"
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>

          <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
            A passionate computer science student bridging the gap between artificial intelligence and interactive game development. CGPA: 7.88.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Button variant="cyber" size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-primary/30 dark:text-foreground">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/mitadru-karmakar" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#contact" className="p-2.5 rounded-full bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:mitadru@example.com" className="p-2.5 rounded-full bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full max-w-md mx-auto aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative w-full h-full rounded-full border-2 border-primary/20 p-2 overflow-hidden cyber-border">
              <img 
                src={`${import.meta.env.BASE_URL}images/avatar-illustration.png`} 
                alt="Mitadru Karmakar Illustration" 
                className="w-full h-full object-cover rounded-full bg-background/50"
              />
            </div>
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-6 glass-panel px-4 py-2 rounded-lg flex items-center gap-2 font-mono text-sm border-l-4 border-l-primary"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              UE5 Dev
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 15, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -right-8 glass-panel px-4 py-2 rounded-lg flex items-center gap-2 font-mono text-sm border-r-4 border-r-secondary"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              AI/ML
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest font-mono">Scroll</span>
        <a href="#about" className="animate-bounce p-2 rounded-full bg-muted/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
}
