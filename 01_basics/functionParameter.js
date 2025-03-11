// console.log("m");
// console.log("i");
// console.log("k");
// console.log("i");

function sayMyname() {
    console.log("m");
    console.log("i");
    console.log("k");
    console.log("i");
}
// sayMyname     // If you write without parathesis, this is only reference
// sayMyname();  // this is called function execution.


// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2)
// }

function addTwoNumbers(num1, num2) {  // This is called parameters
    // let res = num1 + num2
    // return res
    return num1 + num2
}

const result = addTwoNumbers(4, 5) // this is called arguments
// console.log(result)

const users = {
    name: "Miki",
    age: 30,
    address: "Bangalore"
}

// function usersDetails(data) {
//     return `My name is ${data.name} and i am from ${data.address}`
// }
// const usersData = usersDetails(users)

//Also you can write function with object parameter
function usersDetails(data) {
    return `My name is ${data.name} and i am from ${data.address}`
}
const usersData = usersDetails({name: "Miki",age: 30, address: "Bangalore"})


///////

// function userLoggedIn(username) {
//    return `${username} logged in`
// }

function userLoggedIn(username) {
    if(username === undefined) {
        console.log("Please enter a username")
        return
    }
    return `${username} logged in`
 }
// console.log(userLoggedIn("miki"))


/////
function calculateCartprice(v1,...price) {
    return price
}

// console.log(calculateCartprice(100,200,300))

// +++++++++++++++++ Function declaration , closure and hoisting ++++++++++++++++

function one() {
    const username = "miki";
    function two() {
        const website = "google";
        console.log(`${username} and ${website}`)
    }
    two();
   // console.log(website) // here you can not website
    console.log(username)

}

one()

// function declaration
console.log(addone(5))
function addone(num) {
    return num + 1;
}
// console.log(addone(5))

//another way to ceclare a function
// console.log(addtwo(6)) Here we can't get function result bcz of declaration this is called hoisting
const addtwo = function(value) {
    return value + 1
}
// console.log(addtwo(6))