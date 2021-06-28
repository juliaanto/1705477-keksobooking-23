import {linkRoomNumberToCapacity, linkTypeToPrice} from './const.js';

const adForm = document.querySelector('.ad-form');
const formFieldset = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelect = mapFilters.querySelectorAll('select');
const mapFiltersFieldset = mapFilters.querySelectorAll('fieldset');
const capacityInput = adForm.querySelector('#capacity');
const capacityOptions = capacityInput.querySelectorAll('option');
const roomNumberInput = adForm.querySelector('#room_number');
const submitButton = adForm.querySelector('.ad-form__submit');
const typeInput = adForm.querySelector('#type');
const priceInput = adForm.querySelector('#price');
const timeinInput = adForm.querySelector('#timein');
const timeoutInput = adForm.querySelector('#timeout');

/**
 * Переводит страницу в неактивное состояние
 *
 */
const disablePage = () => {
  adForm.classList.add('ad-form--disabled');
  formFieldset.forEach((element) => {element.setAttribute('disabled', 'disabled');
  });
  mapFilters.classList.add('map__filters--disabled');
  mapFiltersSelect.forEach((element) => {element.setAttribute('disabled', 'disabled');
  });
  mapFiltersFieldset.forEach((element) => {element.setAttribute('disabled', 'disabled');
  });
};

/**
 * Переводит страницу в активное состояние
 *
 */
const activatePage = () => {
  adForm.classList.remove('ad-form--disabled');
  formFieldset.forEach((element) => {element.removeAttribute('disabled', 'disabled');
  });
  mapFilters.classList.remove('map__filters--disabled');
  mapFiltersSelect.forEach((element) => {element.removeAttribute('disabled', 'disabled');
  });
  mapFiltersFieldset.forEach((element) => {element.removeAttribute('disabled', 'disabled');
  });
};

/**
 * Ограничивает допустимые варианты выбора количества гостей в зависимости от выбранного количества комнат
 *
 */
const setAvailableСapacity = () => {
  const roomNumber = Number(roomNumberInput.value);
  const availableСapacity = linkRoomNumberToCapacity[roomNumber];

  capacityOptions.forEach((element) => {
    if (!availableСapacity.includes(Number(element.value))) {
      element.setAttribute('disabled', 'disabled');
    } else {
      element.removeAttribute('disabled', 'disabled');
    }
  });
};

/**
 * Проверяет корректность введенного значения количества мест
 *
 */
const checkCapacityInput = () => {
  const roomNumber = Number(roomNumberInput.value);
  const capacity = Number(capacityInput.value);
  const availableСapacity = linkRoomNumberToCapacity[roomNumber];

  if (availableСapacity.includes(capacity)) {
    capacityInput.setCustomValidity('');
  } else {
    capacityInput.setCustomValidity('Выбранное количество гостей не подходит под количество комнат. Пожалуйста, выберите подходящее количество гостей, либо выберите другое количество комнат.');
  }
};

roomNumberInput.addEventListener('input', () => {
  setAvailableСapacity();
});

typeInput.addEventListener('input', () => {
  const type = typeInput.value;

  priceInput.setAttribute('min', linkTypeToPrice[type]);
  priceInput.setAttribute('placeholder', linkTypeToPrice[type]);
});

timeinInput.addEventListener('input', () => {
  const timein = timeinInput.value;

  timeoutInput.value = timein;
});

timeoutInput.addEventListener('input', () => {
  const timeout = timeoutInput.value;

  timeinInput.value = timeout;
});

/**
 * Проверяет корректность формы перед отправкой
 *
 */
const checkFormBeforeSubmit = () => {
  submitButton.addEventListener('click', () => {
    checkCapacityInput();
  });
};

export {disablePage, activatePage, checkFormBeforeSubmit, setAvailableСapacity};
