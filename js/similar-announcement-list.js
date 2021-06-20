import {hideEmptyBlock, getOfferType, getFeatures, getPhotos} from './util.js';

const map = document.querySelector('#map-canvas');
const similarAnnouncementTemplate = document.querySelector('#card').content;

const renderAnnouncements = (announcements) => {
  announcements.forEach((announcement) => {
    const announcementElement = similarAnnouncementTemplate.cloneNode(true);
    hideEmptyBlock(announcement, announcementElement);
    announcementElement.querySelector('.popup__title').textContent = announcement.offer.title;
    announcementElement.querySelector('.popup__text--address').textContent = announcement.offer.address;
    announcementElement.querySelector('.popup__text--price').textContent = announcement.offer.price += ' ₽/ночь';
    announcementElement.querySelector('.popup__type').textContent = getOfferType(announcement.offer.type);
    announcementElement.querySelector('.popup__text--capacity').textContent = `${announcement.offer.rooms} комнаты для ${announcement.offer.guests} гостей`;
    announcementElement.querySelector('.popup__text--time').textContent = `Заезд после ${announcement.offer.checkin}, выезд до ${announcement.offer.checkout}`;
    getFeatures(announcement, announcementElement);
    announcementElement.querySelector('.popup__description').textContent = announcement.offer.description;
    getPhotos(announcement, announcementElement);
    announcementElement.querySelector('.popup__avatar').src = announcement.author.avatar;
    map.appendChild(announcementElement);
  });
};

export {renderAnnouncements};
