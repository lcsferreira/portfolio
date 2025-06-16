import { portfolioData } from "../../api/data";
import AnimatedList from "../AnimatedList";
import { AnimatedShinyText } from "../ShinyText";

export const WorkExperienceSection = () => {
  const workExperience = portfolioData.workExperience;
  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2 py-4">
          <AnimatedShinyText className="text-3xl text-left" shimmerWidth={100}>
            Experiência Profissional
          </AnimatedShinyText>
          <p className=" text-text-secondary text-lg font-light w-2/3">
            Trabalhei em empresas de grande escala, startups e até mesmo como
            único desenvolvedor de um projeto.
          </p>
        </div>
        <AnimatedList
          items={workExperience}
          showGradients={true}
          enableArrowNavigation={true}
          displayScrollbar={false}
        />
      </div>
    </section>
  );
};
