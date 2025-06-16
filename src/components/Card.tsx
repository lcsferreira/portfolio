import NextPage from "../assets/NextPage.svg";
import GlareHover from "./GlareHover";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  description: string;
  image?: string;
  link: string;
}

export const Card = ({ title, description, image, link }: CardProps) => {
  return (
    <Link
      to={`/project/${encodeURIComponent(title)}`}
      className="block h-full text-white no-underline"
    >
      <GlareHover
        className="rounded-xl shadow-lg flex flex-col h-full max-w-[550px] backdrop-blur-md overflow-hidden"
        background="hsla(210, 10%, 25%, 0.3)"
        borderColor="hsla(0, 0%, 100%, 0.2)"
        borderRadius="0.75rem"
        glareColor="#ffffff"
        glareOpacity={0.1}
      >
        {image && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="p-0 flex flex-col flex-grow">
          <div className="py-4">
            <h2 className="text-xl md:text-2xl font-bold text-white border-b-2 border-primary w-fit pl-6 pb-2">
              {title}
            </h2>
          </div>
          <div className="px-6 py-4 flex-grow">
            <p className="text-base text-white/80 leading-relaxed">
              {description}
            </p>
          </div>
          <div className="mt-auto p-6 text-right flex justify-end items-center">
            <div className="inline-flex items-center text-lg font-semibold hover:text-primary transition-colors duration-300">
              Ver detalhes
              <img src={NextPage} alt="Arrow Right" className="w-6 h-6 ml-2" />
            </div>
          </div>
        </div>
      </GlareHover>
    </Link>
  );
};
