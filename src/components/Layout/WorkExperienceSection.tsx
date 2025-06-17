import AnimatedList from "../AnimatedList";
import { AnimatedShinyText } from "../ShinyText";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

export const WorkExperienceSection = () => {
  const { t, getTranslatedPortfolioData } = useLanguage();
  const { workExperience } = getTranslatedPortfolioData();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="flex flex-col gap-8 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Coluna esquerda - Texto e Estatísticas */}
        <div className="flex flex-col gap-6 lg:w-1/2">
          <motion.div
            className="flex flex-col gap-4 py-4"
            variants={itemVariants}
          >
            <AnimatedShinyText
              className="text-2xl sm:text-3xl text-center lg:text-left"
              shimmerWidth={100}
            >
              {t("experience.title")}
            </AnimatedShinyText>
            <p className="text-theme-secondary text-lg lg:text-xl  text-center lg:text-left">
              {t("experience.description")}
            </p>
          </motion.div>
        </div>

        {/* Coluna direita - Lista de Experiências */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          variants={itemVariants}
        >
          <div className="w-full max-w-4xl">
            <AnimatedList
              items={workExperience}
              showGradients={true}
              enableArrowNavigation={true}
              displayScrollbar={false}
              className="!w-full"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
