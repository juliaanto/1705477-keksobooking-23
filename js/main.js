import {createSimilarAnnouncements} from './mock/data.js';
import {renderAnnouncements} from './similar-announcement-list.js';

const SIMILAR_ANNOUNCEMENTS = 1;
renderAnnouncements(createSimilarAnnouncements(SIMILAR_ANNOUNCEMENTS));
