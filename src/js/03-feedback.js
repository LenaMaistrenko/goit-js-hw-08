console.log('contactFormEl');
const contactFormEl = document.querySelector('.feedback-form');

const UserInfo = {};
// const fillContactFormFields = () => {
//   const userInfoFromLS = localStorageService.load('userData');

//   if (userInfoFromLS === undefined) {
//     return;
//   }

//   for (const prop in userInfoFromLS) {
//     contactFormEl.elements[prop].value = userInfoFromLS[prop];
//   }
// };

//fillContactFormFields();
contactFormEl.addEventListener('change', formChange);
function formChange(evt) {
  const { target } = evt;
  console.log(target);
  const fieldName = target.name;
  const fieldValue = target.value;
  console.log(fieldName, fieldValue);
}
