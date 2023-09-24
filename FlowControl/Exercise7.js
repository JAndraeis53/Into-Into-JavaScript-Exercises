/*
Write a function that takes a string as an argument and returns an all-caps version of the string when the
 string is longer than 10 characters. Otherwise, it should return the original string. Example: change 'hello world' to 
 'HELLO WORLD', but don't change 'goodbye'.
 */

function takesAString(yourString) {
  if (yourString.length > 10) {
    return yourString.toUppercase();
  } else {
    return yourString;
  }
}

console.log("jack");
console.log("mary had a little lamb");
console.log("jack and killjoy");
console.log("jill");
