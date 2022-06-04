// navigation
const barBtn = document.querySelector('.js__btn-bars')
const navG = document.querySelector('.js__navigation')
const closeBtn = document.querySelector('.js__close')
const noClose = document.querySelector('.js__navigation-container')

function showNav(){
    navG.classList.add('open')
}

function hideNav(){
    navG.classList.remove('open')
}

barBtn.addEventListener('click',showNav)
closeBtn.addEventListener('click',hideNav)
navG.addEventListener('click',hideNav)
noClose.addEventListener('click', function(event){
    event.stopPropagation()
})




// open sub navigation
const btnNav = document.querySelector('.js__arow-btn')
const subNav = document.querySelector('.js__sub-navigation')
const btnNav2 = document.querySelector('.js__arow-btn2')
const subNav2 = document.querySelector('.js__sub-navigation2')

function showSubnavigation(){
    subNav.classList.add('open')
}
function showSubnavigation2(){
    subNav2.classList.add('open')
}
btnNav.addEventListener('click',showSubnavigation)
btnNav2.addEventListener('click',showSubnavigation2)