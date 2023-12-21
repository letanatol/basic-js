const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * МАС-48 - это шесть групп из двух шестнадцатеричных цифр (от 0 до 9 или от A до F),
 * разделенные переносами.
 *
 * Ваша задача проверить по заданной строке inputString
 * является ли это МАС-48 адресом или нет.
 * 
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const regex = /^([0-9A-Fa-f]{2}-){5}[0-9A-Fa-f]{2}$/;

  return regex.test(n);
}
module.exports = {
  isMAC48Address
};
