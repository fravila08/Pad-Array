// Write unit tests!
var char = require("./padArray");

console.log(char.padArray([1,2,3], 5, 'apple'))
console.log(char.padArray([1,2,3], 9, 'tree'))
console.log(char.padArray([1,2,3], 7, ))
console.log(char.padArray([1,2], 5, 7))
console.log(char.padArray([1], 1, 'apple'))