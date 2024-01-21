'use strict';

document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header__nav').classList.toggle('open');
})


// let burgerMenu = document.querySelector('.burger-menu'),
//     headerBurger = document.querySelectorAll('.header__burger')[1],
//     menuBtn = document.querySelectorAll('.header__burger')[0],
//     burgerContent = document.querySelector('.burger__content');
   
//  Open menu
// headerBurger.addEventListener ('click', function () {
// burgerMenu.style.visibility = 'visible';
// burgerMenu.style.opacity = '1';
// burgerContent.style. transform = 'translateX(0px)';
// });

// Close menu
// menuBtn.addEventListener('click', function(){
   
//     burgerContent.style. transform = '';
//     setTimeout(() => {
//         burgerMenu.style.visibility ='';
//         burgerMenu.style.opacity = '';
      
//     }, 100);
// });