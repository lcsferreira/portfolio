import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { portfolioData } from "../api/data";
import type { IPortfolioData } from "../api/data";

export type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  getTranslatedPortfolioData: () => IPortfolioData;
}

const translations = {
  pt: {
    // Header
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.experience": "Experiência",
    "nav.contact": "Contato",

    // Hero Section
    "hero.greeting": "Olá, eu sou",
    "hero.title": "Desenvolvedor Full Stack",
    "hero.subtitle":
      "Especializado em criar soluções digitais inovadoras com foco em experiência do usuário e performance.",
    "hero.cta": "Ver Projetos",
    "hero.contact": "Entre em Contato",

    // About Section
    "about.title": "Sobre Mim",
    "about.description":
      "Desenvolvedor apaixonado por tecnologia com experiência em desenvolvimento full stack. Focado em criar soluções eficientes e inovadoras.",
    "about.yearsOf": "Anos de",
    "about.experience": "Experiência",

    // Projects Section
    "projects.title": "Projetos",
    "projects.subtitle": "Alguns dos meus trabalhos recentes",
    "projects.viewDetails": "Ver Detalhes",

    // Experience Section
    "experience.title": "Experiência Profissional",
    "experience.subtitle": "Minha jornada profissional",
    "experience.description":
      "Desenvolvedor Web com 3 anos de experiência em desenvolvimento front-end, especializado em React e Next.js. Atuei em empresa de grande escala, startup e até mesmo como único desenvolvedor de um projeto, tenho proatividade para resolver diversos tipos de problemas, além de uma comunicação ativa e fluente.",

    // Contact Section
    "contact.title": "Contato",
    "contact.subtitle":
      "Estou sempre aberto a novas oportunidades e projetos interessantes.",
    "contact.name": "Nome",
    "contact.email": "Email",
    "contact.message": "Mensagem",
    "contact.send": "Enviar",
    "contact.workTogether": "Vamos trabalhar juntos!",
    "contact.available":
      "Estou disponível para conversar sobre projetos, oportunidades de trabalho ou simplesmente para bater um papo.",
    "contact.whatsappNote":
      'Ao clicar em "Enviar", você será redirecionado para o WhatsApp com a mensagem preenchida automaticamente.',
    "contact.greeting": "Olá, meu nome é",

    // Footer
    "footer.rights": "Todos os direitos reservados.",

    // Project Details
    "projectDetails.notFound": "Projeto não encontrado",
    "projectDetails.back": "Voltar",
    "projectDetails.description": "Descrição",
    "projectDetails.visitProject": "Visitar Projeto",
    "projectDetails.technologies": "Tecnologias",
    "projectDetails.features": "Funcionalidades Principais",
    "projectDetails.prevScreenshot": "Screenshot anterior",
    "projectDetails.nextScreenshot": "Próximo screenshot",
    "projectDetails.goToScreenshot": "Ir para screenshot",
    "projectDetails.counter": "de",

    // Common
    "common.loading": "Carregando...",
    "common.error": "Ops! Algo deu errado.",
    "common.retry": "Tentar Novamente",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    // Hero Section
    "hero.greeting": "Hi, I am",
    "hero.title": "Full Stack Developer",
    "hero.subtitle":
      "Specialized in creating innovative digital solutions focused on user experience and performance.",
    "hero.cta": "View Projects",
    "hero.contact": "Get In Touch",

    // About Section
    "about.title": "About Me",
    "about.description":
      "Technology passionate developer with experience in full stack development. Focused on creating efficient and innovative solutions.",
    "about.yearsOf": "Years of",
    "about.experience": "Experience",

    // Projects Section
    "projects.title": "Projects",
    "projects.subtitle": "Some of my recent work",
    "projects.viewDetails": "View Details",

    // Experience Section
    "experience.title": "Work Experience",
    "experience.subtitle": "My professional journey",
    "experience.description":
      "Web Developer with 3 years of experience in front-end development, specialized in React and Next.js. I have worked in large-scale companies, startups and even as the sole developer of a project, I have the proactivity to solve various types of problems, in addition to active and fluent communication.",

    // Contact Section
    "contact.title": "Contact",
    "contact.subtitle":
      "I'm always open to new opportunities and interesting projects.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send",
    "contact.workTogether": "Let's work together!",
    "contact.available":
      "I'm available to talk about projects, job opportunities, or just to have a chat.",
    "contact.whatsappNote":
      'By clicking "Send", you will be redirected to WhatsApp with the message automatically filled.',
    "contact.greeting": "Hi, my name is",

    // Footer
    "footer.rights": "All rights reserved.",

    // Project Details
    "projectDetails.notFound": "Project not found",
    "projectDetails.back": "Back",
    "projectDetails.description": "Description",
    "projectDetails.visitProject": "Visit Project",
    "projectDetails.technologies": "Technologies",
    "projectDetails.features": "Key Features",
    "projectDetails.prevScreenshot": "Previous screenshot",
    "projectDetails.nextScreenshot": "Next screenshot",
    "projectDetails.goToScreenshot": "Go to screenshot",
    "projectDetails.counter": "of",

    // Common
    "common.loading": "Loading...",
    "common.error": "Oops! Something went wrong.",
    "common.retry": "Try Again",
  },
};

