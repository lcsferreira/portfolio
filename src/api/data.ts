interface IProjectData {
  title: string;
  description: string;
  link: string;
  image: string;
}

interface IWorkExperience {
  role: string;
  enterprise: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  technologiesUsed: string[];
}

interface IDevInfos {
  technologies: ITechnology[];
  yearsOfExperience: number;
  expertiseAreas: string[];
  methodologies: string[];
}

interface ILanguage {
  name: string;
  level: "Básico" | "Intermediário" | "Avançado" | "Nativo";
}

export interface ITechnology {
  name: string;
  icon: string;
}

interface ISocial {
  name: string;
  link: string;
}

interface IPortfolioData {
  name: string;
  title: string;
  email: string;
  phone: string;
  description: string;
  projects: IProjectData[];
  workExperience: IWorkExperience[];
  graduation: string;
  university: string;
  graduationYear: string;
  devInfos: IDevInfos;
  languages: ILanguage[];
  certifications: string[]; // Lista de certificações relevantes
  hobbiesInterests: string[]; // Opcional: para dar um toque pessoal
  social: ISocial[];
}

export const portfolioData: IPortfolioData = {
  name: "Lucas Ferreira",
  title: "Web Software Developer",
  email: "lucas.simoes.ferreira@gmail.com",
  phone: "+55 (53) 99938-4646",
  description:
    "Desenvolvedor Web com 3 anos de experiência em desenvolvimento front-end, especializado em React e Next.js. Atuei em empresa de grande escala, startup e até mesmo como único desenvolvedor de um projeto, tenho proatividade para resolver diversos tipos de problemas, além de uma comunicação ativa e fluente.",
  projects: [
    {
      title: "E-commerce Completo (Front-end)",
      description:
        "Desenvolvimento do front-end de uma plataforma de e-commerce responsiva com integração de APIs de pagamento e carrinho de compras.",
      link: "https://www.ecommerce-exemplo.com",
      image:
        "https://via.placeholder.com/400x250/007bff/ffffff?text=E-commerce+Front",
    },
    {
      title: "API de Gerenciamento de Tarefas",
      description:
        "Criação de uma API RESTful robusta para gerenciar tarefas, usuários e autenticação, utilizando Node.js e MongoDB.",
      link: "https://github.com/lucasferreira-dev/task-manager-api",
      image: "https://via.placeholder.com/400x250/28a745/ffffff?text=API+Tasks",
    },
    {
      title: "Aplicativo Mobile de Saúde (MVP)",
      description:
        "Desenvolvimento de um MVP de aplicativo mobile para monitoramento de saúde, focado na coleta e visualização de dados de bem-estar.",
      link: "https://www.app-saude-mvp.com",
      image:
        "https://via.placeholder.com/400x250/ffc107/343a40?text=App+Mobile+Saúde",
    },
  ],
  workExperience: [
    {
      role: "Desenvolvedor Front-end Sênior",
      enterprise: "Tech Solutions S.A.",
      startDate: "Janeiro 2022",
      endDate: "Atual",
      responsibilities: [
        "Liderar equipes de desenvolvedores front-end, mentorando juniores e plenos.",
        "Definir arquitetura e padrões de desenvolvimento para novos projetos.",
        "Colaborar com equipes de design e backend para garantir a integração perfeita.",
        "Realizar code reviews e garantir a qualidade do código.",
      ],
      technologiesUsed: [
        "React",
        "Next.js",
        "TypeScript",
        "GraphQL",
        "Jest",
        "Cypress",
      ],
    },
    {
      role: "Desenvolvedor Full-stack Pleno",
      enterprise: "Inovatech Ltda.",
      startDate: "Março 2019",
      endDate: "Dezembro 2021",
      responsibilities: [
        "Desenvolver novas funcionalidades para aplicações web existentes.",
        "Realizar manutenção e otimização de banco de dados.",
        "Participar do ciclo completo de desenvolvimento de software, desde o planejamento à implantação.",
      ],
      technologiesUsed: [
        "Vue.js",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "AWS",
      ],
    },
  ],
  social: [
    {
      name: "GitHub",
      link: "https://github.com/lucasferreira-dev",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/lucas-ferreira-dev/",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/lucasferreira-dev/",
    },
  ],
  devInfos: {
    technologies: [
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
    ],
    yearsOfExperience: 3,
    expertiseAreas: ["Desenvolvimento Front-end"],
    methodologies: ["Scrum", "Kanban", "Desenvolvimento Ágil"],
  },
  graduation: "Ciência da Computação",
  university: "UFPEL",
  graduationYear: "2018",
  languages: [
    {
      level: "Avançado",
      name: "Inglês",
    },
  ],
  certifications: ["Formação React - Alura"],
  hobbiesInterests: [
    "Basquete",
    "Futebol",
    "Formula 1",
    "Counter Strike",
    "Call of Duty",
    "Filmes",
    "Séries",
  ],
};
