let backgroundParallax = document.getElementById('background-parallax');
let silhoutte = document.getElementById('silhoutte');
let silhoutte2 = document.getElementById('silhoutte2');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    backgroundParallax.style.top = value * 0.8 + 'px';
    silhoutte.style.top = value * 0.5 + 'px';
    silhoutte2.style.bottom = value * 1 + 'px';

})