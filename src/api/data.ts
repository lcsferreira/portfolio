interface IProjectData {
  title: string;
  description: string;
  link: string;
  image: string;
}

export interface IWorkExperience {
  role: string;
  enterprise: string;
  enterpriseLink: string;
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
  phone: "+5553999384646",
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
      role: "Desenvolvedor Front-end Júnior",
      enterprise: "NewCharge Energy",
      enterpriseLink: "https://newcharge.com.br",
      startDate: "Mar 2024",
      endDate: "Atual",
      responsibilities: [
        "Responsável por 3 SAAS desenvolvidos em React TS / React JS",
        "Responsável por criar features e dar manutenção ao código",
        "Forte participação nas tomadas de decisão e regras de negócio",
        "Elaboração de documentação",
        "Análise de requisitos",
        "Responsável por auxiliar novos integrantes do time",
        "Conduzir calls e apresentar progresso ao restante da empresa",
      ],
      technologiesUsed: [
        "React",
        "TypeScript",
        "Webscoket",
        "Stripe",
        "Tailwind",
        "Material UI",
        "AWS",
        "Serverless",
      ],
    },
    {
      role: "Engenheiro de Software",
      enterprise: "GoPE!",
      enterpriseLink:
        "https://www.linkedin.com/company/global-observatory-for-physical-education",
      startDate: "Jan 2024",
      endDate: "Dez 2024",
      responsibilities: [
        "Responsável pela análise de requisito e contato com clientes do exterior (Universidade do Texas)",
        "Responsável pelo design do sistema",
        "Responsável pela arquitetura e manutenção do banco de dados em MySQL",
        "Responsável pelo desenvolvimento e manutenção do código em PHP",
      ],
      technologiesUsed: ["PHP", "MySQL", "JavaScript", "JQuery"],
    },
    {
      role: "Engenheiro de Software",
      enterprise: "GoPA!",
      enterpriseLink: "https://new.globalphysicalactivityobservatory.com/",
      startDate: "Ago 2022",
      endDate: "Ago 2023",
      responsibilities: [
        "Responsável pela análise de requisito e contato com clientes do exterior (Colômbia)",
        "Responsável pelo design do sistema",
        "Responsável pela arquitetura e manutenção do banco de dados em MySQL",
        "Responsável pelo desenvolvimento e manutenção do código em PHP e JavaScript",
      ],
      technologiesUsed: ["PHP", "MySQL", "JavaScript", "JQuery"],
    },
    {
      role: "Estagiário em Desenvolvimento de Software",
      enterprise: "Globant",
      enterpriseLink: "https://www.globant.com/",
      startDate: "Ago 2021",
      endDate: "Ago 2022",
      responsibilities: [
        "Estudos em Frameworks Front-End (React e Angular) e Back-End (Spring e .NET)",
        "Desenvolvimento de features em projeto de grande escala em React e Angular",
        "Manutenção de código em React e Angular",
      ],
      technologiesUsed: ["React", "Angular", "Spring", ".NET"],
    },
  ],
  social: [
    {
      name: "GitHub",
      link: "https://github.com/lcsferreira",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/ls-oferreira/",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/ls_oferreira/",
    },
    {
      name: "Email",
      link: "mailto:lucas.simoes.ferreira@gmail.com",
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
    yearsOfExperience: 4,
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
