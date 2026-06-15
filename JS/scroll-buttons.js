export default function initScrollButtons() {
    const button = document.querySelector('.button');
    const button2 = document.querySelector('.about__description .button');
    
    if (button) {
        button.addEventListener('click', () => {
            window.scrollTo(0, 640);
        });
    }
    
    if (button2) {
        button2.addEventListener('click', () => {
            const contect = document.querySelector('.contect');
            const contectTop = contect.offsetTop;
            window.scrollTo({
                top: contectTop,
                behavior: "smooth",
            });
        });
    }
}
