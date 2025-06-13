import { motion } from "motion/react";
import Lucas from "../../assets/profileImage.jpg";
// import Group from "../../assets/Group.svg";
import { useRef } from "react";
import { portfolioData } from "../../api/data";
import GlareHover from "../GlareHover";

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
          w-96 h-[500px]
          object-cover rounded-b-full object-top"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        />
        <motion.div
          variants={itemVariants}
          className="order-2 lg:order-1 z-10 p-8 w-max"
        >
          <p className="text-primary dark:text-text-secondary  flex flex-col">
            <motion.span
              className="text-primary dark:text-text-secondary text-xl sm:text-2xl lg:text-3xl mt-2"
              variants={nameVariants}
            >
              Hello, I am
            </motion.span>
            <motion.span
              className="text-secondary dark:text-primary font-bold text-4xl sm:text-4xl lg:text-5xl block mt-2"
              variants={nameVariants}
            >
              {name}
            </motion.span>
            <motion.span
              className="text-primary dark:text-text-secondary text-xl sm:text-2xl lg:text-3xl font-bold mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {title}
            </motion.span>
          </p>

          <div className="my-6 flex items-center justify-center lg:hidden">
            <GlareHover
              borderRadius="9999px"
              width="150px"
              height="150px"
              className="border-2 border-primary/50"
            >
              <motion.img
                src={Lucas}
                alt="Lucas Ferreira"
                className="h-full w-full rounded-full object-cover"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              />
            </GlareHover>
          </div>

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

        {/* <div className="relative order-1 hidden min-h-[400px] items-center justify-center sm:min-h-[450px] lg:order-2 lg:flex lg:min-h-[500px]">
          <GlassCard height="400px" width="350px">
            <motion.img
              src={Lucas}
              alt="Lucas Ferreira"
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10
            w-96 h-96
            object-cover"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            />
          </GlassCard>
        </div> */}
      </div>
    </motion.section>
  );
};
