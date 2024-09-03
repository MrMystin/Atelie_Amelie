import React from "react";
import { useEffect } from "react";
import "./style.css";

const Carousel = () => {
  function buttons() {
    console.log('a')
  }

  useEffect(() => {
    const carouselNum = 2;
    let actualCarousel = 1;
    let carouselAnim = setInterval(() => {
      if (actualCarousel === carouselNum) {
        actualCarousel = 1;
        document
          .getElementById("carouselPicture1")
          .classList.remove("outsideCarousel");
        document
          .getElementById("carouselPicture1")
          .classList.add("carouselPicture");
        document
          .getElementById("carouselPicture2")
          .classList.add("outsideCarousel");
        document
          .getElementById("carouselPicture2")
          .classList.remove("carouselPicture");
      } else {
        actualCarousel++;
        document
          .getElementById("carouselPicture1")
          .classList.add("outsideCarousel");
        document
          .getElementById("carouselPicture1")
          .classList.remove("carouselPicture");
        document
          .getElementById("carouselPicture2")
          .classList.remove("outsideCarousel");
        document
          .getElementById("carouselPicture2")
          .classList.add("carouselPicture");
      }
    }, 5000);
  });
  return (
    <div className="carousel">
      <div
        className="carouselButtons previous"
        id="previousCarousel"
        onClick={buttons}></div>
      <div className="carouselPicture picture1" id="carouselPicture1"></div>
      <div className="outsideCarousel testPicture" id="carouselPicture2">
        <h1>Teste Carrossel</h1>
      </div>
      <div className="carouselButtons next" id="nextCarousel"></div>
    </div>
  );
};

export default Carousel;
