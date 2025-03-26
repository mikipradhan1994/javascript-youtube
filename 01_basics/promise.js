const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise one created");
        resolve()
    }, 1000)
})

promiseOne.then(() => {
    console.log("Promise one consumed");
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise one created");
        resolve()
    }, 1000)
}).then(() => {
    console.log("Promise one consumed");
})

const promiseTwo = new Promise((resolve, reject) => {
    let error = false;
    if(!error) {
        resolve({name: "Miki", password: "123f"})
    } else {
        reject("Error: Something went wrong")
    }
})

promiseTwo.then((user) => {
    console.log(user);
    return user.name
}).then((myName) => {
    console.log(myName);
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log("Finally prmise is either resolve or reject")
})

const promiseFive = new Promise((resolve,reject) => {
    
})

