function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt(1, 10);

function getRandomFractional(min, max, fraction) {
  const result = Math.random() * (max - min) + min;
  return +result.toFixed(fraction);
}

getRandomFractional(1, 10, 2);

// Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
