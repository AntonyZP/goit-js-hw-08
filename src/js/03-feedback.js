import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
};

const formData = {};
refs.feedbackForm.addEventListener('submit', onFormSubmit);
refs.feedbackForm.addEventListener('input', throttle(onFormInput, 500));
populateInput();

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  if (localStorage.getItem(STORAGE_KEY)) {
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  }
  e.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);
}

function populateInput() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  //   if (!savedMessage) {
  //     return;
  //   }
  if (savedMessage) {
    // refs.textarea.value = savedMessage;
    //   refs.email.value = savedMesage;
    refs.feedbackForm.email.value = savedMessage.email || '';
    refs.feedbackForm.message.value = savedMessage.message || '';
  }
}
