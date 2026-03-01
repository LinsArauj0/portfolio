import { Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolio";
import { SectionTitle, Button } from "../components/Common";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-zinc-900/30">
      <div className="max-w-4xl mx-auto text-center">
        <SectionTitle subtitle="Estou sempre aberto a conversar sobre novas oportunidades e projetos interessantes.">
          Vamos construir algo juntos?
        </SectionTitle>
        
        <div className="flex flex-col items-center gap-8">
          <p className="text-zinc-400 text-lg max-w-xl">
            Se você busca um desenvolvedor comprometido com a qualidade técnica e evolução constante, entre em contato.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={PERSONAL_INFO.links.linkedin} icon={Linkedin}>
              LinkedIn
            </Button>
            <Button href={PERSONAL_INFO.links.github} variant="secondary" icon={Github}>
              GitHub
            </Button>
            <Button href={PERSONAL_INFO.links.email} variant="outline" icon={Mail}>
              E-mail
            </Button>
          </div>
        </div>
        
        <footer className="mt-24 pt-8 border-t border-zinc-800 text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Desenvolvido com foco e café.</p>
        </footer>
      </div>
    </section>
  );
};
