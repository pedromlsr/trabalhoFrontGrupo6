window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
   showNavOnScroll()
   showBackToTopButtonOnScroll()
}

function showNavOnScroll() {
   if (scrollY > 0) {
      navigation.classList.add('scroll')
   } else {
      navigation.classList.remove('scroll')
   }
}

function showBackToTopButtonOnScroll() {
   if (scrollY > 0) {
      backToTopButton.classList.add('show')
   } else {
      backToTopButton.classList.remove('show')
   }
}
