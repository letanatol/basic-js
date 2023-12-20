const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 * Если дана строка, верните ее кодировку.
 * 
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let array = [];

  for (let i = 0, count = 1; i < str.length; i++) {

    while (str[i] === str[i + 1]) {
      count++;
      i++;
    }

    if (count === 1) {
      array.push('', str[i])
    } else {
      array.push(count, str[i]);
      count = 1;
    }
  }
  
  return array.join('');
}

module.exports = {
  encodeLine
};
