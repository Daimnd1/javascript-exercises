const findTheOldest = function(people) {
  let oldestGuy = people.reduce((oldest, person) => {
    if (oldest.yearOfDeath == undefined) oldest['yearOfDeath'] = 2025;
    if (oldest.yearOfDeath - oldest.yearOfBirth < person.yearOfDeath - person.yearOfBirth)
      return oldest = person
    return oldest;
  }
  , people[0])
  return oldestGuy;
};

findTheOldest([
      {
        name: "Carly",
        yearOfBirth: 1942,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ])
// Do not edit below this line
module.exports = findTheOldest;
