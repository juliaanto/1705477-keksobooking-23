import {showAlert} from './util.js';

const getData = (onSuccess) => {fetch('https://23.javascript.pages.academy/keksobooking/dat')
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      showAlert('Не удалось загрузить список похожих объявлений. Попробуйте перезагрузить страницу');
    }
  })
  .then((announcements) => {
    onSuccess(announcements);
  });
};

export {getData};
