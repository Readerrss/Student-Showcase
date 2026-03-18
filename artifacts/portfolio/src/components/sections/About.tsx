import { motion } from "framer-motion";
import { Terminal, Gamepad2, Brain, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            <span className="text-primary mr-2">&lt;</span>
            About Me
            <span className="text-primary ml-2">/&gt;</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="cyber-border p-8 bg-card/50 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6 border-b border-border pb-4">
              <Terminal className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-mono font-semibold">system_profile.sh</h3>
            </div>
            <div className="space-y-4 text-muted-foreground font-mono text-sm sm:text-base">
              <p>
                <span className="text-primary">const</span> <span className="text-secondary">profile</span> = {"{"}
              </p>
              <div className="pl-4 border-l border-border/50 space-y-2">
                <p><span className="text-primary">name:</span> "Mitadru Karmakar",</p>
                <p><span className="text-primary">role:</span> "CS Student & Developer",</p>
                <p><span className="text-primary">university:</span> "Techno India University",</p>
                <p><span className="text-primary">batch:</span> "BCS-3A",</p>
                <p><span className="text-primary">specialization:</span> "B.Tech in Computer Science & Engineering",</p>
                <p><span className="text-primary">passion:</span> "Understanding how hardware & software interact",</p>
              </div>
              <p>{"};"}</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-muted-foreground"
          >
            <p>
              I am a 3rd-year B.Tech student in Computer Science and Engineering at Techno India University. My approach to technology is driven by a deep curiosity about how systems work under the hood — from AI models to game engines.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-background p-4 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
                <Gamepad2 className="w-8 h-8 text-primary mb-3" />
                <h4 className="text-foreground font-bold mb-1">Game Dev</h4>
                <p className="text-sm">Building immersive experiences and custom logic in Unreal Engine 5 with C++.</p>
              </div>
              <div className="bg-background p-4 rounded-xl border border-border/50 hover:border-secondary/50 transition-colors">
                <Brain className="w-8 h-8 text-secondary mb-3" />
                <h4 className="text-foreground font-bold mb-1">AI / ML</h4>
                <p className="text-sm">Exploring data analysis, predictive modeling, and intelligent systems.</p>
              </div>
              <div className="bg-background p-4 rounded-xl border border-border/50 hover:border-primary/50 transition-colors sm:col-span-2 flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-foreground font-bold mb-1">Community Leadership</h4>
                  <p className="text-sm">Running a WhatsApp community of 15+ friends for gaming, problem solving, and tech discussions.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
