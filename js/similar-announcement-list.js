import {renderCardBlocks, getFeatures, getPhotos} from './util.js';

const map = document.querySelector('#map-canvas');
const similarAnnouncementTemplate = document.querySelector('#card').content;

/**
 * Генерирует разметку карточки объявления на основе данных
 *
 * @param {object} announcement - объявление
 */
const renderCard = (announcement) => {
  const announcementElement = similarAnnouncementTemplate.cloneNode(true);
  getFeatures(announcement, announcementElement);
  getPhotos(announcement, announcementElement);
  renderCardBlocks(announcement, announcementElement);
  map.appendChild(announcementElement);
};

export {renderCard};
