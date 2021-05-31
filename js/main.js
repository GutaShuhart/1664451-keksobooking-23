function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max < min) {
    return false;
  } else if ( min < 0){
    return false;
  } else if ( max < 0){
    return false;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomIntInclusive(1, 10);

function getRandomInt(min, max) {
  if (max < min) {
    return false;
  } else if ( min < 0){
    return false;
  } else if ( max < 0){
    return false;
  }
  const result = Math.random() * (max - min) + min;
  return +result.toFixed(1);
}

getRandomInt(1, 10);

// Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
