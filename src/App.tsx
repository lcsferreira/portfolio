import { Header } from "./components/Header";
import { HeroSection } from "./components/Layout/HeroSection";
import { motion } from "motion/react";
import { useRef } from "react";
import { ProjectSection } from "./components/Layout/ProjectSection";
import { useTheme } from "./contexts/ThemeContext";
import { AboutMeSection } from "./components/Layout/AboutMeSection";
import { portfolioData } from "./api/data";
import ScrollVelocity from "./components/ScrollVelocity";
import { ContactSection } from "./components/Layout/ContactSection";
import { WorkExperienceSection } from "./components/Layout/WorkExperienceSection";
import { Footer } from "./components/Footer";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.main
      className={`${
        theme === "dark" ? "dark" : ""
      } flex flex-col min-h-screen text-text font-family overflow-hidden bg-[#f9f8ff] dark:bg-[#1e1e1e]`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      ref={containerRef}
    >
      <Header />

      <div className="max-w-[1440px] flex flex-col gap-16 mx-auto relative w-full px-4 sm:px-6 lg:px-8 h-full">
        <motion.div className="flex flex-col" variants={sectionVariants}>
          <HeroSection />
        </motion.div>

        <motion.div className="flex flex-col " variants={sectionVariants}>
          <ProjectSection />
        </motion.div>
        <ScrollVelocity
          className="mt-10"
          technologies={portfolioData.devInfos.technologies}
        />
        <motion.div className="flex flex-col " variants={sectionVariants}>
          <AboutMeSection />
        </motion.div>
        <motion.div className="flex flex-col " variants={sectionVariants}>
          <WorkExperienceSection />
        </motion.div>
        <motion.div className="flex flex-col " variants={sectionVariants}>
          <ContactSection />
        </motion.div>
      </div>
      <Footer />
    </motion.main>
  );
}

export default App;
