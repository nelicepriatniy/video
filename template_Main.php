
<?php 
/*
* Template name: главная
*/
get_header();
?>

<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style/style.css">
  <link rel="stylesheet" href="./style/swiper-bundle.min.css">
</head>

<body>
  <header class="active">
    <div class="container">
      <a href="./index.html">
        <div class="logo">
          <img src="./meida/logo.svg" alt="">
        </div>
      </a>
      <div class="mob mob__menu"></div>
      <div class="notMob header__henu">
        <ul>
          <li><a href="./grid.html">Проекты</a></li>
          <li><a href="./trailers.html">Трейлеры </a></li>
          <li><a href="">Промо </a></li>
          <li><a href="">Графика </a></li>
          <li><a href="">Клипы </a></li>
        </ul>
      </div>
    </div>
  </header>
  <div class="header__henu mobileMenu mob">
    <ul>
      <li><a href="./grid.html">Проекты</a></li>
      <li><a href="./trailers.html">Трейлеры </a></li>
      <li><a href="">Промо </a></li>
      <li><a href="">Графика </a></li>
      <li><a href="">Клипы </a></li>
    </ul>
    <div class="blockAnim"></div>
  </div>
    <div class="swiper slider1">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide bg-slide">
          <div class="hrefa"><a href="" class="nameop">asdasd</a></div>
          <img src="./meida/bg1.png" alt="задний фон первого слайда" class="bg">
        </div>
        <div class="swiper-slide bg-slide">
          <div class="hrefa"><a href="" class="nameop">asdasd</a></div>
          <img src="./meida/bg3.png" alt="задний фон первого слайда" class="bg rev">
        </div>
        <div class="swiper-slide bg-slide">
          <div class="hrefa"><a href="" class="nameop">asdasd</a></div>
          <img src="./meida/bg2.png" alt="задний фон первого слайда" class="bg">
        </div>
      </div>
    </div>
    <div class="containerSlides">
      <div class="swiper slider-name">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide"><a class="name">Грозный папа <span>01</span></a></div>
          <div class="swiper-slide"><a class="name">конёк-горбунок<span>02</span></a></div>
          <div class="swiper-slide"><a class="name">дети моря<span>03</span></a></div>
        </div>
      </div>
        <div class="swiper slider-name-color">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide"><a href="#" class="name active namehref" data-href="asd">Грозный папа<span>01</span></a></div>
            <div class="swiper-slide"><a href="#" class="name active namehref" data-href="asdasd">конёк-горбунок<span>02</span></a></div>
            <div class="swiper-slide"><a href="#" class="name active namehref" data-href="asdasdasd">дети моря<span>03</span></a></div>
          </div>
        </div>
      </div>

  <script src="./js/jquery-3.6.0.min.js"></script>
  <script src="js/swiper-bundle.min.js"></script>
  <script src="js/app.js"></script>
</body>

</html>
