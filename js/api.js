import {showAlert} from './util.js';
import {enableFilters} from './filters.js';


/**
 * Получает данные похожих объявлений с сервера
 *
 * @param {function} onSuccess - колбэк, вызываемый в случае успешного выполнения запроса
 */
const getData = (onSuccess) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        showAlert('Не удалось загрузить список похожих объявлений. Попробуйте перезагрузить страницу');
      }
    })
    .then((announcements) => {
      onSuccess(announcements);
      enableFilters();
    });
};

const sendData = (onSuccess, formData) => {
  fetch(
    'https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        console.log('Неуспешная отправка формы');
      }
    });
};

export {getData, sendData};
