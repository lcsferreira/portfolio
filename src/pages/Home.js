import React from 'react'
import "../styles/pages/home.css";
import perfilPhoto from "../assets/perfilPhoto.jpg"
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  function handleClick() {
    history.push("trabalhos");
  }

  return (
    <div className="content">
      <section className="description">
        <h1>Olá, meu nome é <br /><strong>Lucas Ferreira</strong></h1>
        <p>
          Sou desenvolvedor web, atuando na área de front-end. <br />
          Se quiser saber um pouco dos meu trabalho, clica aqui.
        </p>
        <button onClick={handleClick}>Trabalhos</button>
      </section>
      <section className="perfil-photo-main">
        <img src={perfilPhoto} alt="Foto perfil ilustrativa" />
      </section>
    </div>
  )
}

export default Home;