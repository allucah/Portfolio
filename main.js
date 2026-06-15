// Animation class modificada
import Animation from './JS/class-animation.js'
import initAnimations from './JS/init-animatons.js'
import initMobileMenu from './JS/mobile-menu.js'
import initDarkMode from './JS/dark-mode.js'
import initScrollHeader from './JS/scroll-header.js'
import initScrollButtons from './JS/scroll-buttons.js'
import initSmoothScroll from './JS/scroll-smooth.js'

function init() {
    initAnimations();
    const navLinks = initMobileMenu();
    initScrollHeader();
    initDarkMode();
    initScrollButtons();
    initSmoothScroll(navLinks);
}

// Aguarda o DOM carregar completamente
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}