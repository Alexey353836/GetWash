function popup () {
    
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
let popupActive = document.querySelector('.popup.open');
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
function popupCloseForm(){
            bodyUnlock();
            const popupForm = document.querySelector('.popup');
            popupForm.classList.remove('open');
               // Разбокировать кнопку бургера
               burger.addEventListener('click', burgerOpenClose);
};

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
    // scrollController.disabledScroll();
    bodyLock();
}

function closeMenu() {
    burgerMenu.classList.remove('open');
    burgerContent.classList.remove('open'); 
    burgerBody.classList.remove('open');
    burger.classList.remove('active');
    burger.classList.add('burger-open');
    // scrollController.enabledScroll();
   bodyUnlock();
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



// Modal
const btnModal = document.querySelectorAll('[data-Modal]'),
    modal = document.querySelector('.modal'),
    modalDialog = document.querySelector('.modal__dialog');
    const dataClose = document.querySelectorAll('[data-close]');

function openModal(){
   burger.removeEventListener('click', burgerOpenClose);
   modal.classList.add('show');
   modalDialog.classList.add('show');
   bodyLock();
}

// Open modal by scroll
function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.
        documentElement.scrollHeight -1) {
                openModal(); 
                window.removeEventListener('scroll', showModalByScroll);
    } 
}
window.addEventListener('scroll', showModalByScroll);
// Open modal by scroll end 

btnModal.forEach(item => {
    item.addEventListener('click', openModal);
});

// close escape
document.addEventListener('keydown', (e) => {
if (e.code === 'Escape' && modal.classList.contains('show')) {
 closeModal();
}
});
// close escape end

const modalTimerId = setTimeout(openModalEdd, 300000);

function openModalEdd () {
    setTimeout(() => {
        openModal();
    }, 800)
    closeModal();
}

function closeModal() {
    burger.addEventListener('click', burgerOpenClose );
    modal.classList.remove('show');
    modalDialog.classList.remove('show');
    bodyUnlock();
}

dataClose.forEach(item => {
    item.addEventListener('click', closeModal);
});

modal.addEventListener('click', (e) => {
    if(e.target === modal) {
        closeModal();
    }
});


// form-json
const forms = document.querySelectorAll('form');

const message = {
    loading: '',
    success: 'Спасибо, мы скоро с вами свяжемся',
    failure: 'Что-то пошло не так...'
};

forms.forEach(item => {
    postData(item);
});

function postData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const statusMassage = document.createElement('img');
        statusMassage.src = message.loading;
        statusMassage.style.cssText = `
            display: block;
            margin: 0 auto;
        `;
        
        form.insertAdjacentElement('afterend', statusMassage);

        const formData = new FormData(form);

        const object = {};
        formData.forEach(function(value, key) {
            object[key] = value;
        });

        fetch("server.php", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(object)
        })
        .then(data => data.text())
        .then(data => {
            console.log(data);
            showThanksModal(message.success);
            statusMassage.remove();
        })
        .catch(() => {
            showThanksModal(message.failure);
        })
        .finally(() => {
            form.reset();
        });
    });
}

function showThanksModal (message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    closeModal();
    popupCloseForm();
  
    setTimeout(() => {
        setTimeout(() => {
            setTimeout(() => {
                setTimeout(() => {
                    thanksModal.remove();
                     prevModalDialog.classList.remove('hide');
                }, 800)
                thanksModal.classList.remove('show');
                closeModal();
            }, 2000);
            thanksModal.classList.add('show');
        }, 100);
        openModal();
       
        prevModalDialog.classList.add('hide');
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
    }, 800);
}

}
module.exports = popup;