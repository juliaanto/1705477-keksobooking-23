
import {resetFilters} from './filters.js';
import {resetForm} from './form.js';
import {resetMainPin} from './map.js';


const ALERT_SHOW_TIME = 5000;
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');

/**
 * Показывает сообщение об ошибке, отображается поверх фильтров
 *
 * @param {string} message - текст сообщения об ошибке
 */
const showAlert = (message) => {
  const map = document.querySelector('.map');
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 500;
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '13px 10px';
  alertContainer.style.margin = '-50px 0 0 0';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#ff6d51';
  alertContainer.style.width = '100%';

  alertContainer.textContent = message;

  map.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

/** Показывает сообщение об успешной отправке формы */
const showSuccessMessage = () => {
  const successMessage = successMessageTemplate.cloneNode(true);
  document.body.appendChild(successMessage);
};

/** Скрывает сообщение об успешной отправке формы */
const removeSuccessMessage = () => {
  document.querySelector('.success').remove();
};

/** Скрывает сообщение об успешной отправке формы при нажатии на клавишу Esc*/
const removeSuccessMessageOnEsc = (e) => {
  if (e.code === 'Escape') {
    removeSuccessMessage();
  }
};

/** Показывает сообщение о неуспешной отправке формы */
const showErrorMessage = () => {
  const errorMessage = errorMessageTemplate.cloneNode(true);
  document.body.appendChild(errorMessage);
};

/** Скрывает сообщение о неуспешной отправке формы */
const removeErrorMessage = () => {
  document.querySelector('.error').remove();
};

/** Скрывает сообщение о неуспешной отправке формы при нажатии на клавишу Esc*/
const removeErrorMessageOnEsc = (e) => {
  if (e.code === 'Escape') {
    removeErrorMessage();
  }
};

/** Сбрасывает значения полей формы, фильтров, главной метки в изначальное состояние */
const resetPage = () => {
  resetForm();
  resetFilters();
  resetMainPin();
};

/** Сбрасывает значения полей формы, фильтров, главной метки в изначальное состояние и пказывает сообщение об успешной отправке формы */
const resetPageAndShowMessage = () => {
  resetPage();
  showSuccessMessage();
  document.addEventListener('keydown', removeSuccessMessageOnEsc);
  document.addEventListener('click', removeSuccessMessage);
};

export {showAlert, resetPage, resetPageAndShowMessage, showErrorMessage, removeErrorMessage, removeErrorMessageOnEsc};
