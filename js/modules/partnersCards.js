function partnersCards () {
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
}
module.exports = partnersCards;