import {removeErrorMessage, removeErrorMessageOnEsc, showAlert, showErrorMessage} from './util.js';
import {enableFilters} from './filters.js';

const similarAnnouncementsUrl = 'https://23.javascript.pages.academy/keksobooking/data';
const submitFormUrl = 'https://23.javascript.pages.academy/keksobooking';

/**
 * Получает данные похожих объявлений с сервера
 *
 * @param {function} onSuccess - колбэк, вызываемый в случае успешного выполнения запроса
 */
const getData = (onSuccess) => {
  fetch(similarAnnouncementsUrl)
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
    submitFormUrl,
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
        document.addEventListener('keydown', removeErrorMessageOnEsc);
        document.addEventListener('click', removeErrorMessage);
      }
    })
    .catch(() => {
      showErrorMessage();
      document.addEventListener('keydown', removeErrorMessageOnEsc);
      document.addEventListener('click', removeErrorMessage);
    });
};

export {getData, sendData};
