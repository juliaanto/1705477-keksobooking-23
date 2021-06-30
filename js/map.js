import {disablePage, activatePage, setAddress} from './ad-form.js';
import {addressDigits, initialAddress} from './const.js';

disablePage();

const map = L.map('map-canvas')
  .on('load', () => {
    activatePage();
  })
  .setView(initialAddress, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './leaflet/images/marker-icon-2x.png',
  iconSize: [50, 82],
  iconAnchor: [25, 82],
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
 * @return {string} - коррдинаты (строка)
 */
const getAddress = (latLng) => {
  const lat = latLng.lat.toFixed(addressDigits);
  const lng = latLng.lng.toFixed(addressDigits);

  return `${lat}, ${lng}`;
};

setAddress(getAddress(initialAddress));

mainPinMarker.on('moveend', (evt) => {
  const latLng = evt.target.getLatLng();

  setAddress(getAddress(latLng));
});

export {mainPinMarker};
