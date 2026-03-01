import { motion } from "motion/react";
import { Github, Linkedin, ChevronDown } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolio";
import { Button } from "../components/Common";

export const Hero = () => {
  return (
    <section className="min-h-[85vh] md:min-h-[100dvh] flex flex-col justify-start md:justify-center relative overflow-hidden px-6 pt-20 md:pt-0 pb-12 md:pb-0">
      
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-4 block">
            Disponível para novos desafios
          </span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
            {PERSONAL_INFO.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-zinc-400 font-medium mb-8">
            {PERSONAL_INFO.role} <span className="text-zinc-600">|</span> <span className="text-gradient">Backend Specialist</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl leading-relaxed mb-10">
            {PERSONAL_INFO.description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button href={PERSONAL_INFO.links.github} icon={Github}>
              GitHub
            </Button>
            <Button href={PERSONAL_INFO.links.linkedin} variant="outline" icon={Linkedin}>
              LinkedIn
            </Button>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 animate-bounce"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};
