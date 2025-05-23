import { Card } from "../Card";
import { Carousel } from "../Carousel";

export const ProjectSection = () => {
  return (
    // TODO: Implement the project section
    <section className="py-24 px-4 sm:px-6 lg:px-8 h-[100vh]">
      <Carousel
        autoPlay={false}
        interval={5000}
        showArrows={true}
        showDots={true}
      >
        <Card
          title="Project 1"
          description="Description of Project 1"
          link="https://www.google.com"
        />
        <Card
          title="Project 2"
          description="Description of Project 2"
          link="https://www.google.com"
        />
        <Card
          title="Project 3"
          description="Description of Project 3"
          link="https://www.google.com"
        />
      </Carousel>
    </section>
  );
};
