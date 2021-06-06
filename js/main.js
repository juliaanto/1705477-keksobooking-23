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
 * @param {*} min - начало диапазона
 * @param {*} max - конец диапазона
 * @param {*} digits - количество знаков после запятой
 * @return {*}
 */
function getRandomDecimal (min, max, digits) {
  if (min >= max) {
    throw 'Введены некорректные значения. Значение "До" должно быть больше значения "От".';
  }

  return (Math.random() * (max - min) + min).toFixed(digits);
}

/**
 * Возвращает случайное целое число из переданного положительного диапазона
 *
 * @param {*} min - начало диапазона
 * @param {*} max - конец диапазона
 * @return {*}
 */
function getRandomNumber (min, max) {
  return getRandomDecimal(min, max, 0);
}

/**
 * Поиск случайного элемента в переданном массиве
 *
 * @param {*} elements - массив
 */
const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

/**
 * Создает массив случайной длины на основе переданного массива
 *
 * @param {*} array - исходный массив
 * @return {*}
 */
const getRandomArray = (array) => {

  const currentArray = [];
  const elementsCount = getRandomNumber(1,[array.length]);

  for (let currentElement = 0; currentElement < elementsCount - 1; currentElement++) {
    const isActiveNumber = getRandomNumber(0,1);
    let isActive = false;

    if (isActiveNumber === '1') {
      isActive = true;
    }

    if (isActive) {
      currentArray.push(array[currentElement]);
    }
  }
  return currentArray;
};

/**
 * Создает автора
 *
 * @return {*}
 */
const createAutor = () => {
  const author = {
    avatar: `img/avatars/user0${getRandomNumber(1,8)}.png`,
  };
  return author;
};

/**
 * Создает предложение (которое содержит информацию об объявлении)
 *
 * @return {*}
 */
const createOffer = (addressX, addressY) => {
  const offer = {
    title: 'Отель Duquesne Eiffel',
    address: `${addressX}, ${addressY}`,
    price: getRandomNumber(1000, 100000),
    type: getRandomArrayElement(TYPES),
    rooms: getRandomNumber(1, 20),
    guests: getRandomNumber(1, 20),
    checkin: getRandomArrayElement(TIMES),
    checkout: getRandomArrayElement(TIMES),
    features: getRandomArray(FEATURES),
    description: 'Отель Duquesne Eiffel расположен в Париже, всего в 5 минутах ходьбы от парка Марсово поле. В отеле есть звукоизолированные номера с бесплатным Wi-Fi, а из окон некоторых номеров открывается вид на Эйфелеву башню.',
    photos: getRandomArray(PHOTOS),
  };
  return offer;
};

/**
 *  Создает объявление
 *
 * @return {*}
 */
const createAnnouncement = () => {
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
};

const similarAnnouncements = new Array(SIMILAR_ANNOUNCEMENTS).fill(null).map(() => createAnnouncement());
similarAnnouncements();
