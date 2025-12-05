const userEmail = []

if (userEmail) {
    // console.log("got the user email");

} else{
    // console.log("no email found");
}
// falsy values => false, 0, "", null, undefined, NaN, -0

// truthy valuees => "hello", 1, [], {}, function(){}, true, -1, 3.14 "0", 'false

// checking for empty array
// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
// }   

// checking for empty object

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty!!!!");
    
}

// Nullish Coalescing Operator (??)

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1); 


// Ternary Operator 

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80 ") : console.log("more than 80");

