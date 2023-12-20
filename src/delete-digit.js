const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 * 
 * дано некоторое целое число, найдите максимальное число, которое вы можете получить
 * путем удаления ровно одной цифры данного числа.(удаляет одну самую маленькую цифру)
 * 
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let string = String(n);
  let result = 0;

  console.log(string);
  for (let i = 0; i < string.length; i++) {
    result = Math.max(string.slice(0, i) + string.slice(i + 1), result);
  }
  return result;
}

module.exports = {
  deleteDigit
};
