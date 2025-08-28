const fibonacci = function(num) {
  if (num < 0) return 'OOPS';
  if (num == 0) return 0;
  if (num == 1 || num ==  2) return 1;
  let fiboPast = 1;
  let fiboNow = 1;
  for (let i = 0; i < num - 2; i++){
    let tempFibo = fiboNow;
    fiboNow += fiboPast;
    fiboPast = tempFibo;
  }
  return fiboNow;
};

fibonacci(4);
// Do not edit below this line
module.exports = fibonacci;
