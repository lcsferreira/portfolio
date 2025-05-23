import Lucas from "../../assets/Image.png";

export const HeroSection = () => {
  return (
    <section className="flex flex-row justify-center gap-10 items-center z-10">
      <div className="flex flex-col justify-center">
        <p className="text-text-secondary text-2xl">
          Hello, I am
          <br />
          <span className="text-primary font-bold text-4xl">
            Lucas Ferreira
          </span>
          <br />
          <span className="text-text-secondary text-2xl font-bold">
            A Web Software Developer
          </span>
        </p>
        <div className="flex gap-4">
          <button>Download CV</button>
          <button>My Works</button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img src={Lucas} alt="Lucas Ferreira" />
      </div>
    </section>
  );
};
