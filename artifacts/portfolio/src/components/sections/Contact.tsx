import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Send, Mail, Github, Linkedin, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  botcheck: z.string().max(0, "Bot detected"), // Honeypot
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      botcheck: "",
    }
  });

  const onSubmit = (data: ContactFormValues) => {
    if (data.botcheck.length > 0) return; // Silent fail for bots

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative bg-card/30 border-t border-border/50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Let's Connect</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Whether you want to discuss a game dev project, an AI collaboration, or just say hi, my inbox is always open.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors border border-primary/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-mono">Email</p>
                  <a href="mailto:karmmitaml@gmail.com" className="text-lg font-medium hover:text-primary transition-colors">karmmitaml@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors border border-secondary/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-mono">Location</p>
                  <p className="text-lg font-medium">Techno India University, Kolkata</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm font-bold text-foreground mb-4 uppercase tracking-widest">Connect Internally</p>
              <div className="flex gap-4">
                <a href="https://github.com/Readerrss" target="_blank" rel="noreferrer" className="bg-card border border-border p-3 rounded-lg hover:border-primary hover:text-primary transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/mitadru-karmakar-483274319" target="_blank" rel="noreferrer" className="bg-card border border-border p-3 rounded-lg hover:border-secondary hover:text-secondary transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cyber-border bg-card p-1 rounded-2xl"
          >
            <div className="bg-card/90 backdrop-blur-sm p-8 rounded-xl h-full">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              {isSuccess ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 p-6 rounded-xl text-center py-16 animate-in fade-in zoom-in duration-300">
                  <CheckCircle className="w-16 h-16 mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                  <p>Thanks for reaching out. I'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Honeypot */}
                  <input type="text" style={{ display: 'none' }} {...register("botcheck")} />

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-foreground/80">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="John Doe"
                      {...register("name")}
                    />
                    {errors.name && <p className="text-destructive text-sm mt-1.5">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-foreground/80">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="john@example.com"
                      {...register("email")}
                    />
                    {errors.email && <p className="text-destructive text-sm mt-1.5">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1.5 text-foreground/80">Subject</label>
                    <input
                      id="subject"
                      type="text"
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="Collaboration Opportunity"
                      {...register("subject")}
                    />
                    {errors.subject && <p className="text-destructive text-sm mt-1.5">{errors.subject.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-foreground/80">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                      placeholder="Tell me about your project..."
                      {...register("message")}
                    ></textarea>
                    {errors.message && <p className="text-destructive text-sm mt-1.5">{errors.message.message}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-12 text-base font-semibold"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" /> Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
