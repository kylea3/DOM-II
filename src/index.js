import './less/index.less'

// Your code goes here!
const navLinks = document.querySelectorAll('.nav-link');
const logoHead = document.querySelector('.logo-heading');
const logoSpinning = [
    {transform: 'rotate(0) scale(1)'},
    {transform: 'rotate(360deg) scale(0)'}
];

const logoTiming = {
    duration: 2000,
    iterations: 1,
}

navLinks.forEach(element => {
    element.addEventListener('mouseover', evt => {
    evt.target.style.backgroundColor = 'orange';
        
    })    
})

navLinks.forEach(element => {
    element.addEventListener('mouseout', evt => {
    evt.target.style.backgroundColor = 'white';
        
    })    
})

logoHead.addEventListener('click', () => {
    logoHead.animate(logoSpinning, logoTiming);
})

