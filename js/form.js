import {sendData} from './api.js';
import {linkRoomNumberToCapacity, linkTypeToPrice} from './const.js';
import {initialAddressString} from './map.js';
import {resetPage, resetPageAndShowMessage} from './util.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
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
const resetButton = adForm.querySelector('.ad-form__reset');
const avatarChooser = adForm.querySelector('#avatar');
const avatarPreview = adForm.querySelector('.ad-form-header__preview img');
const initialAvatarPreview = avatarPreview.src;
const housingChooser = adForm.querySelector('#images');
const housingPreviewArea = adForm.querySelector('.ad-form__photo');
const HOUSING_PREVIEW_SIZE = 40;
const HOUSING_PREVIEW_ALT = 'Фотография жилья';

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

avatarChooser.addEventListener('change', () => {
  const file = avatarChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      avatarPreview.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
});

housingChooser.addEventListener('change', () => {
  const file = housingChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  const housingPreview = document.createElement('img');
  housingPreview.setAttribute('width', HOUSING_PREVIEW_SIZE);
  housingPreview.setAttribute('height', HOUSING_PREVIEW_SIZE);
  housingPreview.setAttribute('alt', HOUSING_PREVIEW_ALT);
  housingPreviewArea.setAttribute('style', 'padding: 15px');

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      housingPreview.src = reader.result;
    });

    reader.readAsDataURL(file);
  }

  housingPreviewArea.appendChild(housingPreview);
});

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
  avatarPreview.src = initialAvatarPreview;

  const housingPreviewElement = housingPreviewArea.querySelector('img');

  if (housingPreviewElement) {
    housingPreviewElement.remove();
  }
};

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  resetPage();
});

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  sendData(resetPageAndShowMessage, formData);
});

export {disableForm, enableForm, checkFormBeforeSubmit, setAvailableCapacity, setAddress, resetForm};
