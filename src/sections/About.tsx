import { PERSONAL_INFO } from "../data/portfolio";
import { SectionTitle } from "../components/Common";

export const About = () => {
  return (
    <section id="about" className="py-15 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle subtitle="Um pouco sobre minha trajetória e motivações.">
          Sobre mim
        </SectionTitle>
        
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2">
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              {PERSONAL_INFO.about}
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Meu foco principal é a construção de sistemas que não apenas funcionem, mas que sejam fáceis de manter e evoluir. Acredito que o backend é o coração de qualquer aplicação e trato cada linha de código com a seriedade que um produto real exige.
            </p>
          </div>
          
          <div className="glass-card p-6 rounded-2xl">
            <h4 className="font-bold mb-4 text-emerald-400 uppercase text-xs tracking-widest">Foco Atual</h4>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Arquitetura de APIs REST
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Modelagem de Dados SQL
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Clean Code & SOLID
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Transição para NestJS
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
