import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "../data/portfolio";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group glass-card p-6 rounded-2xl hover:border-emerald-500/30 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500">
          <Github size={24} />
        </div>
        <a 
          href={project.githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-emerald-400 transition-colors"
        >
          <ExternalLink size={20} />
        </a>
      </div>
      
      <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-zinc-400 text-sm leading-relaxed mb-6">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.technologies.map((tech) => (
          <span 
            key={tech} 
            className="px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
