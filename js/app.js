
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
    swipeHandler: 'body',
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 114,
      },
      // when window width is >= 480px
      480: {
        spaceBetween: 120,
      },
      // when window width is >= 640px
      640: {
        spaceBetween: 120,
      }
    }
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
    swipeHandler: 'body',
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 114,
      },
      // when window width is >= 480px
      480: {
        spaceBetween: 120,
      },
      // when window width is >= 640px
      640: {
        spaceBetween: 120,
      }
    }
});

//слайдер главной страницы с картинками

const swiper = new Swiper('.slider1', {
    // Optional parameters
    direction: 'vertical',
    touchStartForcePreventDefault: true,
    delay: 2000,
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
  slidesPerView: "auto",
  watchSlidesProgress: true,
  spaceBetween: 3,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  centeredSlides: true,
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
    },
    // when window width is >= 480px
    640: {
      slidesPerView: 5,
    },
    // when window width is >= 640px
    1000: {
      slidesPerView: 7,
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
  effect: 'fade',
});

//появление мобильного меню

let mobileMenuBtn = document.querySelector('.mob__menu');
let mobileMenu = document.querySelector('.mobileMenu');
mobileMenuBtn.addEventListener('click', ()=>{
  mobileMenuBtn.classList.toggle('active');
  mobileMenu.classList.toggle('active');
})

let whatPage = document.querySelector('main').getAttribute('data-p');
let headerBtn = document.querySelectorAll('.headerBtn');

if (!whatPage == null) {
  headerBtn.forEach((el)=>{
    if (el.getAttribute('id') == whatPage) {
      el.classList.add('active')
    }
  })
}



// let bgimg = document.querySelectorAll('.videobg');
// let bgimgslide = document.querySelectorAll('.bg-slide');
// let numOfActiveSlide = '123';
// document.addEventListener('click', ()=>{
//   bgimgslide.forEach((el, i)=>{
//     el.classList.remove('right');
//     el.classList.remove('left');
//     if(el.classList.contains('swiper-slide-active')){
//       numOfActiveSlide = i;
//     }

//     el[numOfActiveSlide + 3].classList.add('right')
//     el[numOfActiveSlide - 3].classList.add('left')
//   })
//   console.log(numOfActiveSlide)
  
// })