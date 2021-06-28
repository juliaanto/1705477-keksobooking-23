import {linkRoomNumberToCapacity} from './const.js';

const adForm = document.querySelector('.ad-form');
const formFieldset = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelect = mapFilters.querySelectorAll('select');
const mapFiltersFieldset = mapFilters.querySelectorAll('fieldset');
const capacityInput = adForm.querySelector('#capacity');
const capacityOptions = capacityInput.querySelectorAll('option');
const roomNumberInput = adForm.querySelector('#room_number');
const submitButton = adForm.querySelector('.ad-form__submit');

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

const setAvailableСapacity = () => {
  const roomNumber = Number(roomNumberInput.value);
  const availableСapacity = Array.from(linkRoomNumberToCapacity[roomNumber]);

  capacityOptions.forEach((element) => {
    element.removeAttribute('disabled', 'disabled');
    if (!availableСapacity.includes(Number(element.value))) {
      element.setAttribute('disabled', 'disabled');
    }
  });
};

const checkCapacityInput = () => {
  const roomNumber = Number(roomNumberInput.value);
  const capacity = Number(capacityInput.value);
  const availableСapacity = Array.from(linkRoomNumberToCapacity[roomNumber]);

  if (availableСapacity.includes(capacity)) {
    capacityInput.setCustomValidity('');
  } else {
    capacityInput.setCustomValidity('Выбранное количество гостей не подходит под количество комнат. Пожалуйста, выберите подходящее количество гостей, либо выберите другое количество комнат.');
  }
};

roomNumberInput.addEventListener('input', () => {
  setAvailableСapacity();
});

const checkFormBeforeSubmit = () => {
  submitButton.addEventListener('click', () => {
    checkCapacityInput();
  });
};

export {disablePage, activatePage, checkFormBeforeSubmit, setAvailableСapacity};
