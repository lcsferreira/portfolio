import React from 'react';
import "../styles/pages/contato.css"

function Contato() {

  return (
    <div>
      <div className="container-email">
        <input className="input-mail" type="email" name="email" id="email" placeholder="Seu Email" />
        <textarea className="input-text-mail" rows="20" cols="20" name="mail-text" id="mail-text" placeholder="Insira a mensagem..." />
        <div className="send-bt">
          <p>Entre em contato comigo diretamente via e-mail,  ou pelas redes socias.</p>
          <button type="submit">Enviar</button>
        </div>
      </div>
      <div className="container-social-media">
        <ul>
          <li>
            <a href="">Linkedin</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contato;