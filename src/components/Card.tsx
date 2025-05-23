import NextPage from "../assets/NextPage.svg";

interface CardProps {
  title: string;
  description: string;
  image?: string; // Mudei para opcional, já que a imagem superior na imagem é mais um fundo de cabeçalho
  link: string;
}

export const Card = ({ title, description, image, link }: CardProps) => {
  return (
    <div className="bg-secondary rounded-lg shadow-lg overflow-hidden flex flex-col h-full max-w-[550px]">
      {image && (
        <div className="relative h-48 bg-gray-800 flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
      )}
      <div className="p-0 flex flex-col flex-grow">
        <div className="bg-secondary py-4 ">
          <h2 className="text-xl md:text-2xl font-bold text-white border-b-2 border-primary w-fit pl-6 pb-2">
            {title}
          </h2>
        </div>
        <div className="px-6 py-4 flex-grow">
          <p className="text-base text-white leading-relaxed">{description}</p>
        </div>
        <div className="p-6 text-right">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white text-lg hover:text-blue-200 transition-colors duration-200 focus:outline-none"
          >
            View details
            <img src={NextPage} alt="Arrow Right" className="w-6 h-6 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};
