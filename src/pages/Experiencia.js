import React from 'react'
import "../styles/pages/experciencia.css"
import downloadIcon from "../assets/file-arrow-down-solid.svg";


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
        <section>
          <h2>
            Habilidades
          </h2>
          <ul>
            <li>
              React
            </li>
            <li>
              Angular
            </li>
            <li>
              C
            </li>
            <li>
              Java
            </li>
          </ul>
        </section>
        <section className="download-resume">
          <button className="button-download">
            <img src={downloadIcon} alt="" /> Currículo
          </button>
        </section>
      </div>
    </div>
  )

}

export default Experiencia;