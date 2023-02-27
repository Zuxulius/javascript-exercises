// const repeatString = function(string, n) {
//   if (n<0) {
//     return 'ERROR'
//   } else return string.repeat(n).trimEnd()
// };

const repeatString = function(string, n) {
  if (n<0) {
    return 'ERROR'
  } else {
    let string_new = "";
    for (i=0;i<n;i++) {
      string_new = string_new + string;  
  } console.log(string,n,string_new);
    return string_new
  }
};

// Do not edit below this line
module.exports = repeatString;
