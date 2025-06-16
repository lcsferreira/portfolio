import { motion } from "motion/react";
import { useRef } from "react";
import { portfolioData } from "../../api/data";

import ScrollReveal from "../ScrollReveal";
import { AnimatedShinyText } from "../ShinyText";

export const AboutMeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.section
      ref={containerRef}
      className=" flex px-4 sm:px-6 lg:px-8 flex-col"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatedShinyText
        className="text-3xl text-primary text-center"
        shimmerWidth={100}
      >
        Sobre mim
      </AnimatedShinyText>
      <div className="flex justify-center items-center flex-col gap-10">
        <div className="mt-10 flex w-full justify-center">
          <div className="flex justify-end w-[200px] flex-col items-end p-2">
            <p>{portfolioData.graduation}</p>
            <p>{portfolioData.university}</p>
          </div>

          <div className="w-[3px] bg-secondary mx-2" />

          <div className="flex items-center gap-2 p-2 w-[200px] ">
            <p className="text-5xl font-bold">
              {portfolioData.devInfos.yearsOfExperience}
            </p>
            <div className="flex flex-col">
              <p className="font-light">Anos de</p>
              <p className="text-xl">Experiência</p>
            </div>
          </div>
        </div>
        <ScrollReveal
          textClassName="text-2xl max-w-4xl"
          baseOpacity={0.3}
          enableBlur={true}
          baseRotation={0}
          blurStrength={3}
          wordAnimationEnd="top center"
        >
          {portfolioData.description}
        </ScrollReveal>
      </div>
    </motion.section>
  );
};
