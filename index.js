'use strict';

// Burger
document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.burger-menu').classList.toggle('open');
    document.querySelector('.burger__content').classList.toggle('open');
})

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
    <a href="#" class="burger__text">${item}</a>
    `;
});


