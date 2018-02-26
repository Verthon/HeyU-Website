const hamburger = document.getElementById('nav-hamburger');
const nav = document.getElementById('site-nav');

const toggleHamburger = () => {
  nav.style.display = (nav.style.display = 'none') ? 'flex' : 'none';
}

hamburger.addEventListener('click', toggleHamburger);
