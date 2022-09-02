const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.header-desktop');
const crossicon = document.querySelector('.cross-icon');
const crossPopupIcon = document.querySelector(".back-cross");
console.log(crossPopupIcon);
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const portfolio = document.querySelector('#portfolio');

hamburger.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
});

crossicon.addEventListener('click', () => {
  

  mobileMenu.style.display = 'none';
  // document.body.classList.remove("overflow")
  // document.body.classList.add("hidden")
  body.style.fontSize = "20rem";
  // document.body.style.setProperty("overflow", "initial");
  // document.body.style.removeProperty("overflow");
});
crossPopupIcon.addEventListener("click", () => {
  // mobileMenu.style.display = "none";
  document.body.classList.remove("overflow")
  // document.body.classList.add("hidden")
  // body.style.fontSize = "20rem";
  // document.body.style.setProperty("overflow", "initial");
  // document.body.style.removeProperty("overflow");
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
