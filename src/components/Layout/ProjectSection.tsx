import { Card } from "../Card";
import { Carousel } from "../Carousel";
import { AnimatedShinyText } from "../ShinyText";
import { useLanguage } from "../../contexts/LanguageContext";

export const ProjectSection = () => {
  const { t, getTranslatedPortfolioData } = useLanguage();
  const { projects } = getTranslatedPortfolioData();

  return (
    // TODO: Implement the project section
    <section className="px-4 sm:px-6 lg:px-8  flex justify-center items-center flex-col gap-10">
      <AnimatedShinyText
        className="text-3xl text-primary text-left"
        shimmerWidth={100}
      >
        {t("projects.title")}
      </AnimatedShinyText>
      <Carousel
        autoPlay={false}
        interval={5000}
        showArrows={true}
        showDots={true}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            link={project.link}
            image={`${project.image}`}
          />
        ))}
      </Carousel>
    </section>
  );
};
