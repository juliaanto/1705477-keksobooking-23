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

const addressDigits = 5;

const initialAddress = {
  lat: 35.681700,
  lng: 139.753891,
};

export {offerType, linkRoomNumberToCapacity, linkTypeToPrice, addressDigits, initialAddress};
