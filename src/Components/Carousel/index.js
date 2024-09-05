import React from "react";
import "./style.css";

const Carousel = () => {
  function buttons() {
    console.log('a')
  }

  const carouselNum = 2;
  let actualCarousel = 1;
  const carouselAnim = setInterval(() => {
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





  return (
    <div className="carousel">
      <div
        className="carouselButtons previous"
        id="previousCarousel"
        onClick={() => {
          if (carouselAnim != undefined) {
            clearInterval(carouselAnim)
          }

          document
            .getElementById('carouselPicture1')
            .removeAttribute('class');
          document
            .getElementById('carouselPicture2')
            .removeAttribute('class');
          document
            .getElementById('carouselPicture1')
            .className = 'picture1';
          document
            .getElementById('carouselPicture2')
            .className = 'testPicture';


          if (actualCarousel == 1) {
            actualCarousel = 2
            document
              .getElementById("carouselPicture1")
              .classList.add("outsideCarouselAlt");
            document
              .getElementById("carouselPicture1")
              .classList.remove("carouselPictureAlt");
            document
              .getElementById("carouselPicture2")
              .classList.remove("outsideCarouselAlt");
            document
              .getElementById("carouselPicture2")
              .classList.add("carouselPictureAlt");
          } else {
            actualCarousel--
            document
              .getElementById("carouselPicture1")
              .classList.remove("outsideCarouselAlt");
            document
              .getElementById("carouselPicture1")
              .classList.add("carouselPictureAlt");
            document
              .getElementById("carouselPicture2")
              .classList.add("outsideCarouselAlt");
            document
              .getElementById("carouselPicture2")
              .classList.remove("carouselPictureAlt");
          }
        }}></div>
      <div className="carouselPicture picture1" id="carouselPicture1"></div>
      <div className="outsideCarousel testPicture" id="carouselPicture2">
        <h1>Teste Carrossel</h1>
      </div>
      <div className="carouselButtons next" id="nextCarousel" onClick={() => {
        if (carouselAnim != undefined) {
          clearInterval(carouselAnim)
        }

        document
          .getElementById('carouselPicture1')
          .removeAttribute('class');
        document
          .getElementById('carouselPicture2')
          .removeAttribute('class');
        document
          .getElementById('carouselPicture1')
          .className = 'picture1';
        document
          .getElementById('carouselPicture2')
          .className = 'testPicture';

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
      }}></div>
    </div>
  );
};

export default Carousel;
