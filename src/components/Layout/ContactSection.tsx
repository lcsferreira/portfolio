import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "../../api/data";
import GlassIcons, { type GlassIconsItem } from "../GlassIcons";
import { AnimatedShinyText } from "../ShinyText";
import { Input } from "../Input";
import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { t } = useLanguage();

  const socialIcons: GlassIconsItem[] = [
    {
      icon: <FaGithub size="100%" />,
      color: "github",
      label: "GitHub",
      url: portfolioData.social[0].link,
    },
    {
      icon: <FaLinkedin size="100%" />,
      color: "linkedin",
      label: "LinkedIn",
      url: portfolioData.social[1].link,
    },
    {
      icon: <FaEnvelope size="100%" />,
      color: "email",
      label: "Email",
      url: portfolioData.social[2].link,
    },
  ];

  const handleSubmit = () => {
    const text = `${t("contact.greeting")} ${name}.\n\n${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappURL = `https://wa.me/${portfolioData.phone}?text=${encodedText}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="flex flex-col gap-6 md:gap-10 pb-10 px-4 md:px-0">
      <h2 className="self-center text-2xl md:text-3xl text-theme-primary">
        {t("contact.title")}
      </h2>
      <div className="flex flex-col lg:flex-row w-full justify-between gap-6 lg:gap-10">
        <div className="flex flex-col gap-6 lg:gap-10 w-full lg:w-1/2">
          <div className="flex gap-4 w-full flex-col rounded-lg px-2 md:px-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm md:text-base text-theme-secondary"
              >
                {t("contact.name")}
              </label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm md:text-base text-theme-secondary"
              >
                {t("contact.message")}
              </label>
              <Input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-primary text-white p-3 md:p-2 rounded-md w-full mt-2 hover:bg-primary/80 transition-colors duration-300 hover:cursor-pointer text-sm md:text-base"
            >
              {t("contact.send")}
            </button>
            <p className="text-xs md:text-sm text-gray-400 mt-2 text-center lg:text-left">
              {t("contact.whatsappNote")}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:gap-10 w-full lg:w-1/2">
          <AnimatedShinyText
            className="text-xl md:text-2xl lg:text-3xl text-center lg:text-left"
            shimmerWidth={100}
          >
            {t("contact.workTogether")}
          </AnimatedShinyText>
          <p className="text-theme-secondary text-sm md:text-base text-center lg:text-left">
            {t("contact.available")}
          </p>
          <div className="flex justify-center lg:justify-start">
            <GlassIcons items={socialIcons} />
          </div>
        </div>
      </div>
    </section>
  );
};
