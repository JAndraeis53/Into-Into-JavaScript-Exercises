/* 
let readlineSync = require("readline-sync");
let name = readlineSync.question("What is your name? ");
console.log(`Hello, ${name}!`);


let firstName = prompt("What is your first name? ");
let lastName = prompt("What is your last name?  ");
console.log(`Hello, ${firstName} ${lastName}!`);

*/

function getName(prompt) {
  let readlineSync = require("readline-sync");
  let name = readlineSync.question(prompt);
  return name;
}

let firstName = getName("What is your first name? ");
let lastName = getName("What is your last name? ");
console.log(`Hello, ${firstName} ${lastName}!`);
