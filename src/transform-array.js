const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
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
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  let newArr = [...arr];
let transform = []
  for (i = 0; i < arr.length; i++) {
    if (newArr[i] === '--double-prev') {
      if (i > 0) transform.push(arr[i - 1]);
    }
    else if
    (newArr[i] === '--discard-prev') {
      if (i > 0) transform = transform.slice(0, -1);
    }
    else if
    (newArr[i] === '--double-next') {
      if (i < newArr.length - 1) transform.push(arr[i + 1]);
    }
    else if
    (newArr[i] === '--discard-next') {
      if (i < newArr.length - 1) i += 2;
    } else {
      transform.push(arr[i]);
    }
  }
  return transform;
}

module.exports = {
  transform
};
