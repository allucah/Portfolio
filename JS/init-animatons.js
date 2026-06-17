import Animation from './class-animation.js';

export default function initAnimations() {
    const containers = document.querySelectorAll('[data-anime-container]');
    
    const animations = Array.from(containers).map(container => ({
        animation: new Animation(container, parseFloat(container.dataset.delay) || 0.08),
        className: container.dataset.animationClass || 'ShowCard'
    }));
    
    function handleScroll(forceClassName = null) {
        animations.forEach(({ animation, className }) => {
            const classToUse = forceClassName || className;
            animation.animar(classToUse);
        });
    }
    
    handleScroll();
    
    window.addEventListener('scroll', () => handleScroll());
}