// var c = 300

let a = 300

if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    function addnum(){
        return a + b
    }
}


console.log(a);
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

    two()
}

one()