import { motion } from "motion/react";
import Lucas from "../../assets/profileImage.jpg";
// import Group from "../../assets/Group.svg";
import { useRef } from "react";
import { portfolioData } from "../../api/data";
import { FaHand } from "react-icons/fa6";
import { useLanguage } from "../../contexts/LanguageContext";

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const { name } = portfolioData;

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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  const handVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5,
      },
    },
    wave: {
      rotate: [0, 15, -15, 15, -15, 15, 0],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 2,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const handleDownloadCV = () => {
    // TODO: Implement CV download
    const pdfUrl = "./src/assets/Ferreira_CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Lucas_Ferreira_CV.pdf";
    link.click();
  };

  return (
    <motion.section
      ref={containerRef}
      className="flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full max-w-7xl mx-auto gap-8 lg:gap-12">
        {/* Image - Mobile First, Desktop First */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        >
          <img
            src={Lucas}
            alt="Lucas Ferreira"
            className="
              w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[500px] xl:w-[450px] xl:h-[550px]
              object-cover rounded-b-full object-top
              shadow-2xl shadow-primary/20 dark:shadow-primary/10
              border-4 border-white/10 dark:border-white/5
            "
          />
        </motion.div>
        {/* Content - Mobile First, Desktop Second */}
        <motion.div
          variants={itemVariants}
          className="flex-1 text-center lg:text-left max-w-lg lg:max-w-none"
        >
          <div className="space-y-4">
            <motion.div
              className="text-primary dark:text-text-secondary text-lg sm:text-xl md:text-2xl flex flex-row items-center justify-center lg:justify-start gap-2"
              variants={nameVariants}
            >
              <motion.span
                variants={handVariants}
                animate={["visible", "wave"]}
              >
                <FaHand className="text-lg sm:text-xl md:text-2xl" />
              </motion.span>
              {t("hero.greeting")}
            </motion.div>

            <motion.h1
              className="text-secondary dark:text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
              variants={nameVariants}
            >
              {name}
            </motion.h1>

            <motion.p
              className="text-primary dark:text-text-secondary text-lg sm:text-xl md:text-2xl lg:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {t("hero.title")}
            </motion.p>
          </div>

          <motion.div
            className="mt-8 lg:mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <motion.button
              className="bg-primary/80 backdrop-blur-sm border border-white/10 hover:bg-primary text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 text-base hover:cursor-pointer w-full sm:w-auto"
              variants={buttonVariants}
              whileHover="hover"
              onClick={handleDownloadCV}
            >
              Download CV
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
