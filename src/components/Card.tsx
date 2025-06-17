import NextPage from "../assets/NextPage.svg";
import GlareHover from "./GlareHover";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

interface CardProps {
  title: string;
  description: string;
  image?: string;
  link: string;
}

export const Card = ({ title, description, image, link }: CardProps) => {
  const { theme } = useTheme();
  return (
    <Link
      to={`/project/${encodeURIComponent(title)}`}
      className="block h-full text-gray-800 dark:text-white no-underline"
    >
      <GlareHover
        className="rounded-xl shadow-lg flex flex-col h-full max-w-[550px] max-h-[500px] sm:max-h-[550px] lg:max-h-[600px] backdrop-blur-md overflow-hidden"
        background={
          theme === "dark"
            ? "hsla(210, 10%, 25%, 0.3)"
            : "rgba(255, 255, 255, 0.9)"
        }
        borderColor={
          theme === "dark"
            ? "hsla(0, 0%, 100%, 0.2)"
            : "rgba(200, 200, 200, 0.4)"
        }
        borderRadius="0.75rem"
        glareColor="#ffffff"
        glareOpacity={0.1}
      >
        {image && (
          <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="p-0 flex flex-col flex-grow">
          <div className="py-3 sm:py-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white border-b-2 border-primary w-fit pl-4 sm:pl-6 pb-2">
              {title}
            </h2>
          </div>
          <div className="px-4 sm:px-6 py-3 sm:py-4 flex-grow">
            <p className="text-sm sm:text-base text-gray-600 dark:text-white/80 leading-relaxed line-clamp-4">
              {description}
            </p>
          </div>
          <div className="mt-auto p-4 sm:p-6 text-right flex justify-end items-center">
            <div className="inline-flex items-center text-base sm:text-lg font-semibold hover:text-primary transition-colors duration-300">
              Ver detalhes
              <img
                src={NextPage}
                alt="Arrow Right"
                className="w-5 h-5 sm:w-6 sm:h-6 ml-2"
              />
            </div>
          </div>
        </div>
      </GlareHover>
    </Link>
  );
};
