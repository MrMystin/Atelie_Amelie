import React from "react";
import "./style.css";
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} href="#home" alt="Ateliê Amélie" />
          <h1>Ateliê Amélie</h1>
      </div>
      <nav>
        <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#products">Produtos</a></li>
            <li><a href="#about">Sobre Nós</a></li>
            <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;