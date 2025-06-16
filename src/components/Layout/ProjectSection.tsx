import { portfolioData } from "../../api/data";
import { Card } from "../Card";
import { Carousel } from "../Carousel";
import { AnimatedShinyText } from "../ShinyText";

export const ProjectSection = () => {
  const { projects } = portfolioData;

  return (
    // TODO: Implement the project section
    <section className="px-4 sm:px-6 lg:px-8  flex justify-center items-center flex-col gap-10">
      <AnimatedShinyText
        className="text-3xl text-primary text-left"
        shimmerWidth={100}
      >
        Projetos
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
            image={`../src/assets/${project.image}`}
          />
        ))}
      </Carousel>
    </section>
  );
};
