import { Header } from "./components/Header";
import { HeroSection } from "./components/Layout/HeroSection";
import { motion } from "motion/react";
import { useRef } from "react";
import { ProjectSection } from "./components/Layout/ProjectSection";
import { useTheme } from "./contexts/ThemeContext";
import { AboutMeSection } from "./components/Layout/AboutMeSection";
import { AnimatedBackground } from "./components/Layout/AnimatedBackground";

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
      } flex flex-col min-h-screen text-text font-family overflow-hidden bg-gradient-to-b from-[#f9f8ff] to-[#cbd3ff] dark:bg-gradient-to-b dark:from-[#1e1e1e] dark:to-[#0b0d20]`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      ref={containerRef}
    >
      <AnimatedBackground />
      <Header />

      <div className="max-w-[1440px] mx-auto relative w-full px-4 sm:px-6 lg:px-8 h-full">
        <motion.div
          className="flex flex-col relative z-10"
          variants={sectionVariants}
        >
          <HeroSection />
        </motion.div>

        <motion.div
          className="flex flex-col relative z-10"
          variants={sectionVariants}
        >
          <ProjectSection />
        </motion.div>

        <motion.div
          className="flex flex-col relative z-10"
          variants={sectionVariants}
        >
          <AboutMeSection />
        </motion.div>
      </div>

      {/* <motion.section
          className="px-4 sm:px-6 lg:px-8 py-16"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Projects Portfolio
            </motion.h2>
            <motion.p
              className="text-text-secondary text-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Coming soon...
            </motion.p>
          </motion.div>
        </motion.section> */}

      {/* <motion.section
          className="px-4 sm:px-6 lg:px-8 py-16"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-text-secondary text-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Coming soon...
            </motion.p>
          </motion.div>
        </motion.section>

        <motion.section
          className="px-4 sm:px-6 lg:px-8 py-16"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Professional Experience
            </motion.h2>
            <motion.p
              className="text-text-secondary text-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Coming soon...
            </motion.p>
          </motion.div>
        </motion.section> */}
    </motion.main>
  );
}

export default App;
