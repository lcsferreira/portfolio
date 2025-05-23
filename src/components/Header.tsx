import { FaGlobe, FaMoon, FaBars, FaTimes, FaSun } from "react-icons/fa";
import { Switch } from "./Switch";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "../contexts/ThemeContext";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";
  const [isLanguage, setIsLanguage] = useState<boolean>(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const navVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const mobileMenuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.header
      className="flex justify-between items-center p-4 sm:p-6 z-50 relative"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.nav
        className="hidden lg:flex items-center gap-4 bg-glass-bg rounded-md px-4 py-2 backdrop-blur-md mx-auto z-10 fixed top-4 left-1/2 transform -translate-x-1/2"
        variants={navVariants}
        whileHover="hover"
      >
        <ul className="flex items-center gap-8 text-lg text-text-secondary">
          <li>
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300"
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </motion.nav>

      <motion.button
        onClick={toggleMobileMenu}
        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md bg-glass-bg backdrop-blur-md text-text-secondary hover:text-primary transition-colors z-10 fixed top-4 left-4"
        aria-label="Toggle menu"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.div
          animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </motion.div>
      </motion.button>

      <motion.div
        className="hidden lg:flex items-center gap-4 ml-4 justify-end w-full"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Switch
            id="dark-mode-switch"
            isChecked={isDarkMode}
            onChange={toggleTheme}
            icon={isDarkMode ? <FaMoon size={16} /> : <FaSun size={16} />}
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Switch
            id="language-switch"
            isChecked={isLanguage}
            onChange={() => setIsLanguage(!isLanguage)}
            icon={<FaGlobe size={16} />}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex lg:hidden items-center gap-3 justify-end w-full"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Switch
            id="mobile-dark-mode-switch"
            isChecked={isDarkMode}
            onChange={toggleTheme}
            icon={isDarkMode ? <FaMoon size={14} /> : <FaSun size={14} />}
            size="sm"
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Switch
            id="mobile-language-switch"
            isChecked={isLanguage}
            onChange={() => setIsLanguage(!isLanguage)}
            icon={<FaGlobe size={14} />}
            size="sm"
          />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 lg:hidden bg-glass-bg backdrop-blur-md rounded-b-md mx-4 mt-2 border-t border-primary/20"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <nav className="p-4">
              <ul className="flex flex-col gap-4 text-lg text-text-secondary">
                <motion.li variants={mobileMenuItemVariants}>
                  <a
                    href="#"
                    className="block py-2 hover:text-primary transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About me
                  </a>
                </motion.li>
                <motion.li variants={mobileMenuItemVariants}>
                  <a
                    href="#"
                    className="block py-2 hover:text-primary transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Projects
                  </a>
                </motion.li>
                <motion.li variants={mobileMenuItemVariants}>
                  <a
                    href="#"
                    className="block py-2 hover:text-primary transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </a>
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
