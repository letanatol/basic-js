const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * Реализация класса VigenereCipheringMachine, который позволяет нам создавать
 * машины прямого и обратного шифрования в соответствии с описанием задачи
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 * Например, если открытый текст attacking tonightи ключ OCULORHINOLARINGOLOGY, то
первая буква a открытого текста сдвигается на 14 позиций в алфавите (поскольку первая буква O ключа — это 14-я буква алфавита, считая с 0), что дает o;
вторая буква t сдвигается на 2 (поскольку вторая буква C ключа означает 2), что дает v;
третья буква t сдвигается на 20 ( U), что дает n, с переносом;
и так далее; выдавая сообщение ovnlqbpvt hznzouz. Если получатель сообщения знает ключ, он может восстановить открытый текст, обратив этот процесс.
 */
class VigenereCipheringMachine {

  constructor(condition = true) {
    this.condition = condition;
  }

  encrypt(str, cipher) {
    if (!str || !cipher) throw new Error("Incorrect arguments!");

    let cipherUpper = cipher.toUpperCase();
    while (str.length > cipherUpper.length) {
      cipherUpper += cipherUpper;
    }

    let arrayCipher = [];
    for (let i = 0; i < cipherUpper.length; i++) {
      arrayCipher.push(cipherUpper[i]);
    }

    let strUpper = str.toUpperCase();
    const arrayStr = [];
    for (let i = 0; i < strUpper.length; i++) {
      arrayStr.push(strUpper[i]);
    }

    const arrayResult = [];

    for (let i = 0; i < arrayStr.length; i++) {
      if (arrayStr[i].charCodeAt() >= 65 && arrayStr[i].charCodeAt() <= 90) {
        let foo = ((arrayCipher[0].charCodeAt()) - 65) + arrayStr[i].charCodeAt();
        if (foo > 90) {
          foo = foo - 90 + 64;
        }
        arrayResult.push(String.fromCharCode(foo));
        arrayCipher.shift();
      } else {
        arrayResult.push(strUpper[i]);
      }
    }

    if (this.condition) {
      return arrayResult.join('');
    } else {
      return arrayResult.reverse().join('');
    }
  }


  decrypt(str, cipher) {
    if (!str || !cipher) throw new Error("Incorrect arguments!");

    let cipherUpper = cipher.toUpperCase();
    while (str.length > cipherUpper.length) {
      cipherUpper += cipherUpper;
    }

    let arrayCipher = [];
    for (let i = 0; i < cipherUpper.length; i++) {
      arrayCipher.push(cipherUpper[i]);
    }

    let strUpper = str.toUpperCase();
    
    const arrayStr = [];

    for (let i = 0; i < strUpper.length; i++) {
      arrayStr.push(strUpper[i]);
    }

    const arrayResult = [];

    for (let i = 0; i < arrayStr.length; i++) {
      if (arrayStr[i].charCodeAt() >= 65 && arrayStr[i].charCodeAt() <= 90) {
        let foo = (arrayStr[i].charCodeAt() - ((arrayCipher[0].charCodeAt()) - 65));
        if (foo < 65) {
          foo = foo + 26;
        }
        arrayResult.push(String.fromCharCode(foo));
        arrayCipher.shift();
      } else {
        arrayResult.push(strUpper[i]);
      }
    }

    if (this.condition) {
      return arrayResult.join('');
    } else {
      return arrayResult.reverse().join('');
    }
  }

}

module.exports = {
  VigenereCipheringMachine
};
