interface IProjectData {
  title: string;
  description: string;
  link: string;
  image: string;
  longDescription?: string;
  technologies?: string[];
  features?: string[];
  role?: string;
  startDate?: string;
  endDate?: string;
  screenshots?: string[];
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

export interface IPortfolioData {
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
  title: "Desenvolvedor de Software",
  email: "lucas.simoes.ferreira@gmail.com",
  phone: "+5553999384646",
  description:
    "Sempre fui um entusiasta da tecnologia, adorava video-games e aos 15 anos comecei a estudar programação. Iniciando com o clássico C. Ao passar para faculdade, comecei a estudar Java, Python, Javascript, entre outras linguagens. Foi aí que me deparei com a programação web e me apaixonei pelo desenvolvimento. Poder criar soluções versáteis e escaláveis é o que me motiva a continuar aprendendo e me desafiando.",
  projects: [
    {
      title: "GoPA! Workflow",
      description:
        "Sistema para preenchimento e gerenciamento de dados de saúde e atividade física para o Observatório Global de Atividade Física (GoPA!).",
      link: "https://new.globalphysicalactivityobservatory.com/",
      image: "/projects/gopa/gopa_cover.png",
      screenshots: [
        "/projects/gopa/gopa_cover.png",
        "/projects/gopa/card.png",
        "/projects/gopa/dashboard.png",
        "/projects/gopa/dashboard_2.png",
        "/projects/gopa/edit_country.png",
        "/projects/gopa/indicators.png",
        "/projects/gopa/progress.png",
        "/projects/gopa/translation.png",
      ],
      longDescription:
        "O GoPA! Workflow é uma plataforma web desenvolvida para otimizar o fluxo de coleta, revisão e validação de dados científicos de atividade física de países ao redor do mundo. O sistema foi projetado para substituir um processo anterior baseado em planilhas e e-mails, introduzindo um ambiente centralizado e padronizado. A plataforma gerencia todo o ciclo de vida da criação dos 'Cards' de países, desde o cadastro inicial de contatos e o preenchimento de dados científicos, passando por múltiplas etapas de revisão e aprovação por administradores, até a validação final do design do card pelos contatos de cada país. Além disso, o sistema inclui um módulo de tradução e validação para adaptar o conteúdo para os idiomas locais, garantindo a precisão e a colaboração eficiente em escala global.",
      technologies: [
        "PHP",
        "MySQL",
        "JavaScript",
        "jQuery",
        "HTML",
        "CSS",
        "Bootstrap",
      ],
      features: [
        "Gerenciamento de países e contatos com sistema de permissões.",
        "Fluxo de trabalho multifásico (Coleta, Revisão, Validação e Tradução).",
        "Formulários estruturados para submissão de dados científicos.",
        "Sistema de notificação por e-mail para comunicação entre admins e contatos.",
        "Dashboard administrativo para monitoramento do progresso de cada país.",
        "Módulo de revisão com aprovação e solicitação de ajustes.",
        "Funcionalidade de tradução e validação de conteúdo para múltiplos idiomas.",
      ],
      role: "Engenheiro de Software",
      startDate: "Ago 2022",
      endDate: "Ago 2023",
    },
    {
      title: "GoPE! Workflow",
      description:
        "Sistema para preenchimento e gerenciamento de dados de saúde e atividade física para o Observatório Global de Educação Física (GoPE!)",
      link: "https://www.linkedin.com/company/global-observatory-for-physical-education",
      image: "/projects/gope/gope_cover.png",
      screenshots: [
        "/projects/gope/gope_cover.png",
        "/projects/gope/card.png",
        "/projects/gope/dashboard.png",
        "/projects/gope/dashboard_2.png",
        "/projects/gope/edit_country.png",
        "/projects/gope/indicators.png",
        "/projects/gope/progress.png",
        "/projects/gope/translation.png",
      ],
      longDescription:
        "O GoPE! Workflow é uma plataforma web desenvolvida para otimizar o fluxo de coleta, revisão e validação de dados científicos de atividade física de países ao redor do mundo. A plataforma gerencia todo o ciclo de vida da criação dos 'Cards' de países, desde o cadastro inicial de contatos e o preenchimento de dados científicos, passando por múltiplas etapas de revisão e aprovação por administradores, até a validação final do design do card pelos contatos de cada país. Além disso, o sistema inclui um módulo de tradução e validação para adaptar o conteúdo para os idiomas locais, garantindo a precisão e a colaboração eficiente em escala global.",
      technologies: [
        "PHP",
        "MySQL",
        "JavaScript",
        "jQuery",
        "HTML",
        "CSS",
        "Bootstrap",
      ],
      features: [
        "Gerenciamento de países e contatos com sistema de permissões.",
        "Fluxo de trabalho multifásico (Coleta, Revisão, Validação e Tradução).",
        "Formulários estruturados para submissão de dados científicos.",
        "Sistema de notificação por e-mail para comunicação entre admins e contatos.",
        "Dashboard administrativo para monitoramento do progresso de cada país.",
        "Módulo de revisão com aprovação e solicitação de ajustes.",
        "Funcionalidade de tradução e validação de conteúdo para múltiplos idiomas.",
      ],
      role: "Engenheiro de Software",
      startDate: "Jan 2024",
      endDate: "Dez 2024",
    },
    {
      title: "Enersmart",
      description:
        "Plataforma integrada para dimensionamento, gestão e operação de projetos com armazenamento de energia em baterias (BESS).",
      link: "https://enersmart.com.br/",
      image: "/projects/enersmart/enersmart_cover.png",
      screenshots: ["/projects/enersmart/enersmart_cover.png"],
      longDescription:
        "O EnerSmart é um ecossistema de software desenvolvido pela NewCharge para abranger todo o pipeline de projetos com sistemas de armazenamento. A plataforma é dividida em duas frentes principais: Ferramentas de Dimensionamento (On-Grid e Off-Grid) e um Sistema de Gestão de Energia (EMS). As ferramentas de dimensionamento utilizam algoritmos de computação evolucionária e simulação horária para otimizar o investimento e o retorno financeiro, seja para reduzir a conta de energia em sistemas conectados à rede ou para garantir a melhor combinação de solar, baterias e diesel em sistemas isolados. O EMS, por sua vez, é a solução de monitoramento e controle em tempo real que toma decisões inteligentes sobre carga/descarga das baterias, uso da rede ou geradores, e implementa estratégias como peak-shaving e load-shifting para maximizar a eficiência e a economia na fase de operação.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Material UI",
        "AWS",
        "Serverless",
        "WebSocket",
      ],
      features: [
        "Dashboard em tempo real com dados de consumo e geração de energia",
        "Sistema de gerenciamento de projetos",
        "Monitoramento de baterias e equipamentos",
        "Diagrama SCADA para monitoramento em tempo real",
        "Sistema de notificações e alertas",
        "Formulários complexos e dinâmicos para dimensionamento de projetos com armazenamento de energia em baterias",
      ],
      role: "Desenvolvedor Front-end",
      startDate: "Mar 2024",
      endDate: "Atual",
    },
    {
      title: "NX Suite",
      description:
        "Uma plataforma completa para gestão omnichannel, projetada para unificar e otimizar todas as interações com seus clientes. A solução oferece integração entre canais, proporcionando uma experiência do cliente contínua e eficiente, com módulos adaptáveis às necessidades negócio.",
      link: "https://smartnx.com.br/",
      image: "/projects/smartnx/smartnx_cover.png",
      screenshots: ["/projects/smartnx/smartnx_cover.png"],
      longDescription:
        "O Suite é um software desenvolvido pela SmartNX para gerenciar todas as interações com clientes em múltiplos canais de comunicação. A plataforma integra canais como WhatsApp, SMS, e-mail, chat web, voz e redes sociais, permitindo que as empresas ofereçam uma experiência omnichannel consistente e eficiente. Com módulos personalizáveis, o Suite atende às necessidades específicas de cada negócio, facilitando a gestão de atendimento ao cliente, campanhas de marketing e automação de processos.",
      technologies: [
        "React",
        "TypeScript",
        "Styled Components",
        "React Flow",
        "Docker",
        "Node.js",
        "WebSocket",
      ],
      features: [
        "OmniChannel",
        "Builder de Voz e Texto",
        "Disparo de WPP e integrações entre canais",
        "Dashboard e Analíticos",
      ],
      role: "Desenvolvedor Front-end",
      startDate: "Nov 2025",
      endDate: "Atual",
    },
  ],
  workExperience: [
    {
      role: "Desenvolvedor Front-end Júnior",
      enterprise: "SmartNX",
      enterpriseLink: "https://www.smartnx.com/",
      startDate: "Nov 2025",
      endDate: "Atual",
      responsibilities: [
        "Responsável por implementar features e dar manutenção ao código React TS",
        "Implementação de melhorias ao código existente",
        "Implementação de testes unitários e2e",
        "Elaboração de documentação",
        "Análise de requisitos",
      ],
      technologiesUsed: [
        "React",
        "TypeScript",
        "Webscoket",
        "Styled Components",
        "React Flow",
        "Antd",
        "Node.js",
        "Docker",
      ],
    },
    {
      role: "Desenvolvedor Front-end Júnior",
      enterprise: "NewCharge Energy",
      enterpriseLink: "https://newcharge.com.br",
      startDate: "Mar 2024",
      endDate: "Nov 2025",
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
