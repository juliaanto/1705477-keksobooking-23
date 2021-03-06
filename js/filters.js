import {FIRST_VALUE_GUESTS_FILTER, priceFilter, priceFilterValues, SECOND_VALUE_GUESTS_FILTER, SIMILAR_ANNOUNCEMENTS} from './const.js';
import {addPinsToMap, removePins} from './map.js';
import {debounce} from './utils/debounce.js';

const RERENDER_DELAY = 500;
const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelect = mapFilters.querySelectorAll('select');
const mapFiltersFieldset = mapFilters.querySelectorAll('fieldset');
const housingType = mapFilters.querySelector('#housing-type');
const housingPrice = mapFilters.querySelector('#housing-price');
const housingRooms = mapFilters.querySelector('#housing-rooms');
const housingGuests = mapFilters.querySelector('#housing-guests');
const housingFeatures = mapFilters.querySelector('#housing-features');


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

const getHousingPrice = (price) => {

  const priceInt = parseInt(price, 10);

  if (priceInt < priceFilter.low) {
    return priceFilterValues.low;
  } else if (priceInt > priceFilter.low && priceInt < priceFilter.high) {
    return priceFilterValues.middle;
  } else if (priceInt > priceFilter.high) {
    return priceFilterValues.high;
  } else {
    return priceFilterValues.any;
  }
};

const getHousingGuests = (guests) => {

  if (guests === FIRST_VALUE_GUESTS_FILTER || guests === SECOND_VALUE_GUESTS_FILTER) {
    return String(guests);
  } else {
    return '0';
  }
};

const getFeatures = (announcementFeatures) => {
  const checkedFeatureElements = housingFeatures.querySelectorAll('input[type="checkbox"]:checked');
  let isFeatures = true;

  if (checkedFeatureElements.length === 0) {
    isFeatures = true;
  } else if (announcementFeatures === undefined) {
    isFeatures = false;
  } else {
    checkedFeatureElements.forEach((feature) => {
      if (!announcementFeatures.includes(feature.value)) {
        isFeatures = false;
      }
    });
  }

  return isFeatures;
};

const applyFilters = (announcement) => {

  const isHousingType = housingType.value === 'any' || housingType.value === announcement.offer.type;
  const isHousingPrice = housingPrice.value === 'any' || housingPrice.value === getHousingPrice(announcement.offer.price);
  const isHousingRooms = housingRooms.value === 'any' || housingRooms.value === String(announcement.offer.rooms);
  const isHousingGuests = housingGuests.value === 'any' || housingGuests.value === getHousingGuests(announcement.offer.guests);
  const isHousingFeatures = getFeatures(announcement.offer.features);

  return isHousingType && isHousingPrice && isHousingRooms && isHousingGuests && isHousingFeatures;
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

  mapFilters.addEventListener('change', (debounce(
    () => {
      removePins();
      filterAndAddPinsToMap(announcements);
    },
    RERENDER_DELAY,
  )));
};

export {disableFilters, enableFilters, resetFilters, filterAndAddPinsToMap, initHousingTypeChange};
