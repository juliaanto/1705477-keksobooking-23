import {addPinsToMap} from './map.js';
import {checkFormBeforeSubmit, setAvailableCapacity} from './ad-form.js';
import {createSimilarAnnouncements} from './mock/data.js';

const SIMILAR_ANNOUNCEMENTS = 10;
const similarAnnouncements = createSimilarAnnouncements(SIMILAR_ANNOUNCEMENTS);
addPinsToMap(similarAnnouncements);
checkFormBeforeSubmit();
setAvailableCapacity();
