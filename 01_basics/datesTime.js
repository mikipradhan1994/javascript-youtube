let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate) // in javascript date in object

let createMydate = new Date(2024, 0, 12, 5, 3); // in javascript the month starts from 0 means 0 is january
console.log(createMydate.toDateString());
console.log(createMydate.toLocaleString());


const timestamp = Date.now()
console.log(timestamp)
console.log(Math.floor(Date.now() / 1000))


const newDate = new Date();
console.log(newDate.getMonth() + 1)

//`${newDate.getMonth()} and  ${newDate.getDay()}` // Print like this

console.log(newDate.toLocaleString('default', {
    weekday: 'long',
}))
