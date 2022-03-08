const menuBtn = document.querySelector('.menu-btn');
const headerNavMobile = document.querySelector('.nav-mobile');
const btnCloseNav = document.querySelector('.btn-close-nav');
const linkPortfolio = document.querySelector('.link-portfolio');
const linkAbout = document.querySelector('.link-about');
const linkContact = document.querySelector('.link-contact');
const closeDetailBtn = document.querySelector('#close-detail');
const detailModal = document.querySelector('#mobile-details-modal');
const seeProjectButtons = document.querySelectorAll(".see-project");

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

seeProjectButtons.forEach((mybutton) => {
  mybutton.addEventListener('click', function(){
    detailModal.classList.remove('hidden');
    console.log(detailModal);
  });
});


closeDetailBtn.addEventListener('click', () => {
  detailModal.classList.add('hidden');
});