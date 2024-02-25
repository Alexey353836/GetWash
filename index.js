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
        padding-right: ${(window.innerWidth - document.body.offsetWidth)}px;
        `;
        document.body.style.cssText = `
        overflow: hidden;
        top:-${scrollController.scrollPosition}px;
        left: 0;
        padding-right: ${(window.innerWidth - document.body.offsetWidth)}px;
        `;
        document.documentElement.style.scrollBehavior = 'unset';
    },
    enabledScroll() {
        setTimeout(() => {
            window.scroll({top: scrollController.scrollPosition});
            document.body.style.cssText = ``;
            document.documentElement.style.scrollBehavior = '';
            header.style.cssText = ` `;
            document.body.style.cssText = ``;
        }, 800);
    },
}




// Scroll 2 and Popups
const popupLincks = document.querySelectorAll('.popup-linck');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
const timeout = 800;

let unlock = true;

// Событие открыть попап
if (popupLincks.length > 0){
    for (let index = 0; index < popupLincks.length; index++){
        const popuplinck = popupLincks[index];
        popuplinck.addEventListener('click', function(e) {
            const popupName = popuplinck.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

// Событие закрыть попап
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function(e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        })
    }
}

// Функция открыть попап
function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive){
            popupClose(popupActive, false);
        }else{
            bodyLock();
            // Блокировать кнопку бургера
            burger.removeEventListener('click', burgerOpenClose);
        }
    }
    curentPopup.classList.add('open');
    curentPopup.addEventListener('click', function(e){
        if (!e.target.closest('.popup__content')){
            popupClose(e.target.closest('.popup'));
        }
    });
}

// Функция закрыть попап
function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnlock();
               // Разбокировать кнопку бургера
               burger.addEventListener('click', burgerOpenClose);
        }
    }
}

// Функция блокировать попап
function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    
    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout);
}

// Функция разблокировать попап
function bodyUnlock() {
    setTimeout(function () {
        if (lockPadding.length > 0) {
            for ( let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
       body.style.paddingRight = '0px';
         body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout)
}




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

    


// Menu
// const navLeft = document.querySelector('.nav__left'),
//      burgerNavBox1 = document.querySelector('.burger__nav-box-1');
// const menuBox = {
//     menu:[
//         'Как использовать',
//         'Партнерам',
//         'Скачать',
//         'Отзывы',
//         'Контакты'
//     ]
// }

// menuBox.menu.sort();
// navLeft.innerHTML = '';
// burgerNavBox1.innerHTML = '';
// menuBox.menu.forEach((item) => {
//     navLeft.innerHTML += `
//     <a href="#" class="nav__left-text">${item}</a>
//     `;
//     burgerNavBox1.innerHTML += `
//     <div class="box_burger-text"><a href="#" class="burger__text">${item}</a></div>
//     `;
// });




// Menu Constructor
class MenuConstructor{
    constructor(link, text, parentSelector){
        this.link = link;
        this.text = text;
        this.parent = document.querySelector(parentSelector);
    }
    render(){
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="nav__left-item">
        <a href=${this.link} class="nav__left-text">${this.text}</a> 
        </div>
        `;
        this.parent.append(element);
    }
    renderBurger(){
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="box_burger-text">
            <a href=${this.link} class="burger__text">${this.text}</a>
        </div>
        `;
        this.parent.append(element);
    }
}
//Menu links
{
    new MenuConstructor('#','Как использовать','.nav__left').render();
    new MenuConstructor('#','Как использовать','.burger__nav-box-1').renderBurger();

    new MenuConstructor('#', 'Партнерам','.nav__left').render();
    new MenuConstructor('#', 'Партнерам','.burger__nav-box-1').renderBurger();

    new MenuConstructor('#','Скачать','.nav__left').render();
    new MenuConstructor('#','Скачать','.burger__nav-box-1').renderBurger();

    new MenuConstructor('#','Отзывы','.nav__left').render();
    new MenuConstructor('#','Отзывы','.burger__nav-box-1').renderBurger();

    new MenuConstructor('#','Контакты','.nav__left').render();
    new MenuConstructor('#','Контакты','.burger__nav-box-1').renderBurger();
}





// start__box-2-item (карточки)
class MenuStartsCard {
    constructor(icon, title, text, parentSelector, ...classes) {
        this.icon = icon;
        this.title = title;
        this.text = text;
        this.classes = classes;
        this.parent = document.querySelector(parentSelector)
    }

