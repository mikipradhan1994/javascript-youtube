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

