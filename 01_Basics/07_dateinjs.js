//Dates

let myDate = new Date()
// console.log(myDate.toString()) // Current date and time

// console.log(myDate.toDateString()) // Current date

// console.log(myDate.toLocaleDateString())

// console.log(typeof myDate) // object


let myCreatedDate = new Date(2025, 11, 30)
// console.log(myCreatedDate.toLocaleDateString())

let myTimestamp = Date.now()

// console.log(myTimestamp)
// console.log(myCreatedDate.getTime()) // Current timestamp in milliseconds since January 1, 1970
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());-

// `${newDate.getDay()} and the time is ${newDate.getHours()}`


newDate.toLocaleDateString('default', {weekday: 'long'}) 