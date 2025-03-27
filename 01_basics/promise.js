// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Promise one created");
//         resolve()
//     }, 1000)
// })

// promiseOne.then(() => {
//     console.log("Promise one consumed");
// })

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Promise one created");
//         resolve()
//     }, 1000)
// }).then(() => {
//     console.log("Promise one consumed");
// })

// const promiseTwo = new Promise((resolve, reject) => {
//     let error = false;
//     if(!error) {
//         resolve({name: "Miki", password: "123f"})
//     } else {
//         reject("Error: Something went wrong")
//     }
// })

// promiseTwo.then((user) => {
//     console.log(user);
//     return user.name
// }).then((myName) => {
//     console.log(myName);
// }).catch((error) => {
//     console.log(error)
// }).finally(() => {
//     console.log("Finally prmise is either resolve or reject")
// })

// const promiseFive = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         let error = false;
//         if(!error) {
//             resolve({name: "Miki", Age: 30, Address: "Odisha"});
//         } else {
//             reject("ERROR: Something went wrong");
//         }
//     }, 1000)
// })

// const consumePromiseFive = async() => {
//     try {
//         const response = await promiseFive;
//         console.log(response) 
//     } catch (error) {
//         console.log(error)
//     }
    
// }

// consumePromiseFive();



// you can write async function using normal function or using arrow function
// async function consumePromiseFive(){}
// const getUsersData = async() => {
//     try {
//         const response = await fetch("https://api.github.com/users/mikipradhan1994");
//          const data = await response.json()
//         console.log(data.login)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getUsersData();

fetch("https://api.github.com/users/mikipradhan1994")
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
})


