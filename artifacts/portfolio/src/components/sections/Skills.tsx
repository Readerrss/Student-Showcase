import { motion } from "framer-motion";
import { Cpu, Terminal, Code2, Globe, Gamepad2, GitBranch } from "lucide-react";
import { cn } from "@/lib/utils";

const SKILL_CATEGORIES = [
  {
    title: "Core Languages",
    icon: Code2,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    skills: [
      { name: "C++ (UE5)", level: 85 },
      { name: "Python (AI/ML)", level: 80 },
      { name: "Java (OOP)", level: 75 },
      { name: "C & Lex", level: 70 },
    ]
  },
  {
    title: "Game Development",
    icon: Gamepad2,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    skills: [
      { name: "Unreal Engine 5", level: 85 },
      { name: "Blueprints", level: 90 },
      { name: "Game Logic & Physics", level: 80 },
      { name: "Performance Optimization", level: 70 },
    ]
  },
  {
    title: "Web & Data",
    icon: Globe,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    skills: [
      { name: "HTML5 / CSS3", level: 90 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "Streamlit", level: 75 },
      { name: "XML Parsing", level: 80 },
    ]
  },
  {
    title: "Tools & Systems",
    icon: GitBranch,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    skills: [
      { name: "Git / GitHub", level: 85 },
      { name: "Linux Shell Scripting", level: 75 },
      { name: "P2P / Distributed Systems", level: 65 },
      { name: "Data Structures & Algos", level: 80 },
    ]
  }
];

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            Technical Arsenal
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl text-center">
            My toolkit for building intelligent systems, immersive games, and solid software architecture.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="bg-card border border-border p-6 rounded-2xl hover:border-primary/50 transition-colors shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={cn("p-3 rounded-xl", category.bg)}>
                  <category.icon className={cn("w-6 h-6", category.color)} />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + (skillIdx * 0.1), ease: "easeOut" }}
                        className={cn("h-full rounded-full", category.bg.replace('/10', ''))}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
