import {resetFilters} from './filters.js';
import {resetForm} from './form.js';
import {resetMainPin} from './map.js';


const ALERT_SHOW_TIME = 5000;
const escapeButton = 'Escape';
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

/** Скрывает сообщение об успешной отправке формы */
const successMessageAnywhereClickHandler = () => {
  document.querySelector('.success').remove();
  document.removeEventListener('click', successMessageAnywhereClickHandler);
};

/** Скрывает сообщение об успешной отправке формы при нажатии на клавишу Esc*/
const successMessageEscapeKeydownHandler = (e) => {
  if (e.code === escapeButton) {
    successMessageAnywhereClickHandler();
    document.removeEventListener('keydown', successMessageEscapeKeydownHandler);
  }
};

/** Показывает сообщение об успешной отправке формы */
const showSuccessMessage = () => {
  const successMessage = successMessageTemplate.cloneNode(true);
  document.body.appendChild(successMessage);
  document.addEventListener('keydown', successMessageEscapeKeydownHandler);
  document.addEventListener('click', successMessageAnywhereClickHandler);
};

/** Скрывает сообщение о неуспешной отправке формы */
const errorMessageAnywhereClickHandler = () => {
  document.querySelector('.error').remove();
  document.removeEventListener('click', errorMessageAnywhereClickHandler);
};

//anywhereClickHandler

/** Скрывает сообщение о неуспешной отправке формы при нажатии на клавишу Esc*/
const errorMessageEscapeKeydownHandler = (e) => {
  if (e.code === escapeButton) {
    errorMessageAnywhereClickHandler();
    document.removeEventListener('keydown', errorMessageEscapeKeydownHandler);
  }
};

/** Показывает сообщение о неуспешной отправке формы */
const showErrorMessage = () => {
  const errorMessage = errorMessageTemplate.cloneNode(true);
  document.body.appendChild(errorMessage);
  document.addEventListener('keydown', errorMessageEscapeKeydownHandler);
  document.addEventListener('click', errorMessageAnywhereClickHandler);
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
};

export {showAlert, resetPage, resetPageAndShowMessage, showErrorMessage};
