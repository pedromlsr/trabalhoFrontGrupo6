let backgroundParallax = document.getElementById('background-parallax');
let silhoutte = document.getElementById('silhoutte');
let smoke = document.getElementById('smoke');
let flare = document.getElementById('flare');
let logo = document.getElementById('logo');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    backgroundParallax.style.top = value * 0.5 + 'px';
    silhoutte.style.top = value * 0.2 + 'px';
    smoke.style.top = value * 0.5 + 'px';
    flare.style.top = value * 0.3 + 'px';
    logo.style.top = value * 0.8 + 'px';
})

window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()
}

function showNavOnScroll() {
    if (scrollY > 760) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 700) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}
