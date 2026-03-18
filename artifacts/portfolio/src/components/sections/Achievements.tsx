import { useState } from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle, ExternalLink, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const ACHIEVEMENTS = [
  {
    id: 1,
    title: "Techno Billion AI Virtual Internship",
    issuer: "Aditya Seth",
    date: "Jan 15, 2026",
    desc: "Completed Python for Beginners course with Grade A+. Certificate ID: eddb783f-78ea-4cd8-b02b-19ef72b8696d.",
    icon: Star,
    hasCert: true,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    id: 2,
    title: "IBM Data Analysis Internship",
    issuer: "IBM",
    date: "2025",
    desc: "Specialized in Exploratory Data Analysis for streaming media datasets (Netflix content growth). Achieved Grade A.",
    icon: Award,
    hasCert: false,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    id: 3,
    title: "Scaler AI/ML Course Certification",
    issuer: "Scaler",
    date: "2025",
    desc: "Completed advanced modules in predictive modeling, supervised learning, and neural networks fundamentals.",
    icon: CheckCircle,
    hasCert: false,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    id: 4,
    title: "Lead Community Manager",
    issuer: "Techno India University",
    date: "2024 - Present",
    desc: "Leading and managing a student cohort of 500+ members, organizing events, hackathons, and technical workshops.",
    icon: Star,
    hasCert: false,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            Achievements & Certifications
          </motion.h2>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Icon / Marker */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-card shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${item.bg}`}>
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                </div>
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/50 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono px-2 py-1 bg-muted rounded text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {item.date}
                  </span>
                  <span className="text-xs font-semibold text-primary">{item.issuer}</span>
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{item.desc}</p>
                
                {item.hasCert && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="gap-2 w-full sm:w-auto">
                        <ExternalLink className="w-4 h-4" /> View Certificate
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl border-border bg-card">
                      <DialogHeader>
                        <DialogTitle>{item.title} - Certificate</DialogTitle>
                      </DialogHeader>
                      <div className="mt-4 rounded-lg overflow-hidden border border-border">
                        <img 
                          src={`${import.meta.env.BASE_URL}techno-billion-cert.jpeg`} 
                          alt="Techno Billion AI Virtual Internship Certificate" 
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
