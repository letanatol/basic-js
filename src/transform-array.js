const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * Создание преобразованного массива на основе управляющих последовательностей
 * массив содержит
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const transformArray = [];

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === '--double-next') {
      if (arr.length > i + 1) {
        transformArray.push(arr[i + 1]);
      }
    } else if (arr[i] === '--discard-next') {
      if (arr.length > i + 1) {
        i++;
      }
    } else if (arr[i] === '--double-prev') {
      if (arr[i - 1] && arr[i - 2] != '--discard-next') {
        transformArray.push(arr[i - 1]);
      }
    } else if (arr[i] === '--discard-prev') {
      if (transformArray[transformArray.length - 1] === arr[i - 1]) {
        transformArray.pop();
      }
    } else {
      transformArray.push(arr[i]);
    }
  }

  return transformArray;
}

module.exports = {
  transform
};
