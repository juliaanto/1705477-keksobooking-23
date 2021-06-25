/**
 * Отображает в карточке блоки: аватарка пользователя, цена, количество гостей и комнат, время заезда и выезда
 *
 * @param {object} announcement - элемент массива данных с объявлениями
 * @param {object} element - новое объявление, создаваемое по шаблону
 */
const renderCardBlocks = (announcement, element) => {
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


  if (announcementFeatures === undefined) {
    element.querySelector('.popup__features').remove();
  } else {
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

export {renderCardBlocks, getOfferType, getFeatures, getPhotos};
