import { PROJECTS } from "../data/portfolio";
import { SectionTitle } from "../components/Common";
import { ProjectCard } from "../components/ProjectCard";

export const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle subtitle="Projetos autorais focados em resolver problemas reais com arquitetura sólida.">
          Projetos em Destaque
        </SectionTitle>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id}>
              <ProjectCard key={project.id} project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
