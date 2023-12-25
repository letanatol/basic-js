const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 * В популярной игре Minesweeper у вас есть доска с некоторыми минами и этими клетками
 * которые не содержат мины, имеют в ней число, указывающее общее число мин
 * в соседних ячейках. Начало с некоторого расположения шахт
 * мы хотим создать настройки игры Minesweeper.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const arraysMines = [];

  for (let row = 0; row < matrix.length; row++) {
    let arrayMines = [];
    let rowDown = row - 1;
    let rowUp = row + 1;

    for (let col = 0; col < matrix[row].length; col++) {
      let mines = 0;
      let colLeft = col - 1;
      let colRight = col + 1;

      if (matrix.at(row)?.at(colLeft)) {
        mines++;
      }
      if (matrix.at(row)?.at(colRight)) {
        mines++;
      }
      if (matrix.at(rowDown)?.at(col)) {
        mines++;
      }
      if (matrix.at(rowDown)?.at(colLeft)) {
        mines++;
      }
      if (matrix.at(rowDown)?.at(colRight)) {
        mines++;
      }
      if (matrix.at(rowUp)?.at(col)) {
        mines++;
      }
      if (matrix.at(rowUp)?.at(colLeft)) {
        mines++;
      }
      if (matrix.at(rowUp)?.at(colRight)) {
        mines++;
      }
      arrayMines.push(mines);
    }
    arraysMines.push(arrayMines);
  }
  
  return arraysMines;
}

module.exports = {
  minesweeper
};
