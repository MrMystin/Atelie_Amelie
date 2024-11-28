import React from "react";
import "./style.css";
import logoNB from '../../assets/logo/neutralBlack.png';
import logoNW from '../../assets/logo/neutralWhite.png';
import logoNG from '../../assets/logo/neutralGold.png';
import logoP1 from '../../assets/logo/fg-P1.png';
import logoP2 from '../../assets/logo/fg-P2.png';
import logoG1 from '../../assets/logo/fg-G1.png';
import logoG2 from '../../assets/logo/fg-G2.png';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logoG1} href="#home" alt="Ateliê Amélie" />
          <h1>Ateliê Amélie</h1>
      </div>
      <nav>
        <ul>
            <li><a href="#products">Produtos</a></li>
            <li><a href="#about">Sobre Nós</a></li>
            <li><a href="#contact">Carrinho</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;