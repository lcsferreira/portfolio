import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/components/navbar.css";

function NavBar() {
  return (
    <div>
      <ul className="nav-bar">
        <h1>L S F</h1>
        <div className="nav-bar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/experiencia">Experiência</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default NavBar;