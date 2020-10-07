$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
    });

    let sideIcon = document.querySelector('.side-bar-icon');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');
    sideIcon.addEventListener('click', function(e){
        e.preventDefault()
        mobileNav.classList.add('open');
    })
    times.addEventListener('click', function(e){
        e.preventDefault();
        mobileNav.classList.remove('open');
    })
})