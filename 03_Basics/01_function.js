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


// console.log(loginUserMessage("AKIB"));


function calculateCartPrice(val1, val2 ,...num1){   // .. => rest opertator
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000));


const user = {
    username: "akib",
    price: 1000
}

function handleObjest(anyobject) {
    console.log(`Username ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObjest(user)

handleObjest({
    username: "akib",
    price: 20000
})

const mynewArray = [200, 400, 600, 600]

function returnsecondValue(getarray) {
    return getarray[0]
}

console.log(returnsecondValue(mynewArray));

    