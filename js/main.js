import {disableForm, checkFormBeforeSubmit, setAvailableCapacity} from './form.js';
import {activateMap} from './map.js';
import {getData} from './api.js';
import {disableFilters, filterAndAddPinsToMap, initHousingTypeChange} from './filters.js';

disableFilters();
disableForm();
activateMap();
getData((announcements) => {
  filterAndAddPinsToMap(announcements);
  initHousingTypeChange(announcements);
});
checkFormBeforeSubmit();
setAvailableCapacity();
