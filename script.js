// Refactoring with ES2015
// 1.
// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

  
// refactored
const filterOutOdds = (...nums) => nums.filter(num => num % 2  === 0);

// 2.
// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

// Make sure to do this using the rest and spread operator.
// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

const findMin = (...arg) => Math.min(...arg);

// 3.
// ## **mergeObjects**

// Write a function called ***mergeObjects*** that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

//4.
// ## **doubleAndReturnArgs**

// Write a function called ***doubleAndReturnArgs*** which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]

//5.
// ## **Slice and Dice!**
// 
// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!
// 
// Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */

// function removeRandom(items) {

// }

const removeRandom = items => {
  let idx = Math.floor(Math.random() * items.length) // random idx value between 0 and length of itens idx
  return [...items.slice(0, idx), ...items.slice(idx + 1)] // explicitly returning a spread of the items arr sliced at the random idx
}

/** Return a new array with every item in array1 and array2. */

// function extend(array1, array2) {

// }

const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

// function addKeyVal(obj, key, val) {

// }

const addKeyVal = (obj, key, val) => ({...obj, [key]: val});

/** Return a new object with a key removed. */

// function removeKey(obj, key) {

// }

const removeKey = (obj, key) => {
  const objCopy = {...obj}
  delete objCopy[key];
  return objCopy;
}


/** Combine two objects and return a new object. */

// function combine(obj1, obj2) {

// }

const combine = (obj1, obj2) => ({...obj1, ...obj2});

/** Return a new object with a modified key and value. */

// function update(obj, key, val) {

// }
// refactored
// const update = (obj, key, val) => {
//   let objUpd = {...obj};
//   objUpd[key] = val;
//   return objUpd;
// }
// refactored more
const update = (obj, key, val) => ({...obj, [key]: val});

