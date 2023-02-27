// const reverseString = function(word) {
//   string = ""
//   letters = word.split('');
//   for (const letter of letters.reverse()) {
//     string += letter;
//   } console.log(string);
//   return string
// };

const reverseString = function (string) {
  return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
