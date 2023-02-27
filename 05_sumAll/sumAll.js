const sumAll = function(a, b) {
  if (typeof a != 'number' || typeof b != 'number' || a < 0 || b < 0) {
  /* if (((typeof a || typeof b) != 'number') || ((a || b) < 0) { */
    return 'ERROR'
  }
  result = 0;
  high = Math.max(a, b)
  low = Math.min(a, b)

  while (low <= high) {
    result += low;
    low++;
  } return result
};

// Do not edit below this line
module.exports = sumAll;
