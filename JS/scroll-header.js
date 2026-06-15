export default function initScrollHeader() {
    const header = document.getElementById('header');
    const navMenu = document.querySelector('.nav__menu');
    
    if (!header) return;
    
    function updateHeader() {
        const isScrolled = window.scrollY >= 50;
        header.dataset.scrolled = isScrolled ? "true" : "false";
        
        if (navMenu) {
            navMenu.style.top = isScrolled ? '4rem' : '5rem';
        }
    }
    
    window.addEventListener('scroll', updateHeader);
    updateHeader(); 
}