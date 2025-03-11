// Object Destructuring and JSON API

const users = {
    name: "Miki",
    age: 30,
    address: "Bangalore"
}

const {address: permanentAddress} = users
console.log(permanentAddress)


// JSON API
// {
//     "name": "Miki",
//     "age": 30,
//     "address": "bangalore"

// }