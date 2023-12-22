const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * Данная матрица, прямоугольная матрица целых чисел,
 * просто сложите все значения, которые не отображаются под "0".
 * 
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // 00 10 20   01 11 21   02 12 22   03 13 23
  let sum = 0;
  for (let i = 0; i < matrix.length - 1; i++) { // 0 1 
    for (let j = 0; j < matrix[0].length; j++) {  // 0 1 2 3 

      if (matrix[i][j] !== 0) {
        sum += matrix[i + 1][j];
      }
    }
  }
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[i] !== 0) {
      sum += matrix[0][i];
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
