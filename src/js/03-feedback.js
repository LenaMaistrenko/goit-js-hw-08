console.log('contactFormEl');
const contactFormEl = document.querySelector('.feedback-form');

const UserInfo = {};
contactFormEl.addEventListener('change', formChange);
function formChange(evt) {
  const { target } = evt;
  console.log(target);
}
