import throttle from 'lodash.throttle';
const contactFormEl = document.querySelector('.feedback-form');

const userInfo = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
fillForm();
function fillForm() {
  try {
    const userInfoLS = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log('userInfoLS', userInfoLS);
    if (!userInfoLS) {
      return;
    }
    for (const prop in userInfoLS) {
      console.log('userInfoLS[prop]', userInfoLS[prop]);
      contactFormEl.elements[prop].value = userInfoLS[prop];
    }
  } catch (err) {
    console.error(err);
  }
}
contactFormEl.addEventListener('input', throttle(formChange, 500));

function formChange(evt) {
  const { target } = evt;
  const fieldName = target.name;
  const fieldValue = target.value;
  userInfo[fieldName] = fieldValue;
  localStorage.setItem('feedback-form-state', JSON.stringify(userInfo));
}
contactFormEl.addEventListener('submit', formSubmit);
function formSubmit(evt) {
  evt.preventDefault();
  localStorage.removeItem('feedback-form-state');
  contactFormEl.reset();
}
