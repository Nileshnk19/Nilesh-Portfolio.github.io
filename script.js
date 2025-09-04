const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    navbar.classList.add('hidden');
    header.classList.add('header-scrolled');
  } else {
    navbar.classList.remove('hidden');
    header.classList.remove('header-scrolled');
  }
});

const aboutSection = document.getElementById('about');
const aboutButton = document.querySelector('.btn-2');

aboutButton.addEventListener('click', () => {
  aboutSection.classList.add('show');
});
