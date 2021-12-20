
import React, { useState } from 'react'
import CardInfo from '../components/CardInfo';
import "../styles/pages/sobre.css"

function Sobre() {

  function handleShowTextHistory() {
    let sec = document.getElementById("history");
    let hr = document.getElementById("hr1");
    let button = document.getElementById("button-history")
    if (sec.style.display === "none") {
      sec.style.display = "flex";
      hr.style.display = "none";
      button.classList.remove("down");
      button.classList.add("up");

    } else {
      sec.style.display = "none";
      hr.style.display = "block";
      button.classList.remove("up");
      button.classList.add("down");
    }
  }

  function handleShowTextGraduation() {
    let sec = document.getElementById("graduate");
    let hr = document.getElementById("hr2");
    if (sec.style.display === "none") {
      sec.style.display = "flex";
      hr.style.display = "none";

    } else {
      sec.style.display = "none";
      hr.style.display = "block";

    }
  }

  function handleShowTextHobbies() {
    let sec = document.getElementById("hobbies");
    let hr = document.getElementById("hr3");
    if (sec.style.display === "none") {
      sec.style.display = "flex";
      hr.style.display = "none";

    } else {
      sec.style.display = "none";
      hr.style.display = "block";

    }

  }

  return (
    <div className="all-about">
      <h2 className="header">Passado
        <span>
          <button className="arrow" id="button-history" onClick={handleShowTextHistory}></button>
        </span>
      </h2>
      <div className="horizontal-line" id="hr1" />
      <section id="history">
        <CardInfo
          illustra="https://images.unsplash.com/photo-1551736947-ca1f44a894e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1389&q=80"
          textInfo="Sou nascido em São Paulo capital, porém me considero gaúcho. Criado em Porto Alegre, já passei um tempo em Taquara e já fazem mais de 10 anos que moro em Pelotas.
          Tenho 21 anos e desde pequeno gostei de video-games, computadores e tecnologia."
        />
      </section>
      {/* <h2 className="header">Formação
        <span>
          <button className={toggleButtonGraduate} onClick={handleShowTextGraduation}></button>
        </span>
      </h2>
      <div className="horizontal-line" id="hr2" />
      <section id="graduate">
        <CardInfo
          illustra="https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          textInfo="Passei por uma experiência escolar na Inglaterra em 2015, fazendo 2 meses de aula ao equivalente primeiro ano do ensino médio aqui no Brasil.
          Sou formado em técnico em eletrônica pelo IFSUL - Câmpus Pelotas e atualmente estou graduando Bacharelado de Ciência da Computação na UFPel.
          Recentemente conclui o curso de React da Alura, que inclusive tomei como base para fazer essa página."
        />
      </section>
      <h2 className="header">Hobbies
        <span>
          <button className={toggleButtonHobbies} onClick={handleShowTextHobbies}></button>
        </span>
      </h2>
      <div className="horizontal-line" id="hr3" />
      <section className="text" id="hobbies">
        <CardInfo
          illustra="https://images.unsplash.com/photo-1542652694-40abf526446e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          textInfo="Gosto de acompanhar muitos esportes, principalmente basquete e fórmula 1. Além disso eu faço alguns desenhos quando tenho vontade, alguns deles coloquei no meu instagram. Além de estressar um pouco jogando CS ou Valorant."
        />
      </section> */}
    </div>
  )

}

export default Sobre;