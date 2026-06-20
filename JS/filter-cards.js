const  FilterButton = document.querySelectorAll('.filter__button button');
const filterableCards = document.querySelectorAll('.project__cotente .project__card');

export default function filtercards (e){
    document.querySelector('.filter-active').classList.remove('filter-active')

    e.target.classList.add('filter-active')
    
    filterableCards.forEach(cards =>{
        cards.classList.add('hide')
        
        if(cards.dataset.name === e.target.dataset.name ||  e.target.dataset.name === 'all'){
            cards.classList.remove('hide')

        }
    })
}
FilterButton.forEach(butons => butons.addEventListener('click', filtercards))