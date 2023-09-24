/* Refactor this statement to use an if statement instead.

return foo() ? 'bar' : qux();

*/

/*
function foo() {
  if ("bar") {
    return "bar";
  } else {
    return qux();
  }
}
*/

if (foo()) {
  return "bar";
} else {
  return qux();
}
