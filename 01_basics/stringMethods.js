const name = "miki"
const age = " 30"
console.log(name + age) // donot use like this.

console.log(`My name is ${name} and my age is ${age}`)

// another way of declaring string

const petName = new String("tuntun")
const username = "mikipradhan";
console.log(petName.__proto__)
console.log(petName.length)
console.log(username.length)
console.log(username[2])

console.log(username.toLocaleUpperCase())


console.log(username.charAt(2)) // find character by indexed value
console.log(username.indexOf('k')) // find index value by character or string

const address = "   batamangal";
console.log(address.trim())

const pravu = "Jay-Jagannath";
console.log(pravu.split('-')) 

const newAddress = petName.substring(0, 4)

const newPetname = petName.slice(0, 4)
console.log(newPetname)


const url = "https://miki%20pradhan.com";
console.log(url.replace('%20', '-'))

console.log(url.includes('miki'))