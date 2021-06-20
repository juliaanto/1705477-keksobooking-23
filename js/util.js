/**
 * Скрывает отсутствующие блоки в карточке
 *
 * @param {object} announcement - элемент массива данных с объявлениями
 * @param {object} element - новое объявление, создаваемое по шаблону
 */
const hideEmptyBlock = (announcement, element) => {
  if (announcement.author.avatar === undefined) {
    element.querySelector('.popup__avatar').classList.add('hidden');
  }

  if (announcement.offer.price === undefined) {
    element.querySelector('.popup__text--price').classList.add('hidden');
  }

  if (announcement.offer.rooms === undefined || announcement.offer.guests === undefined) {
    element.querySelector('.popup__text--capacity').classList.add('hidden');
  }

  if (announcement.offer.checkin === undefined || announcement.offer.checkout === undefined) {
    element.querySelector('.popup__text--time').classList.add('hidden');
  }

  if (announcement.offer.features === undefined) {
    element.querySelector('.popup__feature').classList.add('hidden');
  }

  if (announcement.offer.photos === undefined) {
    element.querySelector('.popup__photos').classList.add('hidden');
  }
};

/**
 * Получает название типа жилья из кодового названия
 *
 * @param {string} offerType - кодовое название типа жилья
 * @return {string} - название типа жилья
 */
const getOfferType = (offerType) => {
  let offerTypeValue = '';
  if (offerType === 'flat') {
    offerTypeValue = 'Квартира';
  } else if (offerType === 'bungalow') {
    offerTypeValue = 'Бунгало';
  } else if (offerType === 'house') {
    offerTypeValue = 'Дом';
  } else if (offerType === 'palace') {
    offerTypeValue = 'Дворец';
  } else if (offerType === 'hotel') {
    offerTypeValue = 'Отель';
  }
  return offerTypeValue;
};

/**
 * Выводит все доступные удобства в объявлении
 *
 * @param {object} announcement - элемент массива данных с объявлениями
 * @param {object} element - новое объявление, создаваемое по шаблону
 */
const getFeatures = (announcement, element) => {
  const featuresList = element.querySelector('.popup__features');
  const announcementFeatures = announcement.offer.features;

  while (featuresList.firstChild) {
    featuresList.removeChild(featuresList.firstChild);
  }

  if (announcementFeatures !== undefined) {
    announcementFeatures.forEach((feature) => {
      const newFeature = document.createElement('li');
      newFeature.classList.add('popup__feature');
      newFeature.classList.add(`popup__feature--${feature}`);
      featuresList.appendChild(newFeature);
    });
  }
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

  if (announcementPhotos !== undefined) {
    announcementPhotos.forEach((photo) => {
      const photoElement = photoTemplate.cloneNode(true);
      photoElement.src = photo;
      photosList.appendChild(photoElement);
    });
  }
};

export {hideEmptyBlock, getOfferType, getFeatures, getPhotos};
