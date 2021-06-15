/**
 * Возвращает случайное число с плавающей точкой из переданного положительного диапазона
 *
 * @param {number} min - начало диапазона
 * @param {number} max - конец диапазона
 * @param {number} digits - количество знаков после запятой
 * @return {number}
 */
const getRandomDecimal = (min, max, digits) => {
  if (min >= max) {
    throw 'Введены некорректные значения. Значение "До" должно быть больше значения "От".';
  }

  return Number((Math.random() * (max - min) + min).toFixed(digits));
};

/**
 * Возвращает случайное целое число из переданного положительного диапазона
 *
 * @param {number} min - начало диапазона
 * @param {number} max - конец диапазона
 * @return {number}
 */
const getRandomNumber = (min, max) => getRandomDecimal(min, max, 0);

/**
 * Поиск случайного элемента в переданном массиве
 *
 * @param {object} elements - массив
 * @return {string}
 */
const getRandomElementFromArray = (elements) => elements[getRandomNumber(0, elements.length - 1)];

/**
 * Создает массив случайной длины на основе переданного массива
 *
 * @param {object} array - исходный массив
 * @return {object}
 */
const getRandomArray = (array) => {
  const currentArray = [];
  const elementsCount = getRandomNumber(1, array.length);

  for (let currentElement = 0; currentElement < elementsCount - 1; currentElement++) {
    if (getRandomNumber(0,1)) {
      currentArray.push(array[currentElement]);
    }
  }
  return currentArray;
};

export {getRandomDecimal, getRandomNumber, getRandomElementFromArray, getRandomArray};
