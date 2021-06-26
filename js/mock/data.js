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
      title: 'The Prince Park Tower Tokyo',
      address: `${locationX}, ${locationY}`,
      price: getRandomNumber(1000, 100000),
      type: getRandomElementFromArray(TYPES),
      rooms: getRandomNumber(1, 20),
      guests: getRandomNumber(1, 20),
      checkin: getRandomElementFromArray(TIMES),
      checkout: getRandomElementFromArray(TIMES),
      features: getRandomArray(FEATURES),
      description: 'Отель Prince Park Tower Tokyo расположен над парком Сиба, рядом с телевизионной башней Токио. К услугам гостей просторные номера с видом на городской пейзаж и бесплатный Wi-Fi. Отель находится в нескольких минутах ходьбы от различных железнодорожных станций, в том числе станции метро Акабанэбаси (2 минуты) и железнодорожной станции Хамамацутё (12 минут).',
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
