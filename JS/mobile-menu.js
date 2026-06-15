export default function initMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navList = document.getElementById('nav-list');
    
    function removeHeader() {
        navList.classList.add('list__hedden');
        navMenu.classList.remove('show__header');
        navClose.classList.add('icon__hidden');
        navToggle.classList.remove('icon__hidden');
    }
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show__header');
            navList.classList.remove('list__hedden');
            navClose.classList.remove('icon__hidden');
            navToggle.classList.add('icon__hidden');
        });
    }
    
    if (navClose) {
        navClose.addEventListener('click', removeHeader);
    }
    
    const navLinks = document.querySelectorAll('.nav__links');
    navLinks.forEach(link => {
        link.addEventListener('click', removeHeader);
    });
    
    return navLinks;
}
