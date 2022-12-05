const swiper1 = new Swiper('.slider-name', {
    // Optional parameters
    direction: 'vertical',
    mousewheel: {
        eventsTarget: 'body',
      },
      touchEventsTarget: 'container',
    speed: 800,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 120,
    swipeHandler: 'body'
});
const swiper2 = new Swiper('.slider-name-color', {
    // Optional parameters
    direction: 'vertical',
    mousewheel: {
        eventsTarget: 'body',
      },
      touchEventsTarget: 'container',
    speed: 800,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 120,
    swipeHandler: 'body'
});

const swiper = new Swiper('.slider1', {
    // Optional parameters
    direction: 'vertical',
    mousewheel: {
        eventsTarget: 'body',
      },
      touchEventsTarget: 'container',
    speed: 800,
    swipeHandler: 'body'
});




let slideIndexx = 1;

swiper.on('slideChangeTransitionStart', function () {
  let slidesIndex = document.querySelectorAll('.bg-slide');
  slidesIndex.forEach((el, i, arr)=>{
    if (el.classList.contains('swiper-slide-active')){
      slideIndexx = i ;
      console.log(i);
    }
  })
  swiper2.slideTo(slideIndexx);
  swiper1.slideTo(slideIndexx);
});


const topSwiper = new Swiper('.topSwiper', {
  autoplay: {
    delay: 2000,
  },
  loop: true,
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