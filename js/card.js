import {offerType} from './const.js';

const similarAnnouncementTemplate = document.querySelector('#card').content;

/**
 * Отображает в карточке блоки: заголовок, адрес, описание, аватарка пользователя, цена, количество гостей и комнат, время заезда и выезда
 *
 * @param {object} announcement - элемент массива данных с объявлениями
 * @param {object} element - новое объявление, создаваемое по шаблону
 */
const renderCardBlocks = (announcement, element) => {
  if (announcement.offer.title === undefined) {
    element.querySelector('.popup__title').remove();
  } else {
    element.querySelector('.popup__title').textContent = announcement.offer.title;
  }

  if (announcement.offer.address === undefined) {
    element.querySelector('.popup__text--address').remove();
  } else {
    element.querySelector('.popup__text--address').textContent = announcement.offer.address;
  }

  if (announcement.offer.description === undefined) {
    element.querySelector('.popup__description').remove();
  } else {
    element.querySelector('.popup__description').textContent = announcement.offer.description;
  }

  if (announcement.author.avatar === undefined) {
    element.querySelector('.popup__avatar').remove();
  } else {
    element.querySelector('.popup__avatar').src = announcement.author.avatar;
  }

  if (announcement.offer.price === undefined) {
    element.querySelector('.popup__text--price').remove();
  } else {
    element.querySelector('.popup__text--price').textContent = announcement.offer.price += ' ₽/ночь';
  }

  if (announcement.offer.rooms === undefined || announcement.offer.guests === undefined) {
    element.querySelector('.popup__text--capacity').remove();
  } else {
    element.querySelector('.popup__text--capacity').textContent = `${announcement.offer.rooms} комнаты для ${announcement.offer.guests} гостей`;
  }

  if (announcement.offer.checkin === undefined || announcement.offer.checkout === undefined) {
    element.querySelector('.popup__text--time').remove();
  } else {
    element.querySelector('.popup__text--time').textContent = `Заезд после ${announcement.offer.checkin}, выезд до ${announcement.offer.checkout}`;
  }

  if (announcement.offer.type === undefined) {
    element.querySelector('.popup__type').remove();
  } else {
    element.querySelector('.popup__type').textContent = offerType[announcement.offer.type];
  }
};

/**
 * Выводит все доступные удобства в объявлении
 *
 * @param {object} announcement - элемент массива данных с объявлениями
 * @param {object} element - новое объявление, создаваемое по шаблону
 */
const getFeatures = (announcement, element) => {
  const announcementFeatures = announcement.offer.features;
  const featureList = element.querySelector('.popup__features');
  const modifiers = announcementFeatures.map((feature) => `popup__feature--${feature}`);

  featureList.querySelectorAll('.popup__feature')
    .forEach((item) => {
      const modifier = item.classList[1];
      if (!modifiers.includes(modifier)) {
        item.remove();
      }
    });
};

/**
 * Выводит все фотографии объявления
 *
 * @param {object} announcement - элемент массива данных с объявлениями
 * @param {object} element - новое объявление, создаваемое по шаблону
 */
const getPhotos = (announcement, element) => {
  const photosList = element.querySelector('.popup__photos');
  const photoTemplate = element.querySelector('.popup__photo');
  const announcementPhotos = announcement.offer.photos;
  photosList.removeChild(photoTemplate);


  if (announcementPhotos === undefined) {
    element.querySelector('.popup__photos').remove();
  } else {
    announcementPhotos.forEach((photo) => {
      const photoElement = photoTemplate.cloneNode(true);
      photoElement.src = photo;
      photosList.appendChild(photoElement);
    });
  }
};

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

  return announcementElement;
};

export {renderCard};
