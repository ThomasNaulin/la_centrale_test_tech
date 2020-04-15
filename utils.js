const isAlphaNumeric = (ch) => {
  return ch.match(/^[a-z0-9]+$/i) !== null;
};

const isNumeric = (ch) => {
  return ch.match(/^[0-9]+$/i) !== null;
};

const testLength = (text, maxSize) => {
  return text.length > maxSize;
};

module.exports = {
  isAlphaNumeric,
  isNumeric,
  testLength,
};
