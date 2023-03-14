const fibonacci = function(a) {
  if (a < 1) return "OOPS"
  let fib1 = 0;
  let fib2 = 1;
  a = Number(a);
  while (a>1) {
    fib2 += fib1
    if (fib1!==0) {
      fib1 = fib2 - fib1;
    } else fib1 = 1;
    a--;
  } return fib2
};

// Do not edit below this line
module.exports = fibonacci;
