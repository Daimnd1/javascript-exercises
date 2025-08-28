const palindromes = function (str) {
  // let reversedArray = str.split('').reverse(); 
  // let filteredRA = reversedArray.filter((item) => !Number.isInteger(parseInt(item)));
  // let reverseString = filteredRA.join('');
  let reverseString = str.split('')
  .reverse()
  .filter((item) => item !== '!' && item !== '.' && item !== ',' && item !== ' ')
  .join('')
  .toLowerCase();
  if (str.toLowerCase()
    .split('')
    .filter((item) => item !== '!' && item !== '.' && item !== ',' && item !== ' ' )
    .join('')
    .includes(reverseString)) return true;
  return false;
};

palindromes('A car, a man, a maraca.')
palindromes('r3ace3car')
palindromes('racecar!')
// Do not edit below this line
module.exports = palindromes;
