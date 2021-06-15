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

//для перемешивания массива по алгоритму Фишера-Йетса

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const currentNumber = Math.floor(Math.random() * (i + 1));
    const temp = arr[currentNumber];
    arr[currentNumber] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

// для генерации случайного индекса элемента массива

function getRandomArrayElement(array) {
  const rand = getRandomInt(0, array.length - 1);
  return array[rand];
}

export {getRandomInt, getRandomFractional, getRandomArrayElement, shuffleArray};
