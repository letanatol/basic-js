const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * Есть список файлов, так как два файла не могут иметь одинаковые имена,
 * тот, который придет позже, будет иметь суффикс (к),
 * где к - наименьшее целое число, такое, что найденное имя пока не используется.
 *
 * Верните массив имен, которые будут даны файлам.
 * 
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const objNames = {};
  const arrayResult = [];

  for (const elem of names) {

    if (objNames?.[elem]) {
      let count = objNames[elem];
      let newName = `${elem}(${count})`;

      while (objNames?.[newName]) {
        count++;
        newName = `${elem}(${count})`;
      }
      arrayResult.push(newName);
      objNames[newName] = 1;
      console.log(objNames);
    } else {
      objNames[elem] = 1;
      arrayResult.push(elem);
      console.log(objNames);
    }
  }

  return arrayResult;
}

module.exports = {
  renameFiles
};
