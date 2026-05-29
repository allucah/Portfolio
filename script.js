const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose  = document.getElementById('nav-close');
    navList   = document.getElementById('nav-list');

// mostrar menu
if(navToggle){
    navToggle.addEventListener('click', ()=>{
    navMenu.classList.add('show__header'); // mostra a lista
    
    navList.classList.remove('list__hedden'); // remoiver hidden das class 
    navClose.classList.remove('icon__hidden');

    navToggle.classList.add('icon__hidden'); // colocando hidden no botao
    })
}

// função remover header list
function removeHeader(){
    navList.classList.add('list__hedden'); // esconder a lista
    navMenu.classList.remove('show__header'); // mostrar a lista

    navClose.classList.add('icon__hidden'); // esconder o icone
    navToggle.classList.remove('icon__hidden') // remover do que estiver oculto
}

if(navClose){
    navClose.addEventListener('click', removeHeader)
}

// remover quando clikar no nav-link
const navLinks = document.querySelectorAll('.nav__links')

navLinks.forEach(link =>{
    link.addEventListener('click', removeHeader)
});


    // show header full

    const showHeader = () =>{
        const header = document.getElementById('header');
        const navMenu = document.querySelector('.nav__menu');
        if(this.scrollY >= 50){
            header.classList.add('full-header');
            navMenu.style.top = '4rem'
        }else{
            header.classList.remove('full-header');
            navMenu.style.top = ''

        }
    }
    window.addEventListener('scroll', showHeader)

// darke mode

const bodyEl = document.body,
        darke = document.getElementById('dark'),
        ligth = document.getElementById('ligth'),
        butToggle = document.getElementById('dark-mode');

butToggle.addEventListener('click', ()=>{
    bodyEl.classList.toggle('dark-mode');
    darke.classList.toggle('dark-hidden')
    ligth.classList.toggle('dark-hidden')
});

const topSection = document.querySelectorAll('.about__image ' );
const topOff = topSection.offsetTop;


const button = document.querySelector('.button');

    button.addEventListener('click', ()=>{
        window.scrollTo(0, 640)
    
});

const button2 = document.querySelector('.about__description .button');

    button2.addEventListener('click', ()=>{
        const contect = document.querySelector('.contect');
        const contectTop = contect.offsetTop ;
        window.scrollTo({
            top: contectTop ,
            behavior: "smooth",
        })
    
});

// ao clicar ir para o top da section que tiver o href igual o link onde foi clicado 
function scrollSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const navbarHeight = 80; 

    const sectionTop = section.offsetTop - navbarHeight;
    console.log(sectionTop)
    window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', scrollSection);
});

// animações
class Animation {
    constructor(content, itens) {
        this.content = document.querySelector(content);
        this.itens = document.querySelectorAll(itens);
        this.middle = window.innerHeight * 0.85;
    }
    
    animar(classe) {
        this.itens.forEach(item => {
            const topEl = item.getBoundingClientRect().top;
            if(topEl < this.middle) item.classList.add(classe);
        });
    }
}

const animations = [
    new Animation('.about_conteiner', '.about_animation'),
    new Animation('.skills__content', '.skillAnimation'),
    new Animation('.project__content', '.project__card'),
    new Animation('.contect__content', '.contect__card')
];

function handleScroll() {
    animations.forEach(anim => anim.animar('ShowCard'));
}

window.addEventListener('scroll', handleScroll);
