import Animation from './class-animation.js';

export default function initAnimations() {
    const containers = document.querySelectorAll('[data-anime-container]');
    
    const animations = Array.from(containers).map(container => ({
        animation: new Animation(container, parseFloat(container.dataset.delay) || 0.08),
        className: container.dataset.animationClass || 'ShowCard'
    }));
    
    function handleScroll(forceClassName = null) {
        animations.forEach(({ animation, className }) => {
            // Se forceClassName for passado, usa ele para todas
            // Senão, usa a classe específica de cada container
            const classToUse = forceClassName || className;
            animation.animar(classToUse);
        });
    }
    
    // Inicializa com as classes padrão de cada container
    handleScroll();
    
    // Scroll continua com as classes padrão
    window.addEventListener('scroll', () => handleScroll());
    
    // Exemplo: se quiser forçar uma classe específica em algum momento
    // handleScroll('UniversalClass');
}