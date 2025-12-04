const accountId = 144553
let accountEmail = "Akib@gmail.com"
var accountPassword = "12345"
accountCity = "kolkata"
let accountState;


// accountId = 2 // not allowed

console.log(accountId);

accountEmail = "ak@hd.com"
accountPassword = "123"
accountCity = "hooghly"

console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/