const carouselNum = 2
let actualCarousel = 1
let carouselAnim = setInterval(() => {
    if (actualCarousel === carouselNum) {
        actualCarousel = 1
        document.getElementById('carouselPicture1').classList.remove('outsideCarousel')
        document.getElementById('carouselPicture1').classList.add('carouselPicture')
        document.getElementById('carouselPicture2').classList.add('outsideCarousel')
        document.getElementById('carouselPicture2').classList.remove('carouselPicture')
    } else {
        actualCarousel++
        document.getElementById('carouselPicture1').classList.add('outsideCarousel')
        document.getElementById('carouselPicture1').classList.remove('carouselPicture')
        document.getElementById('carouselPicture2').classList.remove('outsideCarousel')
        document.getElementById('carouselPicture2').classList.add('carouselPicture')
    }

}, 5000);

function changeCarousel(direction) {
    if (direction == 'next') {
        if (actualCarousel === carouselNum) {
            actualCarousel = 1
            document.getElementById('carouselPicture1').classList.remove('outsideCarousel')
            document.getElementById('carouselPicture1').classList.add('carouselPicture')
            document.getElementById('carouselPicture2').classList.add('outsideCarousel')
            document.getElementById('carouselPicture2').classList.remove('carouselPicture')
        } else {
            actualCarousel++
            document.getElementById('carouselPicture1').classList.add('outsideCarousel')
            document.getElementById('carouselPicture1').classList.remove('carouselPicture')
            document.getElementById('carouselPicture2').classList.remove('outsideCarousel')
            document.getElementById('carouselPicture2').classList.add('carouselPicture')
        }
    } else if (direction == 'previous') {
        if (actualCarousel === 1) {
            actualCarousel = carouselNum
            document.getElementById('carouselPicture1').classList.add('outsideCarousel')
            document.getElementById('carouselPicture1').classList.remove('carouselPicture')
            document.getElementById('carouselPicture2').classList.remove('outsideCarousel')
            document.getElementById('carouselPicture2').classList.add('carouselPicture')
        } else {
            actualCarousel--
            document.getElementById('carouselPicture1').classList.remove('outsideCarousel')
            document.getElementById('carouselPicture1').classList.add('carouselPicture')
            document.getElementById('carouselPicture2').classList.add('outsideCarousel')
            document.getElementById('carouselPicture2').classList.remove('carouselPicture')
        }
    }
}