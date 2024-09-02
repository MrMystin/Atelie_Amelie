import React from "react";
import "./style.css";


const Carousel = () => {


    return (
        <div className="carousel">
            <div className="carouselButtons previous" id="previousCarousel"></div>
            <div className="carouselPicture picture1" id="carouselPicture1">

            </div>
            <div className="outsideCarousel testPicture" id="carouselPicture2">
                <h1>Teste Carrossel</h1>
            </div>
            <div className="carouselButtons next" id="previousCarousel"></div>
        </div>
    )
}

export default Carousel;