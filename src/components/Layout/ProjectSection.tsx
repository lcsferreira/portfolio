import { portfolioData } from "../../api/data";
import { Card } from "../Card";
import { Carousel } from "../Carousel";

export const ProjectSection = () => {
  const { projects } = portfolioData;

  return (
    // TODO: Implement the project section
    <section className="px-4 sm:px-6 lg:px-8  flex justify-center items-center flex-col gap-10">
      <h2 className="self-center text-3xl text-text-secondary ">Projetos</h2>
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
            image={project.image}
          />
        ))}
      </Carousel>
    </section>
  );
};
