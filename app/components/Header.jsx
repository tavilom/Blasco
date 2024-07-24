// app/components/Header.js
'use client'
import { useState } from 'react'; // Importe o useState do React
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar se o menu está aberto

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna o estado do menu
  };

  return (
    <header className={styles.header}>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light ">
        <a className="navbar-brand" href="#">
          <img src="../logo.svg" alt="Logo" className={styles.logo} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu} // Adiciona o onClick para chamar a função toggleMenu
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sobre
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Equipe
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
