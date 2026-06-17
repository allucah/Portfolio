export default class Animation {
    constructor(containerElement, delayBetweenItems = 0) {
        this.container = containerElement;
        this.itens = this.container.querySelectorAll('[data-anime-item], [data-animation-class]');
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
                const classePersonalizada = item.dataset.animationClass;

                if (classePersonalizada) {
                    item.classList.add(classePersonalizada);
                } else {
                    item.classList.add(classe);
                }
            }
        });
    }
}