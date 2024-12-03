import React from "react";
import "./style.css";

const carouselNum = 5;
let actualCarousel = 1;
let oldCarousel = 5
let isCarouselWithAnimation = true;

let carouselAnim = setInterval(() => {
  let banners = document.querySelectorAll('[carouselBanner]')
  let carouselButtons = document.querySelectorAll('[carouselButton]')
  banners.forEach((i) => {
    i.classList.remove("outsideCarousel")
    i.classList.remove("carouselPicture")
    i.classList.remove("outsideCarouselAlt")
    i.classList.remove("carouselPictureAlt")
  })
  carouselButtons.forEach((i) => {
    i.classList.remove('actualItem')
  })
  if (actualCarousel === carouselNum) {
    actualCarousel = 1
    oldCarousel = 5
  } else {
    oldCarousel = actualCarousel
    actualCarousel++
  }
  document.getElementById(`carouselPicture${actualCarousel}`).classList.add('carouselPicture')
  document.getElementById(`carouselPicture${oldCarousel}`).classList.add('outsideCarousel')
  document.getElementById(`carouselButton${actualCarousel}`).classList.add('actualItem')
}, 5000);

const Carousel = () => {
  function carPrev() {
    if (carouselAnim !== undefined) {
      clearInterval(carouselAnim);
      isCarouselWithAnimation = false;
      document.getElementById("carouselPlaying").innerHTML = "play_arrow";
    }

    let banners = document.querySelectorAll('[carouselBanner]')
    let carouselButtons = document.querySelectorAll('[carouselButton]')
    banners.forEach((i) => {
      i.classList.remove("outsideCarousel")
      i.classList.remove("carouselPicture")
      i.classList.remove("outsideCarouselAlt")
      i.classList.remove("carouselPictureAlt")
    })
    carouselButtons.forEach((i) => {
      i.classList.remove('actualItem')
    })

    oldCarousel = actualCarousel
    if (actualCarousel === 1) {
      actualCarousel = carouselNum
    } else {
      actualCarousel--
    }
    document.getElementById(`carouselPicture${actualCarousel}`).classList.add('carouselPictureAlt')
    document.getElementById(`carouselPicture${oldCarousel}`).classList.add('outsideCarouselAlt')
    document.getElementById(`carouselButton${actualCarousel}`).classList.add('actualItem')
  }

  function carNext() {
    if (carouselAnim !== undefined) {
      clearInterval(carouselAnim);
      isCarouselWithAnimation = false;
      document.getElementById("carouselPlaying").innerHTML = "play_arrow";
    }

    let banners = document.querySelectorAll('[carouselBanner]')
    let carouselButtons = document.querySelectorAll('[carouselButton]')
    banners.forEach((i) => {
      i.classList.remove("outsideCarousel")
      i.classList.remove("carouselPicture")
      i.classList.remove("outsideCarouselAlt")
      i.classList.remove("carouselPictureAlt")
    })
    carouselButtons.forEach((i) => {
      i.classList.remove('actualItem')
    })

    oldCarousel = actualCarousel
    if (actualCarousel === carouselNum) {
      actualCarousel = 1
    } else {
      actualCarousel++
    }
    document.getElementById(`carouselPicture${actualCarousel}`).classList.add('carouselPicture')
    document.getElementById(`carouselPicture${oldCarousel}`).classList.add('outsideCarousel')
    document.getElementById(`carouselButton${actualCarousel}`).classList.add('actualItem')
  }


  function playCarousel() {
    if (!isCarouselWithAnimation) {
      carouselAnim = setInterval(() => {
        let banners = document.querySelectorAll('[carouselBanner]')
        let carouselButtons = document.querySelectorAll('[carouselButton]')
        banners.forEach((i) => {
          i.classList.remove("outsideCarousel")
          i.classList.remove("carouselPicture")
          i.classList.remove("outsideCarouselAlt")
          i.classList.remove("carouselPictureAlt")
        })
        carouselButtons.forEach((i) => {
          i.classList.remove('actualItem')
        })
        if (actualCarousel === carouselNum) {
          actualCarousel = 1
          oldCarousel = 5
        } else {
          oldCarousel = actualCarousel
          actualCarousel++
        }
        document.getElementById(`carouselPicture${actualCarousel}`).classList.add('carouselPicture')
        document.getElementById(`carouselPicture${oldCarousel}`).classList.add('outsideCarousel')
        document.getElementById(`carouselButton${actualCarousel}`).classList.add('actualItem')
      }, 5000);
      isCarouselWithAnimation = true;
      document.getElementById("carouselPlaying").innerHTML = "pause";
    } else {
      document.getElementById("carouselPlaying").innerHTML = "play_arrow";
      clearInterval(carouselAnim);
      isCarouselWithAnimation = false;
    }
  }

  function carouselChanger(num) {
    if (carouselAnim !== undefined) {
      clearInterval(carouselAnim);
      isCarouselWithAnimation = false;
      document.getElementById("carouselPlaying").innerHTML = "play_arrow";
    }


    if (actualCarousel !== num) {
      oldCarousel = actualCarousel
      actualCarousel = num
      let banners = document.querySelectorAll('[carouselBanner]')
      let carouselButtons = document.querySelectorAll('[carouselButton]')
      banners.forEach((i) => {
        i.classList.remove("outsideCarousel")
        i.classList.remove("carouselPicture")
        i.classList.remove("outsideCarouselAlt")
        i.classList.remove("carouselPictureAlt")
      })
      carouselButtons.forEach((i) => {
        i.classList.remove('actualItem')
      })

      if (oldCarousel > actualCarousel) {
        document.getElementById(`carouselPicture${actualCarousel}`).classList.add('carouselPictureAlt')
        document.getElementById(`carouselPicture${oldCarousel}`).classList.add('outsideCarouselAlt')
      } else {
        document.getElementById(`carouselPicture${actualCarousel}`).classList.add('carouselPicture')
        document.getElementById(`carouselPicture${oldCarousel}`).classList.add('outsideCarousel')
      }

      document.getElementById(`carouselButton${actualCarousel}`).classList.add('actualItem')

    }
  }

  return (
    <>
      <div className="carousel">
        <span
          class="material-symbols-rounded pauseButton"
          id="carouselPlaying"
          onClick={playCarousel}>
          pause
        </span>
        <div
          className="carouselButtons previous"
          id="previousCarousel"
          onClick={carPrev}>
           <span class="material-symbols-rounded">
            arrow_forward_ios
          </span>
        </div>

        <div className="carouselPicture picture1" id="carouselPicture1" carouselBanner="true"></div>
        <div className="outsideCarousel picture2" id="carouselPicture2" carouselBanner="true">
  
        </div>
        <div className="outsideCarousel picture3" id="carouselPicture3" carouselBanner="true">
        </div>
        <div className="outsideCarousel picture4" id="carouselPicture4" carouselBanner="true">
        </div>
        <div className="outsideCarousel picture5" id="carouselPicture5" carouselBanner="true">

        </div>

        <div
          className="carouselButtons next"
          id="nextCarousel"
          onClick={carNext}>
          <span class="material-symbols-rounded">
            arrow_forward_ios
          </span>
        </div>

        <div className="carouselControls">
        <div className="carouselItem actualItem" id="carouselButton1" carouselButton="true" onClick={() => { carouselChanger(1) }}></div>
        <div className="carouselItem" id="carouselButton2" carouselButton="true" onClick={() => { carouselChanger(2) }}></div>
        <div className="carouselItem" id="carouselButton3" carouselButton="true" onClick={() => { carouselChanger(3) }}></div>
        <div className="carouselItem" id="carouselButton4" carouselButton="true" onClick={() => { carouselChanger(4) }}></div>
        <div className="carouselItem" id="carouselButton5" carouselButton="true" onClick={() => { carouselChanger(5) }}></div>
      </div>
      </div>
    </>
  );
};

export default Carousel;