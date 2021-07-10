import {sendData} from './api.js';
import {linkRoomNumberToCapacity, linkTypeToPrice} from './const.js';
import { initialAddressString } from './map.js';
import {resetPage} from './util.js';

const adForm = document.querySelector('.ad-form');
const formFieldset = adForm.querySelectorAll('fieldset');
const capacityInput = adForm.querySelector('#capacity');
const capacityOptions = capacityInput.querySelectorAll('option');
const roomNumberInput = adForm.querySelector('#room_number');
const submitButton = adForm.querySelector('.ad-form__submit');
const typeInput = adForm.querySelector('#type');
const priceInput = adForm.querySelector('#price');
const timeInInput = adForm.querySelector('#timein');
const timeOutInput = adForm.querySelector('#timeout');
const addressInput = adForm.querySelector('#address');

/** Переводит форму в неактивное состояние */
const disableForm = () => {
  adForm.classList.add('ad-form--disabled');
  formFieldset.forEach((element) => {element.setAttribute('disabled', 'disabled');
  });
};

/** Переводит форму в активное состояние */
const enableForm = () => {
  adForm.classList.remove('ad-form--disabled');
  formFieldset.forEach((element) => {element.removeAttribute('disabled', 'disabled');
  });
};

/** Ограничивает допустимые варианты выбора количества гостей в зависимости от выбранного количества комнат */
const setAvailableCapacity = () => {
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

/** Проверяет корректность введенного значения количества мест */
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
  setAvailableCapacity();
});

const checkPriceInput = () => {
  const type = typeInput.value;

  priceInput.setAttribute('min', linkTypeToPrice[type]);
  priceInput.setAttribute('placeholder', linkTypeToPrice[type]);
};

checkPriceInput();

typeInput.addEventListener('input', () => {
  checkPriceInput();
});

timeInInput.addEventListener('input', () => {
  const timein = timeInInput.value;

  timeOutInput.value = timein;
});

timeOutInput.addEventListener('input', () => {
  const timeout = timeOutInput.value;

  timeInInput.value = timeout;
});

const setAddress = (addressValue) => {
  addressInput.value = addressValue;
};

setAddress(initialAddressString);

/** Проверяет корректность формы перед отправкой */
const checkFormBeforeSubmit = () => {
  submitButton.addEventListener('click', () => {
    checkCapacityInput();
  });
};

/** Сбрасывает значения полей в изначальное состояние */
const resetForm = () => {
  adForm.reset();
};

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  sendData(resetPage, formData);
});

export {disableForm, enableForm, checkFormBeforeSubmit, setAvailableCapacity, setAddress, resetForm};
