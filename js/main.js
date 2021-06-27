import {createSimilarAnnouncements} from './mock/data.js';
import {renderCard} from './similar-announcement-list.js';
import {disablePage, activatePage, checkFormBeforeSubmit, setAvailableСapacity} from './ad-form.js';

const SIMILAR_ANNOUNCEMENTS = 10;
const similarAnnouncements = createSimilarAnnouncements(SIMILAR_ANNOUNCEMENTS);
renderCard(similarAnnouncements[0]);

disablePage();
activatePage();
checkFormBeforeSubmit();
setAvailableСapacity();
