export default function initSmoothScroll(navLinks) {
    const sections = document.querySelectorAll('section[id]');
    const navbarHeight = 80;
    
    function scrollSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        const sectionTop = section.offsetTop - navbarHeight;
        
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
    
    function updateActiveLink() {
        const scrollY = window.scrollY;
        let currentSection = null;
        
        sections.forEach(sec => {
            const offset = sec.offsetTop - navbarHeight - 100;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');
            
            if (scrollY >= offset && scrollY < offset + height) {
                currentSection = id;
            }
        });
        
        navLinks.forEach(link => link.classList.remove('active'));
        
        if (currentSection) {
            const correspondingLink = document.querySelector(`header nav a[href="#${currentSection}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', scrollSection);
    });
    
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateActiveLink();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    updateActiveLink();
}