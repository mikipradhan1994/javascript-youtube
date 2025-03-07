const score = 400
// console.log(score)

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString()) // for USA amount
// console.log(hundreds.toLocaleString('en-IN')) // For indian amounts

// ++++++++++++++++++Maths++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-2))
console.log(Math.abs(2))
console.log(Math.round(2.3))
console.log(Math.ceil(2.6))
console.log(Math.floor(2.9))
console.log(Math.random());  // Normally get value between o and 1

// If you want value greater than 1, then add 1
console.log((Math.random() * 10) + 1)

//To get less round value, use floor

console.log(Math.floor(Math.random() * 10) + 1);

// Again get a value bewteen max and min number

const min = 10
const max = 20

console.log(Math.random() * (max - min + 1))

// To get single value

console.log(Math.floor(Math.random() * (max - min + 1)) + min)