function getRandomDecimal (min, max, digits) {
  return (Math.random() * (max - min) + min).toFixed(digits);
}

function getRandomNumber (min, max) {
  return getRandomDecimal(min, max, 0);
}

getRandomNumber(2,8);
