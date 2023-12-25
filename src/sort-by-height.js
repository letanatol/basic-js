const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *Если задан массив с высотой, отсортируйте их, если значение не равно -1.

 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {

  const arrayPositive = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arrayPositive.push(arr[i]);
    }
  }
  const arraySort = arrayPositive.sort((a, b) => a - b);

  const arrayResult = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arrayResult.push(arr[i]);
    } else {
      arrayResult.push(arraySort[0]);
      arraySort.shift();
    }
  }
  return arrayResult;
}

module.exports = {
  sortByHeight
};
