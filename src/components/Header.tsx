import { FaGlobe, FaMoon } from "react-icons/fa";
import { Switch } from "./Switch";
import { useState } from "react";

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isLanguage, setIsLanguage] = useState<boolean>(true);

  return (
    <header className="flex justify-center items-center p-4 z-50">
      <nav className="flex items-center gap-4 bg-glass-bg rounded-md px-4 py-2 backdrop-blur-md">
        <ul className="flex items-center gap-8 text-lg text-text-secondary">
          <li>
            <a href="#">About me</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-4 ml-4">
        <Switch
          id="dark-mode-switch"
          isChecked={isDarkMode}
          onChange={() => setIsDarkMode(!isDarkMode)}
          icon={<FaMoon size={16} />}
        />
        <Switch
          id="language-switch"
          isChecked={isLanguage}
          onChange={() => setIsLanguage(!isLanguage)}
          icon={<FaGlobe size={16} />}
        />
      </div>
    </header>
  );
};
