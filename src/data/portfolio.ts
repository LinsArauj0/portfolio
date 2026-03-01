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
    description: 'API REST para gerenciamento de categorias e transações financeiras, refatorada com Express para melhorar organização de rotas, middlewares e escalabilidade do backend.',
    technologies: ['Node.js', 'TypeScript', 'Express', 'MySQL', 'REST'],
    githubUrl: 'https://github.com/LinsArauj0/api-finance-node-ts'
  },
  {
    id: 'api-todo',
    title: 'API To-Do',
    description: 'API REST de gerenciamento de tarefas com arquitetura em camadas, focada em manutenibilidade, organização e escalabilidade do backend.',
    technologies: ['Node.js', 'TypeScript', 'MySQL', 'Clean Architecture'],
    githubUrl: 'https://github.com/LinsArauj0/api-todo-node-ts'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Node.js' },
  { name: 'TypeScript' },
  { name: 'MySQL' },
  { name: 'Express', isLearning: true },
  { name: 'NestJS', isLearning: true }
];

export const PERSONAL_INFO = {
  name: 'Érick Lima',
  role: 'Desenvolvedor Backend',
  description: 'Desenvolvedor backend focado em Node.js e TypeScript, criando APIs REST robustas e bem estruturadas.',
  about: 'Sou um desenvolvedor backend apaixonado por arquitetura de software e código limpo. Atualmente, foco em criar soluções robustas utilizando Node.js e TypeScript, sempre buscando as melhores práticas de mercado como Clean Architecture e SOLID. Estou em constante evolução, transitando de Express para NestJS para entregar sistemas ainda mais modulares e testáveis.',
  links: {
    github: 'https://github.com/LinsArauj0',
    linkedin: 'https://www.linkedin.com/in/ericklimaaraujo',
    email: 'mailto:erick.lima64@hotmail.com?subject=Contato pelo portfólio'
  }
};
