
// массивы и объекты

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

//вспомогательные функции

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFractional(min, max, fraction) {
  const result = Math.random() * (max - min) + min;
  return +result.toFixed(fraction);
}

// для генерации случайного индекса элемента массива

function getRandomArrayElement(array) {
  const rand = getRandomInt(0, array.length - 1);
  return array[rand];
}

//для генерации случайного числа с плавающей точки для координат

const getRandomLocationLat = getRandomFractional(LOCATION.lat.min, LOCATION.lat.max, 5);
const getRandomLocationLng = getRandomFractional(LOCATION.lng.min, LOCATION.lng.max, 5);

// для генерации случайного номера аватарки

function createNameAvatar() {
  const numberAvatar = getRandomInt(1, 10);
  if (numberAvatar < 10) {
    return `img/avatars/user${0}${numberAvatar}.png`;
  }
  else {
    return `img/avatars/user${numberAvatar}.png`;
  }
}

//для случайной длинны массива

function createArrayFeatures() {
  const numberFeatures = getRandomInt(0, 5);
  const resultFeatures = FEATURES.slice(numberFeatures);
  return resultFeatures;
}

function createArrayPhotos() {
  const numberPhotos = getRandomInt(0, 2);
  const resultPhotos = PHOTOS.slice(numberPhotos);
  return resultPhotos;
}


function createAdvert() {
  return {
    author: {
      avatar: createNameAvatar(),
    },
    offer: {
      title: getRandomArrayElement(TITLE),
      address: `location.x ${getRandomLocationLat},location.y ${getRandomLocationLng}`,
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
      lat: getRandomLocationLat,
      lng: getRandomLocationLng,

    },
  };
}

const similarAdvertisement = new Array(ADVERTISEMENT_COUNT).fill(null).map(() => createAdvert());
// eslint-disable-next-line no-console
console.log(
  similarAdvertisement);
