let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

/* the output is '1' because that variable definition is in scope with the console.log Foo does nothing because it's
out of scope
*/
