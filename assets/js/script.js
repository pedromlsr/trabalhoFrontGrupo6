let backgroundParallax = document.getElementById('background-parallax');
let silhoutte = document.getElementById('silhoutte');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    backgroundParallax.style.top = value * 0.5 + 'px';
    silhoutte.style.top = value * 0.2 + 'px';
})