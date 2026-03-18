import { motion } from "framer-motion";
import { Database, ExternalLink, Github, Loader2 } from "lucide-react";
import { useProjectsXml } from "@/hooks/use-projects-xml";
import { Button } from "@/components/ui/button";

export function Projects() {
  const { projects, isParsing, error } = useProjectsXml();

  return (
    <section id="projects" className="py-24 relative bg-muted/30 border-y border-border/50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4 flex items-center gap-3 justify-center"
          >
            Featured Projects
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs px-3 py-1 rounded-full font-mono mt-2"
          >
            <Database className="w-3 h-3" />
            <span>Data dynamically loaded via Client-Side XML DOMParsing</span>
          </motion.div>
        </div>

        {isParsing ? (
          <div className="flex flex-col items-center justify-center py-20 min-h-[300px]">
            <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
            <p className="text-muted-foreground font-mono animate-pulse">Parsing XML data tree...</p>
          </div>
        ) : error ? (
          <div className="bg-destructive/10 border border-destructive/30 text-destructive p-6 rounded-xl text-center max-w-lg mx-auto">
            <p className="font-bold mb-2">Failed to load projects</p>
            <p className="text-sm">{error}</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cyber-border bg-card p-1 rounded-2xl flex flex-col h-full"
              >
                <div className="bg-card/90 backdrop-blur rounded-xl p-6 flex flex-col h-full z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.split(',').map((t, i) => (
                      <span key={i} className="text-xs font-mono bg-muted text-muted-foreground px-2 py-1 rounded-md border border-border">
                        {t.trim()}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground text-sm flex-grow mb-6">
                    {project.desc}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
                    <span className="text-xs font-medium uppercase tracking-wider text-primary">
                      Role: {project.role}
                    </span>
                    <Button variant="ghost" size="sm" className="h-8 gap-2 px-2" asChild>
                      <a href={project.github} target="_blank" rel="noreferrer">
                        Code <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
