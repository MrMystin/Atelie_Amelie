import React from "react";
import "./style.css";


const Infos = () => {
  return (
    <section className="sectionInfos">
      <div>
        <span class="material-symbols-rounded">
          payments
        </span>
        <h1>Pague com Pix</h1>
      </div>
      <div>
        <span class="material-symbols-rounded">
          local_shipping
        </span>
        <h1>Entregas em SP</h1>
      </div>
      <div>
        <span class="material-symbols-rounded">
          credit_card
        </span>
        <h1>Parcele em até 3x</h1>
      </div>
    </section>
  );
};

export default Infos;
