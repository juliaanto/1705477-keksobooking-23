import {getRandomDecimal, getRandomNumber, getRandomElementFromArray, getRandomArray} from './util.js';
import {TYPES, TIMES, FEATURES, PHOTOS} from './const.js';

/**
 *  Создает объявление
 *
 * @return {object}
 */
const createAnnouncement = (index) => {
  const locationX = getRandomDecimal(35.65000, 35.70000, 5);
  const locationY = getRandomDecimal(139.70000, 139.80000, 5);
  const announcement = {
    author: {
      avatar: `img/avatars/user0${index}.png`,
    },
    offer: {
      title: 'Отель Duquesne Eiffel',
      address: `${locationX}, ${locationY}`,
      price: getRandomNumber(1000, 100000),
      type: getRandomElementFromArray(TYPES),
      rooms: getRandomNumber(1, 20),
      guests: getRandomNumber(1, 20),
      checkin: getRandomElementFromArray(TIMES),
      checkout: getRandomElementFromArray(TIMES),
      features: getRandomArray(FEATURES),
      description: 'Отель Duquesne Eiffel расположен в Париже, всего в 5 минутах ходьбы от парка Марсово поле. В отеле есть звукоизолированные номера с бесплатным Wi-Fi, а из окон некоторых номеров открывается вид на Эйфелеву башню.',
      photos: getRandomArray(PHOTOS),
    },
    location: {
      lat: locationX,
      lng: locationY,
    },
  };
  return announcement;
};

/**
 * Создает массив объявлений из заданного количества объектов
 *
 * @param {number} count - количество объектов
 * @return {object}
 */
const createSimilarAnnouncements = (count) => {
  const array = [];
  for (let i = 1; i < count + 1; i++) {
    array.push(createAnnouncement(i));
  }
  return array;
};

export {createSimilarAnnouncements};
