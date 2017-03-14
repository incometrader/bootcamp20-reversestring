function reverseString(str) {
  const strReverse = str.split('').reverse().join('');
  if (str.length < 1) return null;
  if (strReverse === str) return true;
  return strReverse;
}

module.exports = reverseString;
