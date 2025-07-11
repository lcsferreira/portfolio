import { FaMoon, FaBars, FaTimes, FaSun } from "react-icons/fa";
import { Switch } from "./Switch";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const isDarkMode = theme === "dark";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();

    const scrollToElement = (elementId: string) => {
      const element = document.getElementById(elementId);
      if (element) {
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - 100; // Overhead de 100px

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    if (!isHomePage) {
      navigate("/");
      // Aguarda a navegação ser concluída antes de tentar rolar
      setTimeout(() => {
        scrollToElement(targetId);
      }, 100);
    } else {
      scrollToElement(targetId);
    }
    setIsMobileMenuOpen(false);
  };

  const headerOptions = [
    {
      label: t("nav.about"),
      href: "/#about-me",
      id: "about-me",
    },
    {
      label: t("nav.projects"),
      href: "/#projects",
      id: "projects",
    },
    {
      label: t("nav.contact"),
      href: "/#contact",
      id: "contact",
    },
  ];

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
      className="flex justify-between items-center p-4 sm:p-6 z-50 relative max-w-[1440px] w-full self-center"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.nav
        className="hidden lg:flex items-center gap-4 bg-glass-bg rounded-md px-4 py-2  mx-auto z-10 fixed top-4 left-1/2 transform -translate-x-1/2 border border-white/10 dark:bg-amber-50/10 backdrop-blur-md  overflow-hidden bg-gray-900/50"
        variants={navVariants}
        whileHover="hover"
        animate={{
          width: isScrolled ? "auto" : "fit-content",
          paddingLeft: isScrolled ? "20px" : "16px",
          paddingRight: isScrolled ? "20px" : "16px",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <ul className="flex items-center gap-8 text-lg text-gray-700 dark:text-gray-300">
          {headerOptions.map((option) => (
            <a
              key={option.label}
              href={option.href}
              className="hover:text-primary transition-colors duration-300 text-white"
              onClick={(e) => handleNavigation(e, option.id)}
            >
              {option.label}
            </a>
          ))}
        </ul>

        <AnimatePresence>
          {isScrolled && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="ml-6 pl-6 border-l border-white/20"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Switch
                  id="nav-dark-mode-switch"
                  isChecked={isDarkMode}
                  onChange={toggleTheme}
                  icon={isDarkMode ? <FaMoon size={16} /> : <FaSun size={16} />}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <motion.button
        onClick={toggleMobileMenu}
        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md bg-glass-bg backdrop-blur-md text-theme-secondary hover:text-primary transition-colors z-10 fixed top-4 left-4"
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

      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            className="hidden lg:flex items-center gap-4 ml-4 justify-end w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Switch
                id="dark-mode-switch"
                isChecked={isDarkMode}
                onChange={toggleTheme}
                icon={isDarkMode ? <FaMoon size={16} /> : <FaSun size={16} />}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="lg:hidden fixed top-4 right-4 z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-glass-bg backdrop-blur-md rounded-md p-2 border border-white/10"
        >
          <Switch
            id="mobile-dark-mode-switch"
            isChecked={isDarkMode}
            onChange={toggleTheme}
            icon={isDarkMode ? <FaMoon size={16} /> : <FaSun size={16} />}
            size="sm"
          />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed top-15 left-0 right-16 lg:hidden bg-glass-bg backdrop-blur-md rounded-md mx-4 mt-2 border border-primary/20 z-10 bg-gray-900/50 dark:bg-amber-50/10 dark:border-primary/20"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <nav className="p-4">
              <ul className="flex flex-col gap-4 text-lg text-gray-700 dark:text-gray-300">
                {headerOptions.map((option) => (
                  <motion.li
                    key={option.label}
                    variants={mobileMenuItemVariants}
                  >
                    <a
                      href={option.href}
                      className="block py-2 hover:text-primary transition-colors duration-300 text-white"
                      onClick={(e) => handleNavigation(e, option.id)}
                    >
                      {option.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
