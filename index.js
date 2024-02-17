'use strict';

//scroll
// Фиксированный обьект
const header = document.querySelector('.header');
// Фиксированный обьект end
const scrollController = {
   scrollPosition: 0,
  disabledScroll() {
      scrollController.scrollPosition = window.scrollY;
      header.style.cssText = `
    //   padding-right:20px;
      padding-right: ${(window.innerWidth - document.body.offsetWidth + px)};
    `;
      document.body.style.cssText = `
      overflow: hidden;
      top:-${scrollController.scrollPosition}px;
      left: 0;
      padding-right: ${(window.innerWidth - document.body.offsetWidth + px)};
      `;
      document.documentElement.style.scrollBehavior = 'unset';
  },
  enabledScroll() {
    window.scroll({top: scrollController.scrollPosition});
    document.body.style.cssText = ``;
    document.documentElement.style.scrollBehavior = '';
    header.style.cssText = ` `;
    document.body.style.cssText = ``;
    },
}
//scroll end




// Burger
const burger = document.querySelector('.burger');
const burgerOpen = document.querySelector('.burger-open');
const burgerMenu = document.querySelector('.burger-menu');
const burgerBody = document.querySelector('.burger__body');
const burgerContent = document.querySelector('.burger__content');
const burgerClose = document.querySelector('.burger-close');
const close = document.querySelectorAll('.close');


function openMenu(){
    burgerMenu.classList.add('open');
    burgerContent.classList.add('open'); 
    burgerBody.classList.add('open');
    burger.classList.remove('burger-open');
    burger.classList.add('active');
    scrollController.disabledScroll();
}

function closeMenu() {
    burgerMenu.classList.remove('open');
    burgerContent.classList.remove('open'); 
    burgerBody.classList.remove('open');
    burger.classList.remove('active');
    burger.classList.add('burger-open');
    scrollController.enabledScroll();
}

function burgerOpenClose() {
    if (burger.classList.contains('burger-open')){
        openMenu();
    }else {
        closeMenu();
    }
}

burger.addEventListener('click', burgerOpenClose);

close.forEach(e => {
    e.addEventListener('click', closeMenu);
})

// Burger menu
// burgerMenu.addEventListener('click', (e) => {
//     if (e.target && e.target.classList.contains('close')){
//         closeMenu ();
//         }
//     if (e.target && e.target === burgerMenu){
//         closeMenu();
//         }
// });
// Burger end
    



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
// Menu end




// Modal
const btn = document.querySelectorAll('.button'),
    modal = document.querySelector('.modal'),
    modalDialog = document.querySelector('.modal__dialog'),
    modalClose = document.querySelector('.modal__close');

function openModal(){
   burger.removeEventListener('click', burgerOpenClose);
   modal.classList.add('show');
   modalDialog.classList.add('show');
   scrollController.disabledScroll();
}

const modalTimerId = setTimeout(openModal, 100000);

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

function closeModal() {
    burger.addEventListener('click', burgerOpenClose );
    modal.classList.remove('show');
    modalDialog.classList.remove('show');
    scrollController.enabledScroll();
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if(e.target === modal) {
        closeModal();
    }
});
// Modal end

