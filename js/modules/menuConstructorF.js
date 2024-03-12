function menuConstructorF () {
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

}
module.exports = menuConstructorF;