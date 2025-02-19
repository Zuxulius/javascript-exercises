// Celsius = F-32 * 5/9
// Fahrenheit = C*1,8 + 32

const convertToCelsius = function(fahrenheit) {
  return +((fahrenheit - 32) * 5/9).toFixed(1)
};

const convertToFahrenheit = function(celsius) {
 return +(celsius * 1.8 + 32).toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
