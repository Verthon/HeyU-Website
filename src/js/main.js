const hamburger = document.getElementById('nav-hamburger');
const nav = document.getElementById('site-nav');

const toggleHamburger = () => {
  nav.style.display = (nav.style.display == 'flex') ? 'none' : 'flex';
}

hamburger.addEventListener('click', toggleHamburger);
