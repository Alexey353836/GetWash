'use strict';

// Burger
const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');

burger.addEventListener('click', closeOpen);

    function closeOpen () {
        burger.classList.toggle('active');
        document.querySelector('.burger-menu').classList.toggle('open');
        document.querySelector('.burger__content').classList.toggle('open');
      
}


// Burger menu
const burgerNavClose = document.querySelector('.burger__nav-close');

burgerNavClose.addEventListener("click", closeOpen); 
burgerMenu.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('close')){
        closeOpen ();
        }
});




// Menu
const navLeft = document.querySelector('.nav__left'),
     burgerNavBox1 = document.querySelector('.burger__nav-box-1');
const menuBox = {
    menu:[
        'Как использовать',
        'Партнерам',
        'Скачать',
        'Отзывы',
        'Контакты'
    ]
}

menuBox.menu.sort();
navLeft.innerHTML = '';
burgerNavBox1.innerHTML = '';
menuBox.menu.forEach((item) => {
    navLeft.innerHTML += `
    <a href="#" class="nav__left-text">${item}</a>
    `;
    burgerNavBox1.innerHTML += `
    <div class="box_burger-text"><a href="#" class="burger__text">${item}</a></div>
    `;
});
