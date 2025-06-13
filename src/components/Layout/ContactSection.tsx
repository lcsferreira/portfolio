export const ContactSection = () => {
  return (
    <section className="flex flex-col gap-10">
      <h2 className="self-center text-3xl text-text-secondary ">Contato</h2>
      <div className="flex w-full justify-between gap-10">
        <div className="flex flex-col gap-10 w-1/2">
          <h3 className="text-2xl text-primary font-bold">
            Vamos trabalhar juntos!
          </h3>
          <p className="text-text-secondary">
            Estou disponível para conversar sobre projetos, oportunidades de
            trabalho ou simplesmente para bater um papo.
          </p>
        </div>
        <div className="flex flex-col gap-10 w-1/2">
          <div className="flex gap-4 w-full flex-col border border-gray-500 rounded-lg p-4 bg-gray-800/50 backdrop-blur-md">
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Mensagem" />
            <button type="submit">Enviar</button>
          </div>
        </div>
      </div>
    </section>
  );
};
