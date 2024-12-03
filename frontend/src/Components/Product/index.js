import React from "react";
import "./style.css";


const Product = () => {
  return (
    <section className="sectionProduct" id="products">
      <h1 className="sectionName">Produtos em Destaque</h1>
      <div className="containerProduct">
        <div className="Products" id="Product1">
          <div className="prodImage img1"></div>
          <div className="prodInfos"><p className="prodName">Gatinha bailarina</p>R$40,00</div>
        </div>
        <div className="Products" id="Product2">
          <div className="prodImage img2"></div>
          <div className="prodInfos"><p className="prodName">Guirlanda de Cisne</p>R$60,00</div>
        </div>
        <div className="Products" id="Product3">
          <div className="prodImage img3"></div>
          <div className="prodInfos"><p className="prodName">Papai e Mamãe Noel</p>R$80,00</div>   
        </div>
        <div className="Products" id="Product4">
          <div className="prodImage img4"></div>
          <div className="prodInfos"><p className="prodName">Gurilanda com nome</p>R$70,00</div>     
        </div>
        <div className="Products" id="Product5">
          <div className="prodImage img5"></div>
          <div className="prodInfos"><p className="prodName">Cartão de Natal</p>R$20,00</div>
        </div>
        <div className="Products" id="Product6">
          <div className="prodImage img6"></div>
          <div className="prodInfos"><p className="prodName">Cartão de aniversário</p>R$25,00</div>
        </div>
        <div className="Products" id="Product7">
          <div className="prodImage img7"></div>
          <div className="prodInfos"><p className="prodName">Bolsa de fazendinha</p>R$100,00</div>
        </div>
        <div className="Products" id="Product8">
          <div className="prodImage img8"></div>
          <div className="prodInfos"><p className="prodName">Calendário Advento</p>R$140,00</div>
        </div>
        <div className="Products" id="Product9">
          <div className="prodImage img9"></div>
          <div className="prodInfos"><p className="prodName">Elefantinho</p>R$50,00</div>
        </div>
        <div className="Products" id="Product10">
          <div className="prodImage img10"></div>
          <div className="prodInfos"><p className="prodName">Papai noel de porta</p>R$35,00</div>
        </div>
      </div>
      {/* <nav>
        <ul>
          <li><div className="Products" id="product1"></div></li>
          <li><div className="Products" id="product2"></div></li>
          <li><div className="Products" id="product3"></div></li>
          <li><div className="Products" id="product4"></div></li>
          <li><div className="Products" id="product5"></div></li>
          <li><div className="Products" id="product6"></div></li>
        </ul>
      </nav> */}
    </section>
  );
};

export default Product;
