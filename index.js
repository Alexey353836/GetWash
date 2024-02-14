'use strict';

// Burger
const burger = document.querySelector('.burger');
const burgerOpen = document.querySelector('.burger-open');
const burgerMenu = document.querySelector('.burger-menu');
const burgerContent = document.querySelector('.burger__content');
const burgerClose = document.querySelector('.burger-close');
const close = document.querySelector('.close');


function openMenu(){
    burgerMenu.classList.add('open');
    burgerContent.classList.add('open'); 
    burger.classList.remove('burger-open');
    burger.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    burgerMenu.classList.remove('open');
    burgerContent.classList.remove('open'); 
    burger.classList.remove('active');
    burger.classList.add('burger-open');
    document.body.style.overflow = '';
}

burger.addEventListener('click', () => {
    if (burger.classList.contains('burger-open')){
        openMenu();
    }else {
        closeMenu();
    }
});

close.addEventListener('click', closeMenu);

// Burger menu
burgerMenu.addEventListener('click', (e) => {
    // if (e.target && e.target.classList.contains('close')){
    //     closeMenu ();
    //     }
    if (e.target && e.target === burgerMenu){
        closeMenu();
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


// Modal

const btn = document.querySelectorAll('.button'),
    modal = document.querySelector('.modal'),
    modalDialog = document.querySelector('.modal__dialog'),
    modalClose = document.querySelector('.modal__close');

// Открыть Модальное окно

function openModal(){
   modal.classList.add('show');
   modalDialog.classList.add('show');
   document.body.style.overflow = 'hidden';

}

const modalTimerId = setTimeout(openModal, 5000);

function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.
        documentElement.scrollHeight -1) {
        openModal(); 
        window.removeEventListener('scroll', showModalByScroll);
    } 
}

window.addEventListener('scroll', showModalByScroll);

btn.forEach(item => {
    item.addEventListener('click', openModal);
});

 //  Закрыть модальное окно

function closeModal() {
    modal.classList.remove('show');
    modalDialog.classList.remove('show');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if(e.target === modal) {
        closeModal();
    }
});


