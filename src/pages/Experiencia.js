import React from 'react'
import "../styles/pages/experciencia.css"
import downloadIcon from "../assets/file-arrow-down-solid.svg";
import angularIcon from "../assets/icons/angular-svgrepo-com.svg";
import csharpIcon from "../assets/icons/c-sharp-svgrepo-com.svg"
import cssIcon from "../assets/icons/css-fill-svgrepo-com.svg";
import htmlIcon from "../assets/icons/html-fill-svgrepo-com.svg"
import javaIcon from "../assets/icons/java-svgrepo-com.svg"
import jsIcon from "../assets/icons/javascript-svgrepo-com.svg"
import reactIcon from "../assets/icons/react-svgrepo-com.svg"
import resumePdf from "../assets/resume/LucasFerreira.pdf"


function Experiencia() {
  return (
    <div className="content-container">
      <div>
        <section className="graduation">
          <h2>
            Formação
          </h2>
          <ul>
            <li>
              Técnico em eletrônica
            </li>
            <li>
              Cursando
              Ciência da Computação
            </li>
          </ul>
        </section>
        <section>
          <h2>
            Cursos
          </h2>
          <ul>
            <li>
              HTML e CSS
            </li>
            <li>
              React Alura
            </li>
          </ul>
        </section>
      </div>
      <div>
        <section className="tecnologies">
          <h2>
            Tecnologias
          </h2>
          <div className="tecnologies-icons">
            <img src={reactIcon} alt="ícone angular" />
            <img src={htmlIcon} alt="ícone angular" />
            <img src={cssIcon} alt="ícone angular" />
            <img src={angularIcon} alt="ícone angular" />
            <img src={jsIcon} alt="ícone angular" />
            <img src={javaIcon} alt="ícone angular" />
            <img className="last" src={csharpIcon} alt="ícone angular" />
          </div>
        </section>
        <section className="download-resume">
          <a href={resumePdf} download="curriculoLSF">
            <button className="button-download">
              <img src={downloadIcon} alt="" /> Currículo
            </button>
          </a>
        </section>
      </div>
    </div>
  )

}

export default Experiencia;