import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "../../api/data";
import GlassIcons, { type GlassIconsItem } from "../GlassIcons";
import { AnimatedShinyText } from "../ShinyText";
import { Input } from "../Input";
import { useState } from "react";

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

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
    const text = `Olá, meu nome é ${name}.\n\n${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappURL = `https://wa.me/${portfolioData.phone}?text=${encodedText}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="flex flex-col gap-10 pb-10">
      <h2 className="self-center text-3xl text-text-secondary ">Contato</h2>
      <div className="flex w-full justify-between gap-10">
        <div className="flex flex-col gap-10 w-1/2">
          <div className="flex gap-2 w-full flex-col border border-gray-500 rounded-lg p-4 bg-gray-800/50 backdrop-blur-md">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Nome</label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message">Mensagem</label>
              <Input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-primary text-white p-2 rounded-md w-full mt-2 hover:bg-primary/80 transition-colors duration-300 hover:cursor-pointer"
            >
              Enviar
            </button>
            <p className="text-sm text-gray-400 mt-2">
              Ao clicar em "Enviar", você será redirecionado para o WhatsApp com
              a mensagem preenchida automaticamente.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10 w-1/2">
          <AnimatedShinyText className="text-3xl text-left" shimmerWidth={100}>
            Vamos trabalhar juntos!
          </AnimatedShinyText>
          <p className="text-text-secondary">
            Estou disponível para conversar sobre projetos, oportunidades de
            trabalho ou simplesmente para bater um papo.
          </p>
          <GlassIcons items={socialIcons} />
        </div>
      </div>
    </section>
  );
};
