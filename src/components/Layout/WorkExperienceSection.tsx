import { portfolioData } from "../../api/data";
import AnimatedList from "../AnimatedList";
import { AnimatedShinyText } from "../ShinyText";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCode,
  FaCalendarAlt,
  FaUsers,
  FaRocket,
} from "react-icons/fa";

export const WorkExperienceSection = () => {
  const workExperience = portfolioData.workExperience;

  // Dados estatísticos derivados da experiência profissional
  const totalExperience = workExperience.length;
  const currentRole = workExperience.find((exp) => exp.endDate === "Atual");
  const allTechnologies = [
    ...new Set(workExperience.flatMap((exp) => exp.technologiesUsed)),
  ];
  const totalTechnologies = allTechnologies.length;

  const stats = [
    {
      icon: FaBriefcase,
      value: totalExperience,
      label: "Experiências",
      color: "text-purple-400",
    },
    {
      icon: FaCode,
      value: totalTechnologies,
      label: "Tecnologias",
      color: "text-blue-400",
    },
    { icon: FaRocket, value: "3+", label: "Anos", color: "text-green-400" },
    {
      icon: FaUsers,
      value: "50+",
      label: "Projetos",
      color: "text-orange-400",
    },
  ];

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
              Experiência Profissional
            </AnimatedShinyText>
            <p className="text-text-secondary text-base sm:text-lg font-light text-center lg:text-left">
              Desenvolvedor Web com 3 anos de experiência em desenvolvimento
              front-end, especializado em React e Next.js. Atuei em empresa de
              grande escala, startup e até mesmo como único desenvolvedor de um
              projeto, tenho proatividade para resolver diversos tipos de
              problemas, além de uma comunicação ativa e fluente.
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
