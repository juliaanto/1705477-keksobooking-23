
import {resetFilters} from './filters.js';
import {resetForm} from './form.js';


const ALERT_SHOW_TIME = 5000;


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

const resetPage = () => {
  resetForm();
  resetFilters();
};

export {showAlert, resetPage};
