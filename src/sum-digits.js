const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 * 
 * 
 * Если задано число, заменить это число на
 * сумма его цифр, пока мы не получим однозначное число.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arrayN = Array.from(String(n), Number);
  let sum = 0;

  for (let i = 0; i < arrayN.length; i++) {
    sum += arrayN[i];
  }
  
  if (sum > 9) {
    return getSumOfDigits(sum);
  } else {
    return sum;
  }
}

module.exports = {
  getSumOfDigits
};
