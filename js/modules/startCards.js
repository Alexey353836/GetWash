function startCards () {
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
}
module.exports = startCards;