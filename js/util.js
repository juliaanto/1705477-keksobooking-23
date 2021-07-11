
import {resetFilters} from './filters.js';
import {resetForm} from './form.js';
import { resetMainPin } from './map.js';


const ALERT_SHOW_TIME = 5000;
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');


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

const showSuccessMessage = () => {
  const successMessage = successMessageTemplate.cloneNode(true);
  document.body.appendChild(successMessage);
};

const removeSuccessMessage = () => {
  document.querySelector('.success').remove();
};

const removeSuccessMessageOnEsc = (e) => {
  if (e.code === 'Escape') {
    removeSuccessMessage();
  }
};

const resetPage = () => {
  resetForm();
  resetFilters();
  resetMainPin();
  showSuccessMessage();
  document.addEventListener('keydown', removeSuccessMessageOnEsc);
  document.addEventListener('click', removeSuccessMessage);
};

export {showAlert, resetPage};
