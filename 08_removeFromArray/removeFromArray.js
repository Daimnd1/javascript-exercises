const removeFromArray = function(arr, ...args) {
  // const args = Array.prototype.slice.call(arguments, 1);
  let newArray = [];
  // args.forEach((element) => {
  //   let tempNewArray = newArray.slice();
  //   newArray = tempNewArray.filter(e => e !== element);;
  // })
  arr.forEach(item => {
    if (!args.includes(item)){
      newArray.push(item);
    }
  })
  return newArray;
};
console.log(removeFromArray([1, 2, 2, 3], 2));
// Do not edit below this line
module.exports = removeFromArray;
