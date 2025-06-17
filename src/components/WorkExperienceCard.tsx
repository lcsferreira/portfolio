import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { IWorkExperience } from "../api/data";

interface WorkExperienceCardProps {
  workExperience: IWorkExperience;
  isSelected: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
}

const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({
  workExperience,
  isSelected,
  onClick,
  onMouseEnter,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      className={`p-4 bg-gray-800/50 backdrop-blur-md rounded-2xl border border-white/20 transition-all duration-300 ${
        isSelected ? "bg-gray-800/100 border-primary/40" : ""
      }`}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      layout
    >
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-col flex-1">
          <h3 className="text-white text-lg font-semibold m-0 mb-1">
            {workExperience.role}
          </h3>
          <a
            href={workExperience.enterpriseLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-sm font-medium m-0 mb-2 hover:text-primary/80 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            @{workExperience.enterprise}
          </a>

          {/* Tecnologias utilizadas */}
          <div className="flex flex-wrap gap-1 mb-3">
            {workExperience.technologiesUsed.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary/20 text-white text-xs rounded-full border border-primary/30"
              >
                {tech}
              </span>
            ))}
            {workExperience.technologiesUsed.length > 4 && (
              <span className="px-2 py-1 bg-gray-600/50 text-gray-300 text-xs rounded-full">
                +{workExperience.technologiesUsed.length - 4}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col items-end">
          <p className="text-gray-400 text-sm m-0 mb-2">
            {workExperience.startDate} - {workExperience.endDate}
          </p>

          {/* Botão de expandir */}
          <button
            onClick={handleExpandClick}
            className="flex items-center justify-center w-8 h-8 bg-primary/20 hover:bg-primary/30 rounded-full border border-primary/30 hover:border-primary/50 transition-all duration-200"
            aria-label={isExpanded ? "Recolher detalhes" : "Expandir detalhes"}
          >
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="text-primary"
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </button>
        </div>
      </div>

      {/* Seção expandível com responsabilidades */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-white text-sm font-semibold mb-3">
                Principais Responsabilidades:
              </h4>
              <ul className="space-y-2">
                {workExperience.responsibilities.map(
                  (responsibility, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-gray-300 text-sm flex items-start"
                    >
                      <span className="text-primary mr-2 flex-shrink-0 mt-1">
                        •
                      </span>
                      <span className="leading-relaxed">{responsibility}</span>
                    </motion.li>
                  )
                )}
              </ul>

              {/* Todas as tecnologias quando expandido */}
              {workExperience.technologiesUsed.length > 4 && (
                <div className="mt-4">
                  <h5 className="text-white text-sm font-semibold mb-2">
                    Tecnologias Utilizadas:
                  </h5>
                  <div className="flex flex-wrap gap-1">
                    {workExperience.technologiesUsed.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary/20 text-white text-xs rounded-full border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default WorkExperienceCard;
