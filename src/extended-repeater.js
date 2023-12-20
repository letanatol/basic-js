const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 * Создать повторяющуюся строку на основе заданных параметров
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', 
 * { repeatTimes: 3, 
 * separator: '**', 
 * addition: 'PLUS', 
 * additionRepeatTimes: 3, 
 * additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const customOptions = {
    repeatTimes: 1,
    separator: '+',
    addition: '',
    additionRepeatTimes: 1,
    additionSeparator: '|'
  }
  
  options = { ...customOptions, ...options };
  options.addition = String(options.addition);

  let smallItem = [];
  let bigItem = [];

  // if (!options.hasOwnProperty('addition') && options.repeatTimes === 1) {
  //   return str;
  // }

  if ((options.addition === '') && options.repeatTimes === 1) {
    return str;
  }

  if ((options.addition === '') && options.repeatTimes > 1) {
    for (let i = 0; i < options.repeatTimes; i++) {
      bigItem.push(str);
      console.log(bigItem);
    }
    return bigItem.join(options.separator);
  }

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    smallItem.push(options.addition);
  }

  let additionItemString = `${str}${smallItem.join(options.additionSeparator)}`;

  for (let i = 0; i < options.repeatTimes; i++) {
    bigItem.push(additionItemString);
  }

  return bigItem.join(options.separator);
}

module.exports = {
  repeater
};
