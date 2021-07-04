import {disableForm} from './ad-form.js';
import {activateMap, addPinsToMap} from './map.js';
import {checkFormBeforeSubmit, setAvailableCapacity} from './ad-form.js';
import {createSimilarAnnouncements} from './mock/data.js';

const SIMILAR_ANNOUNCEMENTS = 10;

disableForm();
activateMap();
const similarAnnouncements = createSimilarAnnouncements(SIMILAR_ANNOUNCEMENTS);
addPinsToMap(similarAnnouncements);
checkFormBeforeSubmit();
setAvailableCapacity();
