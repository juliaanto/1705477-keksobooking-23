/**
 * Возвращает случайное число с плавающей точкой из переданного положительного диапазона
 *
 * @param {*} min - начало диапазона
 * @param {*} max - конец диапазона
 * @param {*} digits - количество знаков после запятой
 * @return {*}
 */
function getRandomDecimal (min, max, digits) {
  if (min >= max) {
    throw 'Введены некорректные значения. Значение "До" должно быть больше значения "От".';
  }

  return (Math.random() * (max - min) + min).toFixed(digits);
}

/**
 * Возвращает случайное целое число из переданного положительного диапазона
 *
 * @param {*} min - начало диапазона
 * @param {*} max - конец диапазона
 * @return {*}
 */
function getRandomNumber (min, max) {
  return getRandomDecimal(min, max, 0);
}

getRandomNumber(2,8);
