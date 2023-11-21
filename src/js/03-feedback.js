import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

form.addEventListener('input', throttle(onInput, 500));

function onInput(evt) {
  const userInput = {
    email: form.email.value,
    message: form.message.value,
  };

  localStorage.setItem(localStorageKey, JSON.stringify(userInput));
}
if (localStorage.length !== 0) {
  form.email.value = JSON.parse(localStorage.getItem(localStorageKey)).email;
  form.message.value = JSON.parse(
    localStorage.getItem(localStorageKey)
  ).message;
}

form.addEventListener('submit', onSubmitListener);
function onSubmitListener(evt) {
  evt.preventDefault();
  const userInput = {
    email: form.email.value,
    message: form.message.value,
  };
  console.log(userInput);

  if (this.email.value === '' || this.message.value === '') {
    return alert(
      'Ви не заповнили потрібні поля!!! Будь ласка, заповніть усі поля!'
    );
  }

  localStorage.clear();
  form.reset();
}
//====== 2 варіант =========================//
// import throttle from 'lodash.throttle';

// const LS_KEY = 'feedback-form-state';

// const form = document.querySelector('.feedback-form');
// form.addEventListener('input', throttle(onInputData, 500));
// form.addEventListener('submit', onFormSubmit);

// let dataForm = JSON.parse(localStorage.getItem(LS_KEY)) || {};
// const { email, message } = form.elements;
// descFeedbackForm();

// function onInputData() {
//   dataForm = { email: email.value, message: message.value };
//   localStorage.setItem(LS_KEY, JSON.stringify(dataForm));
//   console.log(dataForm);
// }

// function descFeedbackForm() {
//   if (dataForm) {
//     email.value = dataForm.email || '';
//     message.value = dataForm.message || '';
//   }
// }

// function onFormSubmit(event) {
//   event.preventDefault();
//   //console.log({ email: email.value, message: message.value });

//   if (email.value === '' || message.value === '') {
//     return alert(
//       'Ви не заповнили потрібні поля!!! Будь ласка, заповніть усі поля!'
//     );
//   }

//   localStorage.removeItem(LS_KEY);
//   event.currentTarget.reset();
//   dataForm = {};
// }
//======== 3 вариант =============
// import throttle from 'lodash.throttle';

// const form = document.querySelector('.feedback-form');
// const localStorageKey = 'feedback-form-state';
// //
// //
// function chekInputValue(key) {
//   // перевірка чи заповненні поля email та message
//   const savedData = localStorage.getItem(key);
//   const parsedData = JSON.parse(savedData);
//   if (parsedData === null) {
//     return;
//   }
//   form[0].value = parsedData.email;
//   form[1].value = parsedData.message;
// }
// chekInputValue(localStorageKey);
// //
// //
// form.addEventListener('input', throttle(onInputListener, 500));
// function onInputListener(evt) {
//   // створення та запис данних до локального сховища
//   const enteredData = {
//     email: form.email.value,
//     message: form.message.value,
//   };

//   localStorage.setItem(localStorageKey, JSON.stringify(enteredData));
//   const savedSettings = localStorage.getItem(localStorageKey);
//   const parsedSettings = JSON.parse(savedSettings);
//   console.log(parsedSettings);
// }
// //
// //
// form.addEventListener('submit', onSubmitListener);
// function onSubmitListener(evt) {
//   //очистка сховища та даних в полях
//   evt.preventDefault();
//   localStorage.removeItem(localStorageKey);
//   form.reset();
// }
