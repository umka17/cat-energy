let menuBtn = document.querySelector('.site-navigation__button ');
let nav = document.querySelector('.main-nav');

nav.classList.remove('main-nav--opened');
nav.classList.add('main-nav--closed');

menuBtn.addEventListener('click', function () {
  if (nav.classList.contains('main-nav--opened')) {
    nav.classList.remove('main-nav--opened');
    nav.classList.add('main-nav--closed');
  }
  else if (nav.classList.contains('main-nav--closed')) {
    nav.classList.remove('main-nav--closed');
    nav.classList.add('main-nav--opened');
  }
})