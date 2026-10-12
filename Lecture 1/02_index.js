// var let and const

var first_name = "Vicky";
var first_name = "Rahul";//the same variable name(identifier) can be declared again
console.log(first_name);


// let
// once a variable has been declared using let keyword then we cannot define it again.

// let firstName = "Vicky";
// console.log(firstName)
// let firstName = "rahul"
//not allowed.


let firstName = "Vicky";
firstName = "rahul";
console.log(firstName);


// const.
// const is used when we want to keep the value unchanged throughout the program.

// like the value of p1 i.e 3.14

// const pi = 3.14;
// pi = 3.15;
// not allowed

const pi = 3.14;
console.log(pi*2);

