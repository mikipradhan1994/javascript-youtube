//declare a symbol, before use of symbol 1st delcared
const mySym = Symbol("key1")
const obj = {
    name: "miki",
    "full name" : "miki",
    [mySym]: "Mykey1",
    email: "miki@google.com"
}

// console.log(obj["full name"])
// console.log(obj.name)
// console.log(obj["name"])
// console.log(obj[mySym])

obj.email = "miki@microsoft.com";
// Object.freeze(obj) // to freeze the execution
obj.email = "miki@xyz.com"

obj.greeting = function() {
    // console.log("Hello Miki Pradhan")

    console.log(`My name is ${this.email}`);
}
// console.log(obj.greeting());

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//singleton object

// const tenderUser = new Object();

// non singleton object

const tenderUser = {
    name: "miki",
    email: "miki@xyz.com",
    age: 30
}

// console.log(Object.keys(tenderUser))
// console.log(Object.values(tenderUser))
// console.log(Object.entries(tenderUser))
// console.log(tenderUser.hasOwnProperty('miki'))

// const result = (tenderUser?.hasOwnProperty('address') === true) ? tenderUser?.address : tenderUser?.name;

const result2 = (Object.keys(tenderUser) )
console.log(tenderUser?.address ? tenderUser?.address : tenderUser?.email)


// const obj1 = {1: 'a', 2: 'b'}
// const obj2 = {3: 'a', 4: 'b'}
// const obj3 = {5: 'a', 6: 'b'}

// const obj4 = {obj1, obj2, ob3}
const arryObject = [
    {
        name: "miki1",
        email: "miki1@xyz.com",
        age: 30
    },
    {
        name: "miki2",
        email: "miki2@xyz.com",
        age: 32,
        address: "bangalore"
    }
]
