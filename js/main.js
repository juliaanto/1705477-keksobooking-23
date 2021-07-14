import {disableForm, checkFormBeforeSubmit, setAvailableCapacity} from './form.js';
import {activateMap, addPinsToMap} from './map.js';
import {getData} from './api.js';
import {disableFilters} from './filters.js';

const SIMILAR_ANNOUNCEMENTS = 10;

disableFilters();
disableForm();
activateMap();
getData((announcements) => {
  addPinsToMap(announcements.slice(0, SIMILAR_ANNOUNCEMENTS));
});
checkFormBeforeSubmit();
setAvailableCapacity();
