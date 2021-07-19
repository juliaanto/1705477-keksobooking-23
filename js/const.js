const offerType = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const linkRoomNumberToCapacity = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

const linkTypeToPrice = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const ADDRESS_DIGITS = 5;

const initialAddress = {
  lat: 35.681700,
  lng: 139.753891,
};

const SIMILAR_ANNOUNCEMENTS = 10;

const priceFilter = {
  low: 10000,
  high: 50000,
};

const priceFilterValues = {
  low: 'low',
  middle: 'middle',
  high: 'high',
  any: 'any',
};

const FIRST_VALUE_GUESTS_FILTER = 1;

const SECOND_VALUE_GUESTS_FILTER = 2;

export {offerType, linkRoomNumberToCapacity, linkTypeToPrice, ADDRESS_DIGITS, initialAddress, SIMILAR_ANNOUNCEMENTS, priceFilter, priceFilterValues, FIRST_VALUE_GUESTS_FILTER, SECOND_VALUE_GUESTS_FILTER};
