// const tinderUser = new Object();

const tinderUser = {} // object literal syntax

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isloggedIn = false;
// console.log(tinderUser);

const regularUser = {
    email: "someone@google.com",
    fullname: {
        userfullname:{
            firstname: "sk"
            , lastname: "akib"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}

const obj2 = {3: "a", 4: "b"}

const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4 }
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "someone@google.com"
    },
     {
        id: 1,
        email: "someone@google.com"
    },
     {
        id: 1,
        email: "someone@google.com"
    },
     {
        id: 1,
        email: "someone@google.com"
    }
]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"))