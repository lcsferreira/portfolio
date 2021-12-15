import React from 'react'
import "../styles/components/navbar.css";

function NavBar() {
  return (
    <ul className="nav-bar">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/trabalhos">Trabalhos</a>
      </li>
      <li>
        <a href="/sobre">Sobre</a>
      </li>
      <li>
        <a href="/contato">Contato</a>
      </li>
    </ul>
  );
}

export default NavBar;