// var c = 300

let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    function addnum(){
        return a + b
    }
}


// console.log(a);
// console.log(b);
// console.log(c);

// nested function scope 

function one()
{
    const username = "AKIB"

    function two(){
        const website = "akib.com"
        console.log(username);
    }
    // console.log(website);

    // two()
}

// one()

if (true) {
    const username = "AKIB"
    if (username === "AKIB") {
        const website = "akib.com"
        // console.log(username + website);
        
    }
    // console.log(website);
}

// console.log(username);

//++++++++++++++++++++++++ interesting ++++++++++++++++++++++++

console.log(addone(5))

function addone(num) {
    return num + 1
}



const addTwo = function (num) {
    return num + 2
}

addTwo(5)
