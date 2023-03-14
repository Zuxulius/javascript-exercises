const palindromes = function (string) {
  string = string.toLowerCase().replaceAll(/[!.,\s/]/g, '');
  return string === string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
