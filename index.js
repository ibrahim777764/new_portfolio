const menuBtn = document.querySelector('.menu-btn');
const headerNavMobile = document.querySelector('.nav-mobile');
const btnCloseNav = document.querySelector('.btn-close-nav');
const linkPortfolio = document.querySelector('.link-portfolio');
const linkAbout = document.querySelector('.link-about');
const linkContact = document.querySelector('.link-contact');


menuBtn.addEventListener('click', () => {
  menuBtn.classList.add('hidden');
  headerNavMobile.classList.remove('hidden');
});

btnCloseNav.addEventListener('click', () => {
  menuBtn.classList.remove('hidden');
  headerNavMobile.classList.add('hidden');
});

linkPortfolio.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

linkAbout.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

linkContact.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

let isVisible = false;

function toggleModalVisibility() {
  isVisible = !isVisible;
  sideMenuModal.classList.toggle('is-visible');
  mainPage.style.display = isVisible ? 'none' : 'block';
}

sideMenuButton.addEventListener('click', () => {
  toggleModalVisibility();
});

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', (ev) => {
    toggleModalVisibility();
    window.location.hash = ev.target.getAttribute('data-location');
  });
});