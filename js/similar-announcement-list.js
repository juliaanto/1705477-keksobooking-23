import {renderCardBlocks, getOfferType, getFeatures, getPhotos} from './util.js';

const map = document.querySelector('#map-canvas');
const similarAnnouncementTemplate = document.querySelector('#card').content;

/**
 * Генерирует разметку похожих объявлений на основе данных
 *
 * @param {object} announcements - массив объявлений
 */
const renderAnnouncements = (announcements) => {
  announcements.forEach((announcement) => {
    const announcementElement = similarAnnouncementTemplate.cloneNode(true);
    announcementElement.querySelector('.popup__title').textContent = announcement.offer.title;
    announcementElement.querySelector('.popup__text--address').textContent = announcement.offer.address;
    announcementElement.querySelector('.popup__type').textContent = getOfferType(announcement.offer.type);
    getFeatures(announcement, announcementElement);
    announcementElement.querySelector('.popup__description').textContent = announcement.offer.description;
    getPhotos(announcement, announcementElement);
    renderCardBlocks(announcement, announcementElement);
    map.appendChild(announcementElement);
  });
};

export {renderAnnouncements};
