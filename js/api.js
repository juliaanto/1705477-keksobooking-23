import {showAlert, showErrorMessage} from './util.js';
import {enableFilters} from './filters.js';

const SIMILAR_ANNOUNCEMENTS_URL = 'https://23.javascript.pages.academy/keksobooking/data';
const SUBMIT_FORM_URL = 'https://23.javascript.pages.academy/keksobooking';

/**
 * Получает данные похожих объявлений с сервера
 *
 * @param {function} onSuccess - колбэк, вызываемый в случае успешного выполнения запроса
 */
const getData = (onSuccess) => {
  fetch(SIMILAR_ANNOUNCEMENTS_URL)
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
    })
    .catch(() => {
      showAlert('Не удалось загрузить список похожих объявлений. Попробуйте перезагрузить страницу');
    });
};

const sendData = (onSuccess, formData) => {
  fetch(
    SUBMIT_FORM_URL,
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        showErrorMessage();
      }
    })
    .catch(() => {
      showErrorMessage();
    });
};

export {getData, sendData};
