export default function initSmoothScroll(navLinks) {
    function scrollSection(event) {
        event.preventDefault();
        
        const href = event.currentTarget.getAttribute("href");
        const section = document.querySelector(href);
        const navbarHeight = 80;
        const sectionTop = section.offsetTop - navbarHeight;
        
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', scrollSection);
    });
}
