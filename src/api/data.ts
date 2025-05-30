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
  technologies: string[];
  yearsOfExperience: number;
  expertiseAreas: string[];
  methodologies: string[];
}

interface ILanguage {
  name: string;
  level: "Básico" | "Intermediário" | "Avançado" | "Nativo";
}

interface IPortfolioData {
  name: string;
  title: string;
  email: string;
  phone: string;
  projects: IProjectData[];
  workExperience: IWorkExperience[];
  graduation: string;
  university: string;
  graduationYear: string;
  devInfos: IDevInfos;
  languages: ILanguage[];
  certifications: string[]; // Lista de certificações relevantes
  hobbiesInterests: string[]; // Opcional: para dar um toque pessoal
}

export const portfolioData: IPortfolioData = {
  name: "Lucas Ferreira",
  title: "Web Software Developer",
  email: "lsferreira.dev@gmail.com",
  phone: "+55 (11) 99999-9999",
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
  devInfos: {
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "HTML5",
      "CSS3",
      "Styled-Components",
      "Git",
      "Docker",
      "AWS (S3, EC2)",
      "GraphQL",
      "RESTful APIs",
    ],
    yearsOfExperience: 5,
    expertiseAreas: [
      "Desenvolvimento Front-end",
      "Desenvolvimento Back-end",
      "Arquitetura de Software",
      "Otimização de Performance",
    ],
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
  certifications: [
    "AWS Certified Developer – Associate",
    "Certified ScrumMaster (CSM)",
    "React – The Complete Guide (Udemy)",
  ],
  hobbiesInterests: [
    "Leitura sobre novas tecnologias",
    "Jogos de tabuleiro",
    "Hiking",
    "Cozinhar",
  ],
};
