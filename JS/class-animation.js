export default class Animation {
    constructor(containerElement, delayBetweenItems = 0) {
        this.container = containerElement;
        this.itens = this.container.querySelectorAll('[data-anime-item]');
        this.middle = window.innerHeight * 0.85;
        this.delayBetweenItems = delayBetweenItems;
    }
    
    animar(classe) {
        this.itens.forEach((item, index) => {
            const topEl = item.getBoundingClientRect().top;
            if (topEl < this.middle) {
                if (this.delayBetweenItems > 0) {
                    item.style.transitionDelay = `${index * this.delayBetweenItems}s`;
                }
                item.classList.add(classe);
            }
        });
    }
}
