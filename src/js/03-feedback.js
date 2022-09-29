import throttle from 'lodash.throttle';
// localStorage.clear();
const inputForm = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('.feedback-form [type="email"]');
const inputText = document.querySelector('.feedback-form [name="message"]');
const inputSubmit = document.querySelector('.feedback-form [type="submit"]');

const formData = { email: '', message: '' };
inputEmail.value = formData.email;
inputText.value = formData.message;

// console.log(localStorage.getItem('feedback-form-state'));

if (localStorage.getItem('feedback-form-state')) {
  const localEmail = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).email;
  const localMessage = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).message;
  inputEmail.value = localEmail;
  inputText.value = localMessage;
}

inputEmail.addEventListener(
  'input',
  throttle(onInputEmail, [(wait = 500)], [(options = {})])
);
inputText.addEventListener(
  'input',
  throttle(onInputMessage, [(wait = 500)], [(options = {})])
);
inputForm.addEventListener('submit', onSubmit);

function onInputEmail(event) {
  formData.email = event.target.value;
  formData.message = inputText.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  console.log(localStorage.getItem('feedback-form-state'));
}

function onInputMessage(event) {
  formData.email = inputEmail.value;
  formData.message = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmit(event) {
  event.preventDefault();

  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.clear();
  event.currentTarget.reset();
}
