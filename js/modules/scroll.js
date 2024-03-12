function scroll () {
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
}
module.exports = scroll;