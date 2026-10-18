// Learning about String Method
// trim()
// toUpperCase()
// toLowerCaes()
// slice


// trim() used to remove unwanted spaces
let firstName = "     Vicky   "
console.log(firstName)
console.log(firstName.trim());
// firstName.trim() will give new string because strings are immutable.
console.log(firstName.length) // thats why it is still showing the length as 13.


// tuUpperCase() used to convert the string into uppercase 

let greet = "hello";
console.log(greet.toUpperCase());
greet = greet.toUpperCase();
console.log(greet);

// slice method
{
let name = "Vicky Kumar";
name = name.slice(0,6);
console.log(name);
}

// String concatenation
let first = "Vicky";
let last = "Verma";
let full = first + " " + last;
console.log(full);



