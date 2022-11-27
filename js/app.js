

const swiper1 = new Swiper('.slider-name', {
    // Optional parameters
    direction: 'vertical',
    mousewheel: {
        eventsTarget: 'body',
      },
    speed: 800,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 120,
});
const swiper2 = new Swiper('.slider-name-color', {
    // Optional parameters
    direction: 'vertical',
    mousewheel: {
        eventsTarget: 'body',
      },
    speed: 800,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 120,
});

const swiper = new Swiper('.slider1', {
    // Optional parameters
    direction: 'vertical',
    mousewheel: {
        eventsTarget: 'body',
      },
    speed: 800,
});

function dohref (){
    let hreffrom = document.querySelectorAll('.namehref');
}

let mobileMenuBtn = document.querySelector('.mob__menu');
let mobileMenu = document.querySelector('.mobileMenu');
mobileMenuBtn.addEventListener('click', ()=>{
  mobileMenuBtn.classList.toggle('active');
  mobileMenu.classList.toggle('active');
})