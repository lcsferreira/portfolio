import { Link, useParams } from "react-router-dom";
import { portfolioData } from "../api/data";
import { motion } from "motion/react";
import { useTheme } from "../contexts/ThemeContext";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import ChipCard from "../components/ChipCard";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from "react";

export const ProjectDetails = () => {
  const { projectId } = useParams();
  const { theme } = useTheme();
  const project = portfolioData.projects.find((p) => p.title === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-primary">
          Projeto não encontrado
        </h1>
      </div>
    );
  }

  return (
    <motion.main
      className={`${
        theme === "dark" ? "dark" : ""
      } flex flex-col min-h-screen text-text font-family overflow-hidden bg-[#f9f8ff] dark:bg-[#1e1e1e]`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Header />
      <div className="max-w-[1440px] flex flex-col gap-16 mx-auto relative w-full px-4 sm:px-6 lg:px-8 h-full py-16">
        <div className="flex flex-col gap-8">
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0.8, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              to="/"
              className="hover:text-primary transition-colors duration-300 flex items-center gap-2"
            >
              <FaArrowLeft />
              Voltar
            </Link>
            <h1 className="text-4xl font-bold text-primary">{project.title}</h1>
            {project.role && project.startDate && project.endDate && (
              <div className="flex items-center gap-2 text-text-secondary">
                <span>{project.role}</span>
                <span>•</span>
                <span>
                  {project.startDate} - {project.endDate}
                </span>
              </div>
            )}
          </motion.div>

          <motion.div
            className="relative h-[400px] w-full rounded-xl overflow-hidden"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={`../src/assets/${project.image}`}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0.8, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-text-secondary">
                Descrição
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {project.technologies && (
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-semibold text-text-secondary">
                  Tecnologias
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <ChipCard key={tech}>{tech}</ChipCard>
                  ))}
                </div>
              </div>
            )}

            {project.features && (
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-semibold text-text-secondary">
                  Funcionalidades
                </h2>
                <ul className="list-disc list-inside text-lg text-text-secondary space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="flex gap-4"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/80 transition-colors duration-300"
              >
                Visitar Projeto
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </motion.main>
  );
};
