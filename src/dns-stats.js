const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 * Если задан массив доменов, верните объект с появлениями DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  console.log(domains);
  let object = {};

  domains.forEach(item => {
    let itemReverse = item.split('.').reverse();
    let itemResult = '';

    itemReverse.forEach(item => {
      itemResult = itemResult + '.' + item;

      object[itemResult] = (object[itemResult]) ? object[itemResult] + 1 : 1;
    })
  })

  return object;
}

module.exports = {
  getDNSStats
};
