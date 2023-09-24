/* Write a function, evenOrOdd, that determines whether its argument is an even number. 
If it is, the function should log 'even' to the console; otherwise,
 it should log 'odd'. For now, assume that the argument is always an integer.


function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

evenOrOdd(1); //should return "odd"

evenOrOdd(88); // should return "even"
*/

/* Let's improve our previous implementation of evenOrOdd.
 Add a validation check to ensure that the argument is an integer.
 If it isn't, the function should issue an error message and return.
*/

function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log("This is not an integer");
  }

  if (number % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

evenOrOdd(5);
