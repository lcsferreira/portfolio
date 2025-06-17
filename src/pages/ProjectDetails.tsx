import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import ChipCard from "../components/ChipCard";
import {
  FaArrowLeft,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { useEffect, useState } from "react";

export const ProjectDetails = () => {
  const { projectId } = useParams();
  const { theme } = useTheme();
  const { t, getTranslatedPortfolioData } = useLanguage();
  const translatedData = getTranslatedPortfolioData();
  const project = translatedData.projects.find((p) => p.title === projectId);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-primary">
          {t("projectDetails.notFound")}
        </h1>
      </div>
    );
  }

  const nextScreenshot = () => {
    if (project.screenshots) {
      setCurrentScreenshot((prev) =>
        prev === project.screenshots!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevScreenshot = () => {
    if (project.screenshots) {
      setCurrentScreenshot((prev) =>
        prev === 0 ? project.screenshots!.length - 1 : prev - 1
      );
    }
  };

  return (
    <motion.main
      className={`${
        theme === "dark" ? "dark" : ""
      } flex flex-col min-h-screen text-text font-family overflow-hidden bg-[#e8e6f5] dark:bg-[#1e1e1e] z-10`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Header />
      <div className="max-w-[1440px] flex flex-col gap-16 mx-auto relative w-full px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col gap-8">
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0.8, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              to="/"
              className="transition-colors duration-300 flex items-center gap-2 text-theme-secondary"
            >
              <FaArrowLeft />
              {t("projectDetails.back")}
            </Link>
            <h1 className="text-4xl font-bold text-primary">{project.title}</h1>
            {project.role && project.startDate && project.endDate && (
              <div className="flex items-center gap-2 text-theme-secondary">
                <span>{project.role}</span>
                <span>•</span>
                <span>
                  {project.startDate} - {project.endDate}
                </span>
              </div>
            )}
          </motion.div>

          {project.screenshots && project.screenshots.length > 0 && (
            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="relative group">
                {/* Carrossel Principal */}
                <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
                  <motion.img
                    key={currentScreenshot}
                    src={`../src/assets/${project.screenshots[currentScreenshot]}`}
                    alt={`Screenshot ${currentScreenshot + 1} do ${
                      project.title
                    }`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Overlay com gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Botões de Navegação */}
                {project.screenshots.length > 1 && (
                  <>
                    <button
                      onClick={prevScreenshot}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary/20 backdrop-blur-sm hover:bg-primary/30 text-primary p-3 rounded-full opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                      aria-label={t("projectDetails.prevScreenshot")}
                    >
                      <FaChevronLeft size={16} />
                    </button>

                    <button
                      onClick={nextScreenshot}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary/20 backdrop-blur-sm hover:bg-primary/30 text-primary p-3 rounded-full opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                      aria-label={t("projectDetails.nextScreenshot")}
                    >
                      <FaChevronRight size={16} />
                    </button>
                  </>
                )}

                {/* Contador */}
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {currentScreenshot + 1} {t("projectDetails.counter")}{" "}
                  {project.screenshots.length}
                </div>
              </div>

              {/* Indicadores/Thumbnails */}
              {project.screenshots.length > 1 && (
                <div className="flex justify-center gap-2 sm:gap-3 px-4">
                  <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 max-w-full scrollbar-custom">
                    {project.screenshots.map((screenshot, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentScreenshot(index)}
                        className={`flex-shrink-0 w-16 h-12 sm:w-20 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                          index === currentScreenshot
                            ? "border-primary scale-110 shadow-lg"
                            : "border-transparent hover:border-primary/50 hover:scale-105"
                        }`}
                      >
                        <img
                          src={`../src/assets/${screenshot}`}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Indicadores pontos para mobile */}
              {project.screenshots.length > 1 && (
                <div className="flex justify-center gap-2 sm:hidden">
                  {project.screenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentScreenshot(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentScreenshot
                          ? "bg-primary scale-125"
                          : "bg-gray-400/30 hover:bg-gray-400/60 dark:bg-gray-600/30 dark:hover:bg-gray-600/60"
                      }`}
                      aria-label={`${t("projectDetails.goToScreenshot")} ${
                        index + 1
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          )}

          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0.8, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-theme-primary mb-4">
                    {t("projectDetails.description")}
                  </h2>
                  <p className="text-lg text-theme-secondary leading-relaxed">
                    {project.longDescription || project.description}
                  </p>
                </div>

                {/* Botão Visitar Projeto - Posicionado ao lado da descrição */}
                <div className="flex flex-col sm:flex-shrink-0 sm:ml-8">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-white px-6 py-3 rounded-xl hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-medium"
                  >
                    <FaExternalLinkAlt size={16} />
                    {t("projectDetails.visitProject")}
                  </a>
                </div>
              </div>
            </div>

            {project.technologies && (
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-semibold text-theme-primary">
                  {t("projectDetails.technologies")}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <ChipCard key={tech}>{tech}</ChipCard>
                  ))}
                </div>
              </div>
            )}

            {project.features && (
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-semibold text-theme-primary">
                  {t("projectDetails.features")}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800/50 dark:to-gray-900/50 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      {/* Ícone animado */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <FaCheckCircle className="text-primary text-lg group-hover:rotate-12 transition-transform duration-300" />
                        </div>

                        <div className="flex-1">
                          <p className="text-theme-secondary leading-relaxed font-medium">
                            {feature}
                          </p>
                        </div>
                      </div>

                      {/* Efeito de brilho no hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
      <Footer />
    </motion.main>
  );
};
