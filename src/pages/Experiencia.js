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
        <section className="skills">
          <h2>
            Habilidades
          </h2>
          <ul>
            <li>
              React
              <div className="bar">
                <div className="level-react"></div>
              </div>
            </li>
            <li>
              Angular
              <div className="bar">
                <div className="level-angular"></div>
              </div>
            </li>
            <li>
              C
              <div className="bar">
                <div className="level-c"></div>
              </div>
            </li>
            <li>
              Java
              <div className="bar">
                <div className="level-java"></div>
              </div>
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