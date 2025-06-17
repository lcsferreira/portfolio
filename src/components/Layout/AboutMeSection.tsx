import { motion } from "motion/react";
import { useRef } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

import ScrollReveal from "../ScrollReveal";
import { AnimatedShinyText } from "../ShinyText";

export const AboutMeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t, getTranslatedPortfolioData } = useLanguage();
  const translatedData = getTranslatedPortfolioData();

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
        {t("about.title")}
      </AnimatedShinyText>
      <div className="flex justify-center items-center flex-col gap-10">
        <div className="mt-10 flex w-full justify-center">
          <div className="flex justify-end w-[200px] flex-col items-end p-2">
            <p className="text-theme-secondary">{translatedData.graduation}</p>
            <p className="text-theme-secondary">{translatedData.university}</p>
          </div>

          <div className="w-[3px] bg-secondary mx-2" />

          <div className="flex items-center gap-2 p-2 w-[200px] ">
            <p className="text-5xl font-bold text-theme-primary">
              {translatedData.devInfos.yearsOfExperience}
            </p>
            <div className="flex flex-col">
              <p className="font-light text-theme-secondary">
                {t("about.yearsOf")}
              </p>
              <p className="text-xl text-theme-primary">
                {t("about.experience")}
              </p>
            </div>
          </div>
        </div>
        <ScrollReveal
          textClassName="text-xl lg:text-2xl max-w-4xl text-center lg:text-left text-theme-secondary"
          baseOpacity={0.3}
          enableBlur={true}
          baseRotation={0}
          blurStrength={3}
          wordAnimationEnd="top center"
        >
          {translatedData.description}
        </ScrollReveal>
      </div>
    </motion.section>
  );
};
