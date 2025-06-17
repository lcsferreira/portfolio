import React, { useState, useRef, useEffect } from "react";
import { FaGlobe } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import type { Language } from "../contexts/LanguageContext";

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const selectorRef = useRef<HTMLDivElement>(null);

  // Fechar ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectorRef.current &&
        !selectorRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={selectorRef} className="fixed bottom-6 right-6 z-50">
      {/* Botão Principal */}
      <button
        onClick={toggleOpen}
        className={`
          relative flex items-center justify-center w-14 h-14 
          bg-gradient-to-br from-primary to-primary/80 
          hover:from-primary/80 hover:to-primary/60
          rounded-full shadow-lg hover:shadow-xl
          transition-all duration-300 ease-out
          transform hover:scale-110 active:scale-95
          backdrop-blur-sm border border-white/20 hover:cursor-pointer
          ${isOpen ? "rotate-180 scale-110" : "rotate-0"}
        `}
      >
        <FaGlobe
          className={`
            text-gray-800 dark:text-white text-xl 
            transition-transform duration-300
            ${isOpen ? "scale-125" : "scale-100"}
          `}
        />
      </button>

      {/* Opções de idioma */}
      <div
        className={`
        absolute top-0 right-0 flex items-center justify-center
        transition-all duration-500 ease-out
        ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-75 translate-y-2 pointer-events-none"
        }
      `}
      >
        {/* Opção PT */}
        <div
          className={`
            absolute top-0 right-0
            transition-all duration-500 ease-out
            ${
              isOpen
                ? "transform -translate-x-20 -translate-y-2"
                : "transform translate-x-0 translate-y-0"
            }
          `}
          style={{
            transitionDelay: isOpen ? "100ms" : "0ms",
          }}
        >
          <button
            onClick={() => handleLanguageChange("pt")}
            className={`
              flex items-center justify-center w-12 h-12
              rounded-xl shadow-lg hover:shadow-xl
              transition-all duration-300 ease-out
              transform hover:scale-110 active:scale-95
               font-bold text-sm hover:cursor-pointer
              backdrop-blur-sm
              ${
                language === "pt"
                  ? "bg-gradient-to-br from-secondary to-primary/80 text-white"
                  : "bg-white/90 hover:bg-white text-gray-700"
              }
            `}
          >
            PT
          </button>
        </div>

        {/* Opção EN */}
        <div
          className={`
            absolute top-0 right-0
            transition-all duration-500 ease-out
            ${
              isOpen
                ? "transform -translate-x-2 -translate-y-20"
                : "transform translate-x-0 translate-y-0"
            }
          `}
          style={{
            transitionDelay: isOpen ? "200ms" : "0ms",
          }}
        >
          <button
            onClick={() => handleLanguageChange("en")}
            className={`
              flex items-center justify-center w-12 h-12
              rounded-xl shadow-lg hover:shadow-xl
              transition-all duration-300 ease-out
              transform hover:scale-110 active:scale-95
               font-bold text-sm hover:cursor-pointer
              backdrop-blur-sm
              ${
                language === "en"
                  ? "bg-gradient-to-br from-secondary to-primary/80 text-white"
                  : "bg-white/90 hover:bg-white text-gray-700"
              }
            `}
          >
            EN
          </button>
        </div>
      </div>

      {/* Indicador de idioma atual */}
      <div
        className={`
        absolute -bottom-2 -right-2 
        flex items-center justify-center w-6 h-6
        bg-white rounded-full shadow-md
        transition-all duration-300
        ${isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}
      `}
      >
        <span className="text-xs font-bold text-gray-600 uppercase">
          {language}
        </span>
      </div>
    </div>
  );
};

export default LanguageSelector;
