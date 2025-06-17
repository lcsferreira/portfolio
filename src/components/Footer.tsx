import { portfolioData } from "../api/data";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const name = portfolioData.name;
  return (
    <footer className="flex justify-center items-center py-10">
      <p className="text-gray-600 dark:text-gray-400 text-sm font-light">
        © {currentYear} {name}. Todos os direitos reservados.
      </p>
    </footer>
  );
};
