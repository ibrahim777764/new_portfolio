const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.header-desktop');
const crossicon = document.querySelector('.cross-icon');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const portfolio = document.querySelector('#portfolio');

hamburger.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
});

crossicon.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

portfolio.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});
about.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

contact.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});
