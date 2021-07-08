import {addPinsToMap} from './map.js';

const showSimilarAnnouncements = (count) => {fetch('https://23.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((announcements) => {
    addPinsToMap(announcements.slice(0, count));
  });
};

export {showSimilarAnnouncements};
