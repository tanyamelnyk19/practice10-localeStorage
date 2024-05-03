import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_FORM_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

let formData = JSON.parse(localStorage.getItem(STORAGE_FORM_KEY)) || {};

populateForm();

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_FORM_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(formData);
  localStorage.removeItem(STORAGE_FORM_KEY);
  e.currentTarget.reset();
}

function populateForm() {
  const savedData = localStorage.getItem(STORAGE_FORM_KEY);

  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    if (email) {
      form.elements.email.value = email;
    };

    if (message) {
      form.elements.message.value = message;
    };
  };
}
