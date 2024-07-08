const accountId= 144553
let accountEmail ="guptaatpug@.com"
var accountPassword="12345"
accountCity="japur"
let accountState;
// accountId=2 //not allowed 
console.log(accountId);
console.log(accountEmail);
/*
prefer notto use var 
because of issue in block scope and funticunal scope
*/
accountEmail="hdfc@.com"
accountPassword="54321"
accountCity="mumbai"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])