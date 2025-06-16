import { motion } from "motion/react";
import Lucas from "../../assets/profileImage.jpg";
// import Group from "../../assets/Group.svg";
import { useRef } from "react";
import { portfolioData } from "../../api/data";
import { FaHand } from "react-icons/fa6";

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { name, title } = portfolioData;

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

  return (
    <motion.section
      ref={containerRef}
      className="flex items-center justify-center px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-row items-center justify-around w-full flex-wrap">
        <motion.img
          src={Lucas}
          alt="Lucas Ferreira"
          className="
          w-96 h-[350px] md:h-[500px]
          object-cover rounded-b-full object-top"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        />
        <motion.div
          variants={itemVariants}
          className="order-2 lg:order-1 z-10 p-8 w-max"
        >
          <p className="text-primary dark:text-text-secondary text-center md:text-left  flex flex-col">
            <motion.span
              className="text-primary dark:text-text-secondary text-xl sm:text-2xl lg:text-3xl mt-2 flex flex-row items-center gap-2"
              variants={nameVariants}
            >
              <motion.span
                className="text-primary dark:text-text-secondary text-sm sm:text-md lg:text-lg"
                variants={handVariants}
                animate={["visible", "wave"]}
              >
                <FaHand className="text-primary dark:text-text-secondary text-lg sm:text-xl lg:text-2xl" />
              </motion.span>
              Olá, eu sou
            </motion.span>
            <motion.span
              className="text-secondary dark:text-primary text-5xl sm:text-5xl lg:text-6xl block mt-2"
              variants={nameVariants}
            >
              {name}
            </motion.span>
            <motion.span
              className="text-primary dark:text-text-secondary text-xl sm:text-2xl lg:text-3xl  mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {title}
            </motion.span>
          </p>

          <motion.div
            className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <motion.button
              className="bg-primary/80 backdrop-blur-sm border border-white/10 hover:bg-primary text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 text-base"
              variants={buttonVariants}
              whileHover="hover"
            >
              Download CV
            </motion.button>
            <motion.button
              className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 text-base"
              variants={buttonVariants}
              whileHover="hover"
            >
              My Works
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
