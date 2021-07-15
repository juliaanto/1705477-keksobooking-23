import {SIMILAR_ANNOUNCEMENTS} from './const.js';
import {addPinsToMap, removePins} from './map.js';

const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelect = mapFilters.querySelectorAll('select');
const mapFiltersFieldset = mapFilters.querySelectorAll('fieldset');
const housingType = mapFilters.querySelector('#housing-type');
const housingPrice = mapFilters.querySelector('#housing-price');

/** Переводит фильтры в неактивное состояние */
const disableFilters = () => {
  mapFilters.classList.add('map__filters--disabled');
  mapFiltersSelect.forEach((element) => {element.setAttribute('disabled', 'disabled');
  });
  mapFiltersFieldset.forEach((element) => {element.setAttribute('disabled', 'disabled');
  });
};

/** Переводит фильтры в активное состояние */
const enableFilters = () => {
  mapFilters.classList.remove('map__filters--disabled');
  mapFiltersSelect.forEach((element) => {element.removeAttribute('disabled', 'disabled');
  });
  mapFiltersFieldset.forEach((element) => {element.removeAttribute('disabled', 'disabled');
  });
};

/** Сбрасывает значения полей в изначальное состояние */
const resetFilters = () => {
  mapFilters.reset();
};

const getHousingPrice= (price) => {

  const priceInt = parseInt(price, 10);

  if (priceInt < 10000) {
    return 'low';
  } else if (priceInt > 10000 && priceInt < 50000) {
    return 'middle';
  } else if (priceInt > 50000) {
    return 'high';
  } else {
    return 'any';
  }
};

const applyFilters = (announcement) => {

  const isHousingType = housingType.value === 'any' || housingType.value === announcement.offer.type;
  const isHousingPrice = housingPrice.value === 'any' || housingPrice.value === getHousingPrice(announcement.offer.price);

  return isHousingType && isHousingPrice;
};

/**
 * Добавляет на карту отфильтрованные метки объявлений
 *
 * @param {array} announcements - массив объявлений
 */
const filterAndAddPinsToMap = (announcements) => {
  const originAnnouncements = announcements.slice();
  const filteredPins = originAnnouncements.filter(applyFilters);
  addPinsToMap(filteredPins.slice(0, SIMILAR_ANNOUNCEMENTS));
};

/**
 * Фильтрует метки объявлений при изменении значения фильтра
 *
 * @param {array} announcements - массив объявлений
 */
const initHousingTypeChange = (announcements) => {

  mapFilters.addEventListener('change', () => {
    removePins();
    filterAndAddPinsToMap(announcements);
  });

};


export {disableFilters, enableFilters, resetFilters, filterAndAddPinsToMap, initHousingTypeChange};
