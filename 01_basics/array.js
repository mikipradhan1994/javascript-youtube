/*
push, unshift
pop,shift
indexOf, includes
slice, splice
join, spread operator
concat, at, of, flat
isArray, from

*/

//Declaration of array
const myArr = [0,1,2,3,4,5]

// const myArr = new Array(1,2,3,4,5)
//myArr.push(6) // Add element end of the array
//myArr.unshift(1) // Add element at start of array

//myArr.pop(); //Remove end element of an array
//myArr.shift(); //Remove start element of the array


// console.log(myArr.includes(0)); // check the elememnt is available or not in an array / boolen type result.

//console.log(myArr.indexOf(5))

// const newmyArr = myArr.join();
// console.log(newmyArr)
// console.log(typeof(newmyArr))

// const mysliceArr = myArr.slice(1, 4) // get new array with excluding end element without modifying originl array
// console.log(mysliceArr)
// Here 1 is start element and 4 is end element.
// const myspliceArr = myArr.splice(1, 4) // get new array with including end element and modify original array
// console.log(myspliceArr)

// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// const arr3 = [7,8,9]

// console.log(arr1.concat(arr2,arr3)) // join the multiple arrays

// using spread operator
// const newSpreadArray = [...arr1,...arr2,...arr3]
// console.log(newSpreadArray)


// const multiArr = [1,2,3,[4,5,[6,7,8,9]]]
// console.log(multiArr.flat(Infinity))
// console.log(multiArr)

const heros = ["shaktiman", "Batman", "Spiderman"]
// console.log(Array.isArray(["miki"])) //true
// console.log(Array.isArray("miki")) // flase
// console.log(Array.from("miki")) // convert string to array
// console.log(Array.from({name: "miki"})) // get blank array bcz from don't convert object in to array


const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1, score2, score3))

