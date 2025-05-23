import { motion } from "motion/react";
import Lucas from "../../assets/Image.png";
// import Group from "../../assets/Group.svg";
import { useRef } from "react";

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start start", "end start"],
  // });

  // const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.7, 0.4]);

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

  // const topSvgVariants = {
  //   hidden: {
  //     scale: 0.8,
  //     opacity: 0,
  //     y: -100,
  //     rotate: -10,
  //   },
  //   visible: {
  //     scale: 1,
  //     opacity: 0.6,
  //     y: 0,
  //     rotate: 0,
  //     transition: {
  //       duration: 1.8,
  //       ease: "easeOut",
  //       delay: 0.3,
  //     },
  //   },
  // };

  // const bottomSvgVariants = {
  //   hidden: {
  //     scale: 0.8,
  //     opacity: 0,
  //     y: 100,
  //     rotate: 190,
  //   },
  //   visible: {
  //     scale: 1,
  //     opacity: 0.8,
  //     y: 0,
  //     rotate: 180,
  //     transition: {
  //       duration: 1.8,
  //       ease: "easeOut",
  //       delay: 0.6,
  //     },
  //   },
  // };

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
      className="relative min-h-[90vh] lg:min-h-[50vh] md:min-h-[60vh] sm:min-h-[100vh] flex px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 relative">
        <div className="relative flex flex-col justify-center text-center lg:text-left order-1 lg:order-1 z-10">
          {/* <motion.img
            src={Group}
            alt="background decoration"
            className="absolute -top-25 sm:-top-20 md:-top-24 lg:-top-32 left-5 sm:-left-12 md:left-5 lg:-left-0 
                     w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] 
                     opacity-40 sm:opacity-50 md:opacity-60 pointer-events-none"
            variants={topSvgVariants}
            style={{
              opacity: bgOpacity,
            }}
            initial="hidden"
            animate="visible"
          /> */}

          <motion.div variants={itemVariants} className="z-10">
            <motion.p className="text-text-secondary text-lg sm:text-xl lg:text-2xl">
              Hello, I am
              <br />
              <motion.span
                className="text-primary font-bold text-3xl sm:text-4xl lg:text-5xl block mt-2"
                variants={nameVariants}
              >
                Lucas Ferreira
              </motion.span>
              <br />
              <motion.span
                className="text-text-secondary text-lg sm:text-xl lg:text-2xl font-bold block mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                A Web Software Developer
              </motion.span>
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 lg:justify-start justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <motion.button
              className="bg-primary hover:cursor-pointer hover:bg-secondary text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 text-sm sm:text-base"
              variants={buttonVariants}
              whileHover="hover"
            >
              Download CV
            </motion.button>
            <motion.button
              className="border-2 hover:cursor-pointer border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 text-sm sm:text-base"
              variants={buttonVariants}
              whileHover="hover"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              My Works
            </motion.button>
          </motion.div>
        </div>

        <div className="relative flex items-end justify-center order-1 lg:order-2 min-h-[280px] sm:min-h-[380px] md:min-h-[480px] lg:min-h-[500px]">
          {/* <motion.img
            src={Group}
            alt="background decoration"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2
                     w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]
                     opacity-60 sm:opacity-70 md:opacity-80 pointer-events-none"
            variants={bottomSvgVariants}
            style={{
              opacity: bgOpacity,
            }}
            initial="hidden"
            animate="visible"
          /> */}

          <motion.img
            src={Lucas}
            alt="Lucas Ferreira"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 order-2
                     w-96 h-96 
                     object-cover"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          />
        </div>
      </div>
    </motion.section>
  );
};
