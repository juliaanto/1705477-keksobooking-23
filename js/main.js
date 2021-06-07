const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const SIMILAR_ANNOUNCEMENTS = 10;

/**
 * Возвращает случайное число с плавающей точкой из переданного положительного диапазона
 *
 * @param {number} min - начало диапазона
 * @param {number} max - конец диапазона
 * @param {number} digits - количество знаков после запятой
 * @return {number}
 */
function getRandomDecimal (min, max, digits) {
  if (min >= max) {
    throw 'Введены некорректные значения. Значение "До" должно быть больше значения "От".';
  }

  return Number((Math.random() * (max - min) + min).toFixed(digits));
}

/**
 * Возвращает случайное целое число из переданного положительного диапазона
 *
 * @param {number} min - начало диапазона
 * @param {number} max - конец диапазона
 * @return {number}
 */
function getRandomNumber(min, max) {
  return getRandomDecimal(min, max, 0);
}

/**
 * Поиск случайного элемента в переданном массиве
 *
 * @param {object} elements - массив
 * @return {string}
 */
function getRandomElementFromArray(elements) {
  return elements[getRandomNumber(0, elements.length - 1)];
}

/**
 * Создает массив случайной длины на основе переданного массива
 *
 * @param {object} array - исходный массив
 * @return {object}
 */
function getRandomArray(array) {
  const currentArray = [];
  const elementsCount = getRandomNumber(1, array.length);

  for (let currentElement = 0; currentElement < elementsCount - 1; currentElement++) {
    if (getRandomNumber(0,1)) {
      currentArray.push(array[currentElement]);
    }
  }
  return currentArray;
}

/**
 * Создает автора
 *
 * @return {object}
 */
function createAutor() {
  const author = {
    avatar: `img/avatars/user0${getRandomNumber(1,8)}.png`,
  };
  return author;
}

/**
 * Создает предложение (которое содержит информацию об объявлении)
 *
 * @return {object}
 */
function createOffer(addressX, addressY) {
  const offer = {
    title: 'Отель Duquesne Eiffel',
    address: `${addressX}, ${addressY}`,
    price: getRandomNumber(1000, 100000),
    type: getRandomElementFromArray(TYPES),
    rooms: getRandomNumber(1, 20),
    guests: getRandomNumber(1, 20),
    checkin: getRandomElementFromArray(TIMES),
    checkout: getRandomElementFromArray(TIMES),
    features: getRandomArray(FEATURES),
    description: 'Отель Duquesne Eiffel расположен в Париже, всего в 5 минутах ходьбы от парка Марсово поле. В отеле есть звукоизолированные номера с бесплатным Wi-Fi, а из окон некоторых номеров открывается вид на Эйфелеву башню.',
    photos: getRandomArray(PHOTOS),
  };
  return offer;
}

/**
 *  Создает объявление
 *
 * @return {object}
 */
function createAnnouncement() {
  const lat = getRandomDecimal(35.65000, 35.70000, 5);
  const lng = getRandomDecimal(139.70000, 139.80000, 5);
  const announcement = {
    author: createAutor(),
    offer: createOffer(lat, lng),
    location: {
      lat: lat,
      lng: lng,
    },
  };
  return announcement;
}

const similarAnnouncements = new Array(SIMILAR_ANNOUNCEMENTS).fill(null).map(() => createAnnouncement());
similarAnnouncements();
