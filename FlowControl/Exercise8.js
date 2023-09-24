/*
Write a function that logs whether an integer is between 0 and 50 (inclusive),
 between 51 and 100 (inclusive), greater than 100, or less than 0.
*/

function logTheInteger(theInteger) {
  if (theInteger < 0) {
    console.log(`${theInteger} is a negative number`);
  } else if (theInteger <= 50) {
    console.log(`${theInteger} is between zero and fifty`);
  } else if (theInteger <= 100) {
    console.log(`${theInteger} is between fifty-one and one hundred`);
  } else {
    console.log(`${theInteger} is greater than 100`);
  }
}

logTheInteger(4);
logTheInteger(55);
logTheInteger(89);
logTheInteger(150);
logTheInteger(-1);
