
//слайдер с не закрашенными названиями в главной

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

//слайдер с закрашенными названиями в главной

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

//слайдер главной страницы с картинками

const swiper = new Swiper('.slider1', {
    // Optional parameters
    direction: 'vertical',
    touchStartForcePreventDefault: true,
    mousewheel: {
        eventsTarget: 'body',
      },
      touchEventsTarget: 'container',
    speed: 800,
    swipeHandler: 'body'
});

//слайдер в видео с другими проектами

const videoslider = new Swiper('.videoslider', {
  // Optional parameters
  direction: 'horizontal',
  speed: 400,
  swipeHandler: 'body',
  slidesPerView: 3,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 3,
  centeredSlides: true,
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 9,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 6,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 9,
    }
  }
});


//изменение закрашиваемого слайдера при изменении не закрашиваемого

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

//слайдер сверху страницы проекты

const topSwiper = new Swiper('.topSwiper', {
  autoplay: {
    delay: 2000,
  },
  loop: true,
  speed: 800,
});

//появление мобильного меню

let mobileMenuBtn = document.querySelector('.mob__menu');
let mobileMenu = document.querySelector('.mobileMenu');
mobileMenuBtn.addEventListener('click', ()=>{
  mobileMenuBtn.classList.toggle('active');
  mobileMenu.classList.toggle('active');
})


//появление хедера

let header = document.querySelector('header');
header.classList.add('active')
let last_scroll = 0;
window.onscroll = function(){
  if(window.scrollY > last_scroll){
    header.classList.remove('active')
  }else{
    header.classList.add('active')
  }
  last_scroll = window.scrollY;
}
