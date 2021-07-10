import {disableForm} from './form.js';
import {activateMap} from './map.js';
import {checkFormBeforeSubmit, setAvailableCapacity} from './form.js';
import {getData} from './api.js';
import {addPinsToMap} from './map.js';

const SIMILAR_ANNOUNCEMENTS = 10;

disableForm();
activateMap();
getData((announcements) => {
  addPinsToMap(announcements.slice(0, SIMILAR_ANNOUNCEMENTS));
});
checkFormBeforeSubmit();
setAvailableCapacity();
