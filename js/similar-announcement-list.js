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
  announcementElement.querySelector('.popup__title').textContent = announcement.offer.title;
  announcementElement.querySelector('.popup__text--address').textContent = announcement.offer.address;
  getFeatures(announcement, announcementElement);
  announcementElement.querySelector('.popup__description').textContent = announcement.offer.description;
  getPhotos(announcement, announcementElement);
  renderCardBlocks(announcement, announcementElement);
  map.appendChild(announcementElement);
};

export {renderCard};
