import React, { useState } from 'react'
import "../styles/pages/sobre.css"

function Sobre() {
  const [toggleButtonHistory, settoggleButtonHistory] = useState("up-arrow");
  const [toggleButtonGraduate, settoggleButtonGraduate] = useState("up-arrow");
  const [toggleButtonHobbies, settoggleButtonHobbies] = useState("up-arrow");

  function handleShowTextHistory() {
    let sec = document.getElementById("history");
    if (sec.style.display === "none") {
      sec.style.display = "flex";
      settoggleButtonHistory("up-arrow");
    } else {
      sec.style.display = "none";
      settoggleButtonHistory("down-arrow");
    }
  }

  function handleShowTextGraduation() {
    let sec = document.getElementById("graduate");
    if (sec.style.display === "none") {
      sec.style.display = "flex";
      settoggleButtonGraduate("up-arrow");
    } else {
      sec.style.display = "none";
      settoggleButtonGraduate("down-arrow");
    }
  }

  function handleShowTextHobbies() {

  }

  return (
    <div className="all-about">
      <h2 className="header">Passado
        <span>
          <button className={toggleButtonHistory} id="button-history" onClick={handleShowTextHistory}></button>
        </span>
      </h2>
      <section className="text" id="history">
        <p>
          Sou nascido em São Paulo capital, porém me considero gaúcho. Criado em Porto Alegre, já passei um tempo em Taquara e já fazem mais de 10 anos que moro em Pelotas.
          Tenho 21 anos e desde pequeno gostei de video-games, computadores e tecnologia.
        </p>
      </section>
      <h2 className="header">Formação
        <span>
          <button className={toggleButtonGraduate} onClick={handleShowTextGraduation}></button>
        </span>
      </h2>
      <section className="text" id="graduate">
        <p>
          Passei por uma experiência escolar na Inglaterra em 2014, fazendo 2 meses de aula ao euqivalente primeiro ano do ensino médio aqui no Brasil.
          Sou formado em técnico em eletrônica pelo IFSUL - Câmpus Pelotas e atualmente estou graduando Bacharelado de Ciência da Computação na UFPel.
          Recentemente conclui o curso de React da Alura, que inclusive tomei como base para fazer essa página.
        </p>
      </section>
      <h2 className="header">Hobbies
        <span>
          <button className={toggleButtonHobbies} onClick={handleShowTextHobbies}></button>
        </span>
      </h2>
      <section className="text">
      </section>
    </div>
  )

}

export default Sobre;