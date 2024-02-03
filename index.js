'use strict';

// Burger
const burger = document.querySelector('.burger');
burger.addEventListener('click', close);

    function close() {
        burger.classList.toggle('active');
        document.querySelector('.burger-menu').classList.toggle('open');
        document.querySelector('.burger__content').classList.toggle('open');
}


// Menu
const black = document.querySelector('.black');
const burgerNavClose = document.querySelector('.burger__nav-close');

burgerNavClose.addEventListener("click", close); 
black.addEventListener('click', close);


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
    <a href="#" class="burger__text">${item}</a>
    `;
});


