exports._check = () => {
  // DRY up the codebase with this function
  // First, move the duplicate error checking code here
  // Then, invoke this function inside each of the others
  // HINT: you can invoke this function with exports._check()
};

function checkNumber(x, y) {
  if (typeof x !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== 'number') {
    throw new TypeError(`${y} is not a number`);
  }
}

exports.add = (x, y) => {
  checkNumber(x, y);
  return x + y;
};

exports.subtract = (x, y) => {
  checkNumber(x, y);
  return x - y;
};

exports.multiply = (x, y) => {
  checkNumber(x, y);
  return x * y;
};

exports.divide = (x, y) => {
  checkNumber(x, y);
  return x / y;
};

module.exports = exports;
