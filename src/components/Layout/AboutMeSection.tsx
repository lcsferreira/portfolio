import { motion } from "motion/react";
import { useRef } from "react";
import { portfolioData } from "../../api/data";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import type { GlassIconsItem } from "../GlassIcons";
import GlassIcons from "../GlassIcons";
import ScrollReveal from "../ScrollReveal";

export const AboutMeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const socialIcons: GlassIconsItem[] = [
    {
      icon: <FaInstagram size="100%" />,
      color: "instagram",
      label: "Instagram",
      url: portfolioData.social[2].link, // Substitua pelo seu link
    },
    {
      icon: <FaGithub size="100%" />,
      color: "github",
      label: "GitHub",
      url: portfolioData.social[0].link, // Substitua pelo seu link
    },
    {
      icon: <FaLinkedin size="100%" />,
      color: "linkedin",
      label: "LinkedIn",
      url: portfolioData.social[1].link, // Substitua pelo seu link
    },
  ];
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
      className="relative min-h-[90vh] 2xl:min-h-[70vh] lg:min-h-[50vh] md:min-h-[60vh] sm:min-h-[100vh] flex px-4 sm:px-6 lg:px-8 flex-col"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="self-center text-3xl text-text-secondary ">Sobre mim</h2>
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
        <div className="flex flex-col items-center">
          <h2 className="text-xl text-text-secondary">Redes Sociais</h2>
          <GlassIcons items={socialIcons} />
        </div>
      </div>
    </motion.section>
  );
};