    render() {
        const element = document.createElement('div');
        if (this.classes.length === 0) {
            this.element = 'start__box-2-item';
            element.classList.add(this.element);
        }else {
            this.classes.forEach(className => {element.classList.add(className)});
        }

        element.innerHTML = `
            <i class="${this.icon} start__box-2-icon"></i>
            <div class="start__box-2-boxText">
                <p class="start__box-2-title">
                    ${this.title}
                </p>
                <p class="start__box-2-text">
                   ${this.text}
                </p>
            </div>
        `;
        this.parent.append(element);
    }
}
// Starts Cards
{
    new MenuStartsCard(
        'fa-solid fa-download',
        'Скачай и зарегистрируйся',
        'Наше приложение доступно в Apple Store и Google Play',
        '.start__box-2-items',
        // 'start__box-2-item',
        // 'start__red'
    ).render();
    new MenuStartsCard(
        'fa-solid fa-location-dot',
        ' Выбери ближайшую автомойку',
        'Из свободных поблизости или оставь заказ на удобное время',
        '.start__box-2-items'
    ).render();
    new MenuStartsCard(
        'fa-solid fa-list',
        'Выбери дополнительные услуги',
        'Можешь их добавить к своему основному заказу',
        '.start__box-2-items'
    ).render();
    new MenuStartsCard(
        'fa-solid fa-mobile-screen-button ',
        'Оплати внутри приложения',
        'Бесконтактная оплата внутри приложения и прозрачные цены',
        '.start__box-2-items'
    ).render();
}




// Partners item (карточки)  
class MenuPartnersCard{
    constructor(icon, text, parentSelector, ...classes) {
        this.icon = icon;
        this.text = text;
        this.classes = classes;
        this.parent = document.querySelector(parentSelector);
    }

    render() {
        const element = document.createElement('div');
        if (this.classes.length === 0) {
            this.element = 'partners__item';
            element.classList.add(this.element);
        }else {
            this.classes.forEach(className => element.classList.add(className));
        }

        element.innerHTML = `
                <i class="${this.icon} partners__icons"></i>
                <p class="partners__item-text">
                    ${this.text}
                </p>
        `;
        this.parent.append(element);
    }
}
// Partners Cards
{
    new MenuPartnersCard(
        'fa-solid fa-book',
        ' Просмотривайте историю заказа',
        '.partners .partners__items',
        // 'partners__item',
        // 'partners__red'
    ).render();
    new MenuPartnersCard(
        'fa-regular fa-calendar-days',
        'Создание отчета неделя/месяц/год ',
        '.partners .partners__items'
    ).render();
    new MenuPartnersCard(
        'fa-solid fa-user-tie',
        ' Обратная связь от клиентов',
        '.partners .partners__items'
    ).render();
    new MenuPartnersCard(
        'fa-solid fa-star',
        'Контроль качества работы сотрудников',
        '.partners .partners__items'
    ).render();
    new MenuPartnersCard(
        'fa-solid fa-file-invoice-dollar',
        ' Бесконтактная оплата работы',
        '.partners .partners__items',
    ).render();
}




// Modal
const btnModal = document.querySelectorAll('[data-btnModal]'),
    modal = document.querySelector('.modal'),
    modalDialog = document.querySelector('.modal__dialog');
    const dataClose = document.querySelectorAll('[data-close]');

function openModal(){
   burger.removeEventListener('click', burgerOpenClose);
   modal.classList.add('show');
   modalDialog.classList.add('show');
   scrollController.disabledScroll();
}



// const modalTimerId = setTimeout(openModal, 100000);

// function showModalByScroll() {
//     if (window.pageYOffset + document.documentElement.clientHeight >= document.
//         documentElement.scrollHeight -1) {
//         openModal(); 
//         window.removeEventListener('scroll', showModalByScroll);
//     } 
// }
// window.addEventListener('scroll', showModalByScroll);

btnModal.forEach(item => {
    item.addEventListener('click', openModal);
});

function closeModal() {
    burger.addEventListener('click', burgerOpenClose );
    modal.classList.remove('show');
    modalDialog.classList.remove('show');
    scrollController.enabledScroll();
}

dataClose.forEach(item => {
    item.addEventListener('click', closeModal);
});

modal.addEventListener('click', (e) => {
    if(e.target === modal) {
        closeModal();
    }
});

