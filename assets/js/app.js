'use strict';

let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
  navbar.classList.toggle('u-box-shadow', window.scrollY > 0);
});
