/*{
    let foo = 'bar';
  }

  console.log(foo);
*/

//  ReferenceError: foo is not defined

/*const NAME = "Victor";
console.log("Good Morning, " + NAME);
console.log("Good Afternoon, " + NAME);
console.log("Good Evening, " + NAME);

NAME = "Joe";
console.log("Good Morning, " + NAME);
console.log("Good Afternoon, " + NAME);
console.log("Good Evening, " + NAME);
*/

//assignment to constant variable, cant rename NAME from "victor" to "joe"

/*
let foo = "bar";
{
  let foo = "qux";
}

console.log(foo);
*/

// the result is 'bar. 'qux' is locked inside the curly braces, so the console.log is out of scope

const FOO = "bar";
{
  const FOO = "qux";
}

console.log(FOO);

// the result is 'bar" since the second CONST is in a separate scope
