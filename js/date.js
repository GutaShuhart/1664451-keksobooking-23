import {getRandomInt, getRandomFractional, getRandomArrayElement, shuffleArray} from './util.js';

const TITLE = [
  'Успейте арендовать',
  'ЖК бизнес-класса',
  'Отличное расположение',
  'Просторная квартира',
  'Удобная планировка',
  'Замечательный вид',
  'Кирпичный коттедж',
  'Экологичный район',
  'Современный ремонт',
  'Расположение в центре города',
  'Развитая инфраструктура',
];

const price = {
  min: 5000,
  max: 40000,
};

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const rooms = {
  min: 0,
  max: 5,
};

const guests = {
  min: 0,
  max: 6,
};

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
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

const DESCRIPTION = [
  'Просторное',
  'Удобное',
  'Отличное',
  'Красивое',
  'Замечательное',
  'Доступное',
  'Комфортное',
  'Экологичное',
  'Современное',
  'Необычное',
  'Радующее',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const LOCATION = {
  lat: {
    min: 35.65000,
    max: 35.70000,
  },
  lng: {
    min: 139.70000,
    max: 139.80000,
  },
};

const ADVERTISEMENT_COUNT = 10;

//для случайной длинны массива

function createArrayFeatures() {
  const shuffleFeatures = shuffleArray(FEATURES);
  const numberFeatures = getRandomInt(0, 5);
  const resultFeatures = shuffleFeatures.slice(numberFeatures);
  return resultFeatures;
}

function createArrayPhotos() {
  const shufflePhotos = shuffleArray(PHOTOS);
  const numberPhotos = getRandomInt(0, 2);
  const resultPhotos = shufflePhotos.slice(numberPhotos);
  return resultPhotos;
}

// для генерации случайного номера аватарки

function createNameAvatar() {
  const numberAvatar = getRandomInt(1, 10);
  return `img/avatars/user${numberAvatar < 10 ? '0' : ''}${numberAvatar}.png`;
}


function createAdvert() {
  const randomLocationLat = getRandomFractional(LOCATION.lat.min, LOCATION.lat.max, 5);
  const randomLocationLng = getRandomFractional(LOCATION.lng.min, LOCATION.lng.max, 5);
  return {
    author: {
      avatar: createNameAvatar(),
    },
    offer: {
      title: getRandomArrayElement(TITLE),
      address: `${randomLocationLat}, ${randomLocationLng}`,
      price: getRandomInt(price.min, price.max),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomInt(rooms.min, rooms.max),
      guests: getRandomInt(guests.min, guests.max),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: createArrayFeatures(),
      description: getRandomArrayElement(DESCRIPTION),
      photos: createArrayPhotos(),
    },
    location: {
      lat: randomLocationLat,
      lng: randomLocationLng,

    },
  };
}

const similarAdvertisement = new Array(ADVERTISEMENT_COUNT).fill(null).map(() => createAdvert());

export {similarAdvertisement};

