interface IPortfolioData {
  name: string;
  title: string;
  email: string;
  phone: string;
  projects: IProjectData[];
}

interface IProjectData {
  title: string;
  description: string;
  link: string;
  image: string;
}

export const portfolioData: IPortfolioData = {
  name: "Lucas Ferreira",
  title: "Web Software Developer",
  email: "lsferreira.dev@gmail.com",
  phone: "+55 (11) 99999-9999",
  projects: [
    {
      title: "Project 1",
      description: "Description of Project 1",
      link: "https://www.google.com",
      image:
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    },
    {
      title: "Project 2",
      description: "Description of Project 2",
      link: "https://www.google.com",
      image:
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    },
    {
      title: "Project 3",
      description: "Description of Project 3",
      link: "https://www.google.com",
      image:
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    },
  ],
};
