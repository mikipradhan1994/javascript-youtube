// In case of object and array
// const myHeros = ["hulk","spiderman","saktiman"];
// const users = {
//     username: 'mikipradhan',
//     password: 123
// }

// Object.prototype.miki = function() {
//     console.log("Prototype created");
// }

// users.miki();

// In case of function

function createUser(username, password) {
    this.username = username
    this.password = password
}

//createUser.prototype.printMe = function() { OR
Object.prototype.printMe = function() {
    console.log(`My password is ${this.password}`)
}

const userpass = new createUser("mikipradhan", 123456)
userpass.printMe()
console.log(userpass);
