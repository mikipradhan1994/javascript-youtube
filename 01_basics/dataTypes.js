"use strict"; // treat all js code as newer version.
/*
string => ""
number => 2 to power 53 (range)
bigint
boolean => true/false
null => it is standalone value
undefined => declared variable but the value is not assigned.
symbol => unique
object
*/

//console.log(typeof "miki");

/*  DATA TYPE SUMMERY */

// Primitive data type

/* 7type
   ---------
   String, Number, Null, Undefined, Boolean,symbol, BigInt
*/
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false

const bigNumber = 3456543554655n

/*Non primitive or reference data type
Array, Objects, functions

*/

//++++++++++++++++JS Memories++++++++++++++++++++++++++

// stack(primitive), heap(non-primitive)
let myYoutubename = "miki.com"
let anotherName = myYoutubename

console.log(anotherName)
anotherName = "miki2.com"
console.log(myYoutubename)
console.log(anotherName)
// stack memory is not store the variable , it just copy the value 
let obj1 = {
    name: "miki",
    age: 30
}
//heap is not the obj value, it reference value
let obj2 = obj1
obj2.age = 35

console.log(obj1)
console.log(obj2)