const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 * Реализация объекта chainMaker в соответствии с описанием задачи
 * 
 */
const chainMaker = {
  array: [],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    this.array.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!this.array[position - 1]) {
      // (position < 1 || position > this.array.length || isNaN(position) || !Number.isInteger(position)
      this.array = [];
      throw new Error("You can\'t remove incorrect link!");
    } else {
      this.array.splice(position - 1, 1)
      return this;
    }
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let chain = this.array.join('~~');
    this.array = [];
    return chain;
  }
};

module.exports = {
  chainMaker
};
