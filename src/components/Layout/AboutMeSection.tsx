import { motion } from "motion/react";
import { useRef } from "react";
import { portfolioData } from "../../api/data";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import type { GlassIconsItem } from "../GlassIcons";
import GlassIcons from "../GlassIcons";

export const AboutMeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const socialIcons: GlassIconsItem[] = [
    {
      icon: <FaInstagram size="100%" />,
      color: "instagram",
      label: "Instagram",
      url: "https://www.instagram.com/seu_usuario", // Substitua pelo seu link
    },
    {
      icon: <FaGithub size="100%" />,
      color: "github",
      label: "GitHub",
      url: "https://www.github.com/seu_usuario", // Substitua pelo seu link
    },
    {
      icon: <FaLinkedin size="100%" />,
      color: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/seu_usuario", // Substitua pelo seu link
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
      className="relative min-h-[90vh] lg:min-h-[50vh] md:min-h-[60vh] sm:min-h-[100vh] flex px-4 sm:px-6 lg:px-8 flex-col"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="self-center text-2xl text-text-secondary ">Sobre mim</h2>
      <div className="flex justify-center items-center">
        <div className="flex justify-end w-max flex-col items-end">
          <p>{portfolioData.graduation}</p>
          <p>{portfolioData.university}</p>
        </div>

        <div className="flex justify-center items-center gap-2">
          <p className="text-5xl font-bold">
            {portfolioData.devInfos.yearsOfExperience}
          </p>
          <div className="flex flex-col">
            <p className="font-light">Anos de</p>
            <p className="text-xl">Experiência</p>
          </div>
        </div>

        <GlassIcons items={socialIcons} />
      </div>
    </motion.section>
  );
};
