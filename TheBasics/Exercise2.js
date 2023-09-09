let number = 4936;
let ones = number % 10;
console.log(ones);
//6

number = (number - ones) / 10;
//console.log(number);
//493

let tens = number % 10;
console.log(tens);
//3

number = (number - tens) / 10;
//console.log(number);
//49

let hundreds = number % 10;
console.log(hundreds);
//9

let thousands = (number - hundreds) / 10;
console.log(thousands);
//4
