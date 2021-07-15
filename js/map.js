import {enableForm, setAddress} from './form.js';
import {ADDRESS_DIGITS, initialAddress} from './const.js';
import {renderCard} from './card.js';

const map = L.map('map-canvas');

const activateMap = () => {
  map
    .on('load', () => {
      enableForm();
    })
    .setView(initialAddress, 12);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
};

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  initialAddress,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

/**
 * Преобразует координаты в строку
 *
 * @param {object} latLng - координаты (объект)
 * @return {string} - координаты (строка)
 */
const getAddress = (latLng) => {
  const lat = latLng.lat.toFixed(ADDRESS_DIGITS);
  const lng = latLng.lng.toFixed(ADDRESS_DIGITS);

  return `${lat}, ${lng}`;
};

const initialAddressString = getAddress(initialAddress);

mainPinMarker.on('move', (evt) => {
  const latLng = evt.target.getLatLng();

  setAddress(getAddress(latLng));
});

/** Возвращает главную метку в исходное состояние */
const resetMainPin = () => {
  mainPinMarker.setLatLng(initialAddress);
};

const markerGroup = L.layerGroup().addTo(map);

const addPinsToMap = (announcements) => {
  announcements.forEach((announcement) => {

    const lat = announcement.location.lat;
    const lng = announcement.location.lng;

    const pinIcon = L.icon({
      iconUrl: './img/pin.svg',
      iconSize: [40, 40],
    });

    const pinMarker = L.marker({
      lat,
      lng,
    },
    {
      icon: pinIcon,
    });
    pinMarker
      .addTo(markerGroup)
      .bindPopup(
        renderCard(announcement),
      );
  });
};

const removePins = () => {
  markerGroup.clearLayers();
};

export {activateMap, addPinsToMap, resetMainPin, initialAddressString, removePins};
