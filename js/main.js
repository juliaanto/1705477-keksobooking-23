function getRandomDecimal (min, max, digits) {
  if (min >= max) {
    throw 'Введены некорректные значения. Значение "До" должно быть больше значения "От".';
  }

  return (Math.random() * (max - min) + min).toFixed(digits);
}

function getRandomNumber (min, max) {
  return getRandomDecimal(min, max, 0);
}

getRandomNumber(2,8);
