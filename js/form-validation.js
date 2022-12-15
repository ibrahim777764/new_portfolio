const form = document.querySelector('.contact');
const formEmail = document.querySelector('#email-address');
const error = document.querySelector('.error');
const errormessage = document.querySelector('.error-message');

form.addEventListener('submit', (event) => {
  if (formEmail.value.match(/^[a-z.0-9-_]+@[a-z.0-9-_]+$/)) {
    error.classList.add('hide');
    errormessage.textContent = '';
    formEmail.style.border = 'none';
  } else {
    event.preventDefault();
    error.classList.remove('hide');
    errormessage.textContent = 'OOOPS! Please type your Email in lower case';
    formEmail.style.border = '3px solid #f47174';
  }
});
