import React from 'react'
import CardInfo from '../components/CardInfo';
import "../styles/pages/sobre.css"

function Sobre() {

  function handleShowTextHistory() {
    let sec = document.getElementById("history");
    let hr = document.getElementById("hr1");
    let button = document.getElementById("button-history")
    if (sec.style.display === "none") {
      sec.classList.remove("splash-out-animation");
      sec.classList.add("splash-in-animation")
      sec.style.display = "flex";
      hr.style.display = "none";
      button.classList.remove("down");
      button.classList.add("up");
    } else {
      sec.classList.remove("splash-in-animation");
      sec.classList.add("splash-out-animation");
      setTimeout(() => {
        sec.style.display = "none";
        hr.style.display = "block";
      }, 590)
      button.classList.remove("up");
      button.classList.add("down");
    }
  }

  function handleShowTextGraduation() {
    let sec = document.getElementById("graduate");
    let hr = document.getElementById("hr2");
    let button = document.getElementById("button-graduation");
    if (sec.style.display === "none") {
      sec.classList.remove("splash-out-animation");
      sec.classList.add("splash-in-animation")
      sec.style.display = "flex";
      hr.style.display = "none";
      button.classList.remove("down");
      button.classList.add("up");
    } else {
      sec.classList.remove("splash-in-animation");
      sec.classList.add("splash-out-animation");
      setTimeout(() => {
        sec.style.display = "none";
        hr.style.display = "block";
      }, 590)
      button.classList.remove("up");
      button.classList.add("down");
    }
  }

  function handleShowTextHobbies() {
    let sec = document.getElementById("hobbies");
    let hr = document.getElementById("hr3");
    let button = document.getElementById("button-hobbies");
    if (sec.style.display === "none") {
      sec.classList.remove("splash-out-animation");
      sec.classList.add("splash-in-animation")
      sec.style.display = "flex";
      hr.style.display = "none";
      button.classList.remove("down");
      button.classList.add("up");
    } else {
      sec.classList.remove("splash-in-animation");
      sec.classList.add("splash-out-animation");
      setTimeout(() => {
        sec.style.display = "none";
        hr.style.display = "block";
      }, 590)
      button.classList.remove("up");
      button.classList.add("down");
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
      <section className="card-container" id="history">
        <CardInfo
          illustra="https://images.unsplash.com/photo-1551736947-ca1f44a894e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1389&q=80"
          textInfo="Sou nascido em S??o Paulo capital, por??m me considero ga??cho. Criado em Porto Alegre, j?? passei um tempo em Taquara e j?? fazem mais de 10 anos que moro em Pelotas.
          Tenho 21 anos e desde pequeno gostei de video-games, computadores e tecnologia."
        />
      </section>
      <h2 className="header">Forma????o
        <span>
          <button className="arrow" id="button-graduation" onClick={handleShowTextGraduation}></button>
        </span>
      </h2>
      <div className="horizontal-line" id="hr2" />
      <section className="card-container" id="graduate">
        <CardInfo
          illustra="https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          textInfo="Passei por uma experi??ncia escolar na Inglaterra em 2015, fazendo 2 meses de aula ao equivalente primeiro ano do ensino m??dio aqui no Brasil.
          Sou formado em t??cnico em eletr??nica pelo IFSUL - C??mpus Pelotas e atualmente estou graduando Bacharelado de Ci??ncia da Computa????o na UFPel.
          Recentemente conclui o curso de React da Alura, que inclusive tomei como base para fazer essa p??gina."
        />
      </section>
      <h2 className="header">Hobbies
        <span>
          <button className="arrow" id="button-hobbies" onClick={handleShowTextHobbies}></button>
        </span>
      </h2>
      <div className="horizontal-line" id="hr3" />
      <section className="card-container" id="hobbies">
        <CardInfo
          illustra="https://images.unsplash.com/photo-1542652694-40abf526446e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          textInfo="Gosto de acompanhar muitos esportes, principalmente basquete e f??rmula 1. Al??m disso eu fa??o alguns desenhos quando tenho vontade, alguns deles coloquei no meu instagram. Al??m de estressar um pouco jogando CS ou Valorant."
        />
      </section>
    </div>
  )

}

export default Sobre;