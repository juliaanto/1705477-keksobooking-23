const adForm = document.querySelector('.ad-form');
const formFieldset = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelect = mapFilters.querySelectorAll('select');
const mapFiltersFieldset = mapFilters.querySelectorAll('fieldset');

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

export {disablePage, activatePage};
