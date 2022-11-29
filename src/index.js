import './less/index.less'

// Your code goes here!
const navLinks = document.querySelectorAll('.nav-link');
const logoHead = document.querySelector('.logo-heading');
const introH2 = document.querySelector('.intro h2');
const introp = document.querySelector('.intro p');
const contHome = document.querySelectorAll('.text-content h2')
const contDest = document.querySelector('.content-destination')
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

introH2.addEventListener('wheel', evt => {
    evt.target.style.fontWeight = '900';
})

introp.addEventListener('dblclick', evt => {
    evt.target.style.fontSize = '3em';
})

window.addEventListener('scroll', evt => {
    contHome.forEach(element => element.style.color = 'red');
})

window.addEventListener('load', () => {
    alert("Welcome to the Fun Bus!")
})

introp.addEventListener('copy', evt => {
    evt.target.style.color = 'purple';
})

contDest.addEventListener('mouseenter', evt => {
    evt.target.style.backgroundColor = 'green';
})

contDest.addEventListener('mouseleave', evt => {
    evt.target.style.backgroundColor = 'white';
})

navLinks[0].addEventListener('click', evt => {
    evt.preventDefault();
    console.log(`evt prevented`);
})