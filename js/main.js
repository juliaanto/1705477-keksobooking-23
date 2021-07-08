import {disableForm} from './ad-form.js';
import {activateMap} from './map.js';
import {checkFormBeforeSubmit, setAvailableCapacity} from './ad-form.js';
import {showSimilarAnnouncements} from './server.js';

const SIMILAR_ANNOUNCEMENTS = 10;

disableForm();
activateMap();
showSimilarAnnouncements(SIMILAR_ANNOUNCEMENTS);
checkFormBeforeSubmit();
setAvailableCapacity();
