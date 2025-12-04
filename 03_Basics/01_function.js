function sayMyName() {
    console.log("A");
    console.log("K");
    console.log("I");
    console.log("B");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    return number1 + number2;
    
}

const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);

function loginUserMessage(username)
{
    if (username === undefined) {
        console.log("Please enter a username ");
        return;
    }
    return `${username} just Logged in!`;
}


console.log(loginUserMessage("AKIB"));