// Traduções específicas dos dados do portfolio
const portfolioTranslations = {
  pt: {
    // Dados pessoais
    title: "Desenvolvedor de Software",
    description:
      "Sempre fui um ensiasta da tecnologia, adorava video-games e aos 15 anos comecei a estudar programação. Iniciando com o clássico C. Ao passar para faculdade, comecei a estudar Java, Python, Javascript, entre outras linguagens. Foi aí que me deparei com a programação web e me apaixonei pelo desenvolvimento. Poder criar soluções versáteis e escaláveis é o que me motiva a continuar aprendendo e me desafiando.",

    // Projetos
    projects: {
      "GoPA! Workflow": {
        title: "GoPA! Workflow",
        description:
          "Sistema para preenchimento e gerenciamento de dados de saúde e atividade física para o Observatório Global de Atividade Física (GoPA!).",
        longDescription:
          "O GoPA! Workflow é uma plataforma web desenvolvida para otimizar o fluxo de coleta, revisão e validação de dados científicos de atividade física de países ao redor do mundo. O sistema foi projetado para substituir um processo anterior baseado em planilhas e e-mails, introduzindo um ambiente centralizado e padronizado. A plataforma gerencia todo o ciclo de vida da criação dos 'Cards' de países, desde o cadastro inicial de contatos e o preenchimento de dados científicos, passando por múltiplas etapas de revisão e aprovação por administradores, até a validação final do design do card pelos contatos de cada país. Além disso, o sistema inclui um módulo de tradução e validação para adaptar o conteúdo para os idiomas locais, garantindo a precisão e a colaboração eficiente em escala global.",
        role: "Engenheiro de Software",
        features: [
          "Gerenciamento de países e contatos com sistema de permissões.",
          "Fluxo de trabalho multifásico (Coleta, Revisão, Validação e Tradução).",
          "Formulários estruturados para submissão de dados científicos.",
          "Sistema de notificação por e-mail para comunicação entre admins e contatos.",
          "Dashboard administrativo para monitoramento do progresso de cada país.",
          "Módulo de revisão com aprovação e solicitação de ajustes.",
          "Funcionalidade de tradução e validação de conteúdo para múltiplos idiomas.",
        ],
      },
      "GoPE! Workflow": {
        title: "GoPE! Workflow",
        description:
          "Sistema para preenchimento e gerenciamento de dados de saúde e atividade física para o Observatório Global de Educação Física (GoPE!)",
        longDescription:
          "O GoPE! Workflow é uma plataforma web desenvolvida para otimizar o fluxo de coleta, revisão e validação de dados científicos de atividade física de países ao redor do mundo. A plataforma gerencia todo o ciclo de vida da criação dos 'Cards' de países, desde o cadastro inicial de contatos e o preenchimento de dados científicos, passando por múltiplas etapas de revisão e aprovação por administradores, até a validação final do design do card pelos contatos de cada país. Além disso, o sistema inclui um módulo de tradução e validação para adaptar o conteúdo para os idiomas locais, garantindo a precisão e a colaboração eficiente em escala global.",
        role: "Engenheiro de Software",
        features: [
          "Gerenciamento de países e contatos com sistema de permissões.",
          "Fluxo de trabalho multifásico (Coleta, Revisão, Validação e Tradução).",
          "Formulários estruturados para submissão de dados científicos.",
          "Sistema de notificação por e-mail para comunicação entre admins e contatos.",
          "Dashboard administrativo para monitoramento do progresso de cada país.",
          "Módulo de revisão com aprovação e solicitação de ajustes.",
          "Funcionalidade de tradução e validação de conteúdo para múltiplos idiomas.",
        ],
      },
      Enersmart: {
        title: "Enersmart",
        description:
          "Plataforma integrada para dimensionamento, gestão e operação de projetos com armazenamento de energia em baterias (BESS).",
        longDescription:
          "O EnerSmart é um ecossistema de software desenvolvido pela NewCharge para abranger todo o pipeline de projetos com sistemas de armazenamento. A plataforma é dividida em duas frentes principais: Ferramentas de Dimensionamento (On-Grid e Off-Grid) e um Sistema de Gestão de Energia (EMS). As ferramentas de dimensionamento utilizam algoritmos de computação evolucionária e simulação horária para otimizar o investimento e o retorno financeiro, seja para reduzir a conta de energia em sistemas conectados à rede ou para garantir a melhor combinação de solar, baterias e diesel em sistemas isolados. O EMS, por sua vez, é a solução de monitoramento e controle em tempo real que toma decisões inteligentes sobre carga/descarga das baterias, uso da rede ou geradores, e implementa estratégias como peak-shaving e load-shifting para maximizar a eficiência e a economia na fase de operação.",
        role: "Desenvolvedor Front-end",
        features: [
          "Dashboard em tempo real com dados de consumo e geração de energia",
          "Sistema de gerenciamento de projetos",
          "Monitoramento de baterias e equipamentos",
          "Diagrama SCADA para monitoramento em tempo real",
          "Sistema de notificações e alertas",
          "Formulários complexos e dinâmicos para dimensionamento de projetos com armazenamento de energia em baterias",
        ],
      },
    },

    // Experiências de trabalho
    workExperience: {
      "NewCharge Energy": {
        role: "Desenvolvedor Front-end Júnior",
        responsibilities: [
          "Responsável por 3 SAAS desenvolvidos em React TS / React JS",
          "Responsável por criar features e dar manutenção ao código",
          "Forte participação nas tomadas de decisão e regras de negócio",
          "Elaboração de documentação",
          "Análise de requisitos",
          "Responsável por auxiliar novos integrantes do time",
          "Conduzir calls e apresentar progresso ao restante da empresa",
        ],
      },
      "GoPE!": {
        role: "Engenheiro de Software",
        responsibilities: [
          "Responsável pela análise de requisito e contato com clientes do exterior (Universidade do Texas)",
          "Responsável pelo design do sistema",
          "Responsável pela arquitetura e manutenção do banco de dados em MySQL",
          "Responsável pelo desenvolvimento e manutenção do código em PHP",
        ],
      },
      "GoPA!": {
        role: "Engenheiro de Software",
        responsibilities: [
          "Responsável pela análise de requisito e contato com clientes do exterior (Colômbia)",
          "Responsável pelo design do sistema",
          "Responsável pela arquitetura e manutenção do banco de dados em MySQL",
          "Responsável pelo desenvolvimento e manutenção do código em PHP e JavaScript",
        ],
      },
      Globant: {
        role: "Estagiário em Desenvolvimento de Software",
        responsibilities: [
          "Estudos em Frameworks Front-End (React e Angular) e Back-End (Spring e .NET)",
          "Desenvolvimento de features em projeto de grande escala em React e Angular",
          "Manutenção de código em React e Angular",
        ],
      },
    },

    // Outros dados
    graduation: "Ciência da Computação",
    university: "UFPEL",
    expertiseAreas: ["Desenvolvimento Front-end"],
    methodologies: ["Scrum", "Kanban", "Desenvolvimento Ágil"],
    languageLevels: {
      Básico: "Básico",
      Intermediário: "Intermediário",
      Avançado: "Avançado",
      Nativo: "Nativo",
    },
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
  },
  en: {
    // Personal data
    title: "Software Developer",
    description:
      "I've always been a technology enthusiast, loved video games and at age 15 I started studying programming. Starting with the classic C. When I went to college, I started studying Java, Python, Javascript, among other languages. That's when I came across web programming and fell in love with development. Being able to create versatile and scalable solutions is what motivates me to keep learning and challenging myself.",

    // Projects
    projects: {
      "GoPA! Workflow": {
        title: "GoPA! Workflow",
        description:
          "System for filling and managing health and physical activity data for the Global Observatory for Physical Activity (GoPA!).",
        longDescription:
          "GoPA! Workflow is a web platform developed to optimize the flow of collection, review and validation of scientific data on physical activity from countries around the world. The system was designed to replace a previous process based on spreadsheets and emails, introducing a centralized and standardized environment. The platform manages the entire lifecycle of creating country 'Cards', from initial contact registration and filling in scientific data, through multiple stages of review and approval by administrators, to final validation of the card design by contacts from each country. In addition, the system includes a translation and validation module to adapt content to local languages, ensuring accuracy and efficient collaboration on a global scale.",
        role: "Software Engineer",
        features: [
          "Management of countries and contacts with permissions system.",
          "Multi-phase workflow (Collection, Review, Validation and Translation).",
          "Structured forms for submitting scientific data.",
          "Email notification system for communication between admins and contacts.",
          "Administrative dashboard for monitoring each country's progress.",
          "Review module with approval and adjustment requests.",
          "Translation and validation functionality for multiple languages.",
        ],
      },
      "GoPE! Workflow": {
        title: "GoPE! Workflow",
        description:
          "System for filling and managing health and physical activity data for the Global Observatory for Physical Education (GoPE!)",
        longDescription:
          "GoPE! Workflow is a web platform developed to optimize the flow of collection, review and validation of scientific data on physical activity from countries around the world. The platform manages the entire lifecycle of creating country 'Cards', from initial contact registration and filling in scientific data, through multiple stages of review and approval by administrators, to final validation of the card design by contacts from each country. In addition, the system includes a translation and validation module to adapt content to local languages, ensuring accuracy and efficient collaboration on a global scale.",
        role: "Software Engineer",
        features: [
          "Management of countries and contacts with permissions system.",
          "Multi-phase workflow (Collection, Review, Validation and Translation).",
          "Structured forms for submitting scientific data.",
          "Email notification system for communication between admins and contacts.",
          "Administrative dashboard for monitoring each country's progress.",
          "Review module with approval and adjustment requests.",
          "Translation and validation functionality for multiple languages.",
        ],
      },
      Enersmart: {
        title: "Enersmart",
        description:
          "Integrated platform for sizing, management and operation of battery energy storage (BESS) projects.",
        longDescription:
          "EnerSmart is a software ecosystem developed by NewCharge to cover the entire pipeline of projects with storage systems. The platform is divided into two main fronts: Sizing Tools (On-Grid and Off-Grid) and an Energy Management System (EMS). The sizing tools use evolutionary computing algorithms and hourly simulation to optimize investment and financial return, whether to reduce energy bills in grid-connected systems or to ensure the best combination of solar, batteries and diesel in isolated systems. The EMS, in turn, is the real-time monitoring and control solution that makes intelligent decisions about battery charging/discharging, grid or generator usage, and implements strategies such as peak-shaving and load-shifting to maximize efficiency and savings in the operation phase.",
        role: "Front-end Developer",
        features: [
          "Real-time dashboard with energy consumption and generation data",
          "Project management system",
          "Battery and equipment monitoring",
          "SCADA diagram for real-time monitoring",
          "Notification and alert system",
          "Complex and dynamic forms for battery energy storage project sizing",
        ],
      },
    },

    // Work experience
    workExperience: {
      "NewCharge Energy": {
        role: "Junior Front-end Developer",
        responsibilities: [
          "Responsible for 3 SAAS developed in React TS / React JS",
          "Responsible for creating features and maintaining code",
          "Strong participation in decision making and business rules",
          "Documentation development",
          "Requirements analysis",
          "Responsible for helping new team members",
          "Conduct calls and present progress to the rest of the company",
        ],
      },
      "GoPE!": {
        role: "Software Engineer",
        responsibilities: [
          "Responsible for requirements analysis and contact with foreign clients (University of Texas)",
          "Responsible for system design",
          "Responsible for architecture and maintenance of MySQL database",
          "Responsible for development and maintenance of PHP code",
        ],
      },
      "GoPA!": {
        role: "Software Engineer",
        responsibilities: [
          "Responsible for requirements analysis and contact with foreign clients (Colombia)",
          "Responsible for system design",
          "Responsible for architecture and maintenance of MySQL database",
          "Responsible for development and maintenance of PHP and JavaScript code",
        ],
      },
      Globant: {
        role: "Software Development Intern",
        responsibilities: [
          "Studies in Front-End (React and Angular) and Back-End (Spring and .NET) Frameworks",
          "Feature development in large-scale React and Angular projects",
          "Code maintenance in React and Angular",
        ],
      },
    },

    // Other data
    graduation: "Computer Science",
    university: "UFPEL",
    expertiseAreas: ["Front-end Development"],
    methodologies: ["Scrum", "Kanban", "Agile Development"],
    languageLevels: {
      Básico: "Basic",
      Intermediário: "Intermediate",
      Avançado: "Advanced",
      Nativo: "Native",
    },
    certifications: ["React Training - Alura"],
    hobbiesInterests: [
      "Basketball",
      "Soccer",
      "Formula 1",
      "Counter Strike",
      "Call of Duty",
      "Movies",
      "TV Series",
    ],
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("pt"); // Português como padrão

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["pt"]] || key
    );
  };

  const getTranslatedPortfolioData = (): IPortfolioData => {
    const currentTranslations = portfolioTranslations[language];

    return {
      ...portfolioData,
      title: currentTranslations.title,
      description: currentTranslations.description,
      graduation: currentTranslations.graduation,
      projects: portfolioData.projects.map((project) => ({
        ...project,
        title:
          currentTranslations.projects[
            project.title as keyof typeof currentTranslations.projects
          ]?.title || project.title,
        description:
          currentTranslations.projects[
            project.title as keyof typeof currentTranslations.projects
          ]?.description || project.description,
        longDescription:
          currentTranslations.projects[
            project.title as keyof typeof currentTranslations.projects
          ]?.longDescription || project.longDescription,
        role:
          currentTranslations.projects[
            project.title as keyof typeof currentTranslations.projects
          ]?.role || project.role,
        features:
          currentTranslations.projects[
            project.title as keyof typeof currentTranslations.projects
          ]?.features || project.features,
      })),
      workExperience: portfolioData.workExperience.map((work) => ({
        ...work,
        role:
          currentTranslations.workExperience[
            work.enterprise as keyof typeof currentTranslations.workExperience
          ]?.role || work.role,
        responsibilities:
          currentTranslations.workExperience[
            work.enterprise as keyof typeof currentTranslations.workExperience
          ]?.responsibilities || work.responsibilities,
      })),
      devInfos: {
        ...portfolioData.devInfos,
        expertiseAreas: currentTranslations.expertiseAreas,
        methodologies: currentTranslations.methodologies,
      },
      languages: portfolioData.languages.map((lang) => ({
        ...lang,
        level:
          (currentTranslations.languageLevels[lang.level] as any) || lang.level,
      })),
      certifications: currentTranslations.certifications,
      hobbiesInterests: currentTranslations.hobbiesInterests,
    };
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t, getTranslatedPortfolioData }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
