import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/components/navbar.css";

function NavBar() {
  return (
    <ul className="nav-bar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/trabalhos">Trabalhos</Link>
      </li>
      <li>
        <Link to="/sobre">Sobre</Link>
      </li>
      <li>
        <Link to="/contato">Contato</Link>
      </li>
    </ul>
  );
}

export default NavBar;