<?php 
/*
* Template name: close
*/
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="container">
        <div class="wraper">
            <h1>Сайт в разработке</h1>
            <h3>Производим рекламу для кампаний фильмов, сериалов. Многие годы наша команда занимается продвижением лидеров российского кинорынка. Мы работали с Sony Pictures, 20th Century Fox, Disney, Цетрн Партнершип, Фонд Кино, Россия 1, Кинопоиск, Premier и др.</h3>
            <h3>Инсайт — агентство полного цикла, которое может оперативно перейти от разработки к реализации ваших задач. Умение создавать промо-кампании «под ключ» в кратчайшие сроки выгодно отличает от обычных студий. </h3>
        </div>
    </div>
    
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        @font-face {
    font-family: 'Benzin-ExtraBold';
    src: url(./meida/font/benzin-extrabold.ttf);
}
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;900&display=swap');
        .container {
            display: flex;
            flex-direction: column;
            height: 100vh;
            width: 100vw;
            background: black;
            justify-content: center;
        }
        h1 {
font-family: 'Benzin-ExtraBold';
margin-bottom: 27px;
font-size: 54px;
line-height: 140%;
letter-spacing: 0.08em;
text-transform: uppercase;
color: #FFFFFF;
        }
        h3 {
            margin-bottom: 16px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 135%;
letter-spacing: -0.02em;
color: #FFFFFF;
width: 800px;
}
h3:last-child {
    width: 663px;
}
.wraper {
    margin-left: 60px;
}
body {
    background: black;
}
@media(max-width: 1000px) {
    .wraper {
        margin-left: 20px;
    }
    h1 {
font-size: 29px;
line-height: 120%;
}
h3 {
font-size: 13px;
line-height: 130%;
width: 510px;
}
h3:last-child {
width: 510px;

}
}
@media(max-width: 600px) {
h3 {
font-size: 13px;
line-height: 130%;
width: 300px;
}
h3:last-child {
width: 300px;

}
}
    </style>
</body>
</html>