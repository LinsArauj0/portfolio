export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

export interface Skill {
  name: string;
  level?: string;
  isLearning?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'api-finance',
    title: 'API Finance',
    description: 'API REST robusta para gerenciamento de finanças pessoais, permitindo o controle detalhado de categorias e transações com foco em performance e segurança.',
    technologies: ['Node.js', 'TypeScript', 'Express', 'MySQL'],
    githubUrl: 'https://github.com/LinsArauj0/api-finance-node-ts'
  },
  {
    id: 'api-todo',
    title: 'API To-Do',
    description: 'Sistema de gerenciamento de tarefas desenvolvido com arquitetura em camadas, garantindo manutenibilidade e escalabilidade do código.',
    technologies: ['Node.js', 'TypeScript', 'Express', 'MySQL'],
    githubUrl: 'https://github.com/ericklima/api-todo'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Node.js' },
  { name: 'TypeScript' },
  { name: 'MySQL' },
  { name: 'Express' },
  { name: 'NestJS', isLearning: true }
];

export const PERSONAL_INFO = {
  name: 'Érick Lima',
  role: 'Desenvolvedor Backend',
  description: 'Desenvolvedor backend focado em Node.js e TypeScript, criando APIs REST robustas e bem estruturadas.',
  about: 'Sou um desenvolvedor backend apaixonado por arquitetura de software e código limpo. Atualmente, foco em criar soluções robustas utilizando Node.js e TypeScript, sempre buscando as melhores práticas de mercado como Clean Architecture e SOLID. Estou em constante evolução, transitando de Express para NestJS para entregar sistemas ainda mais modulares e testáveis.',
  links: {
    github: 'https://github.com/LinsArauj0',
    linkedin: 'https://www.linkedin.com/in/ericklimaaraujo'
  }
};
