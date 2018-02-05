const hamburger = document.getElementById('nav-hamburger');
const nav = document.getElementById('site-nav');

const toggleHamburger = () => {
  if(nav.style.display = "none"){nav.style.display = "flex"}
  else {nav.style.display = "none"}
}

hamburger.addEventListener('click', toggleHamburger);
