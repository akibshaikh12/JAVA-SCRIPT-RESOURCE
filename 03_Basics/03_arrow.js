const user = {
    username: "SK AKIB",
    price: 1000,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }

}

// user.welcomeMessage();
// user.username = "Hinokami";
// user.welcomeMessage();

// console.log(this);

// function chai()
// {
//     let username = "sk akib"
//     console.log(this.username);
// }
// chai();


const chai = () =>{ 
    let username = "sk akib"
    console.log(this);
    
}

// chai();


// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// const addTwo = (num1, num2) =>  num1 + num2;
// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({usersname: "sk akib"})

console.log(addTwo(3, 8));


// const myArray = [1, 2, 3, 4, 5];

// myArray.forEach()
