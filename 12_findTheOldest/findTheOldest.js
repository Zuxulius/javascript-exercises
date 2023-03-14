const findTheOldest = function(array) {
  currentYear = new Date().getFullYear();
  ages = array.sort(function(a, b) {
    a.yearOfDeath ? ageA = a.yearOfDeath - a.yearOfBirth : ageA = currentYear - a.yearOfBirth;
    b.yearOfDeath ? ageB = b.yearOfDeath - b.yearOfBirth : ageB = currentYear - b.yearOfBirth;
    return ageB - ageA
  })
  return ages[0]
};

// Do not edit below this line
module.exports = findTheOldest;
