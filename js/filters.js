import {SIMILAR_ANNOUNCEMENTS} from './const.js';
import {addPinsToMap, removePins} from './map.js';

const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelect = mapFilters.querySelectorAll('select');
const mapFiltersFieldset = mapFilters.querySelectorAll('fieldset');
const housingType = mapFilters.querySelector('#housing-type');

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

/**
 * Фильтрует объявления по типу жилья
 *
 * @param {object} announcement - объявление
 */
const filterByHousingType = (announcement) => housingType.value === 'any' || housingType.value === announcement.offer.type;

/**
 * Добавляет на карту отфильтрованные метки объявлений
 *
 * @param {array} announcements - массив объявлений
 */
const filterAndAddPinsToMap = (announcements) => {
  const originAnnouncements = announcements.slice();
  const filteredPins = originAnnouncements.filter(filterByHousingType);
  addPinsToMap(filteredPins.slice(0, SIMILAR_ANNOUNCEMENTS));
};

/**
 * Фильтрует метки объявлений при изменении значения фильтра
 *
 * @param {array} announcements - массив объявлений
 */
const initHousingTypeChange = (announcements) => {

  housingType.addEventListener('change', () => {
    removePins();
    filterAndAddPinsToMap(announcements);
  });

};


export {disableFilters, enableFilters, resetFilters, filterAndAddPinsToMap, initHousingTypeChange};
