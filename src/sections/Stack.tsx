import { motion } from "motion/react";
import { SKILLS } from "../data/portfolio";
import { SectionTitle } from "../components/Common";

export const Stack = () => {
  return (
    <section id="stack" className="py-24 px-6 bg-zinc-900/30">
      <div className="max-w-4xl mx-auto">
        <SectionTitle subtitle="Tecnologias que utilizo para dar vida a projetos robustos.">
          Minha Stack
        </SectionTitle>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-emerald-500/50 transition-all"
            >
              <span className="font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors">
                {skill.name}
              </span>
              {skill.isLearning && (
                <span className="mt-2 text-[10px] uppercase tracking-tighter bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-full">
                  Em aprendizado
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
