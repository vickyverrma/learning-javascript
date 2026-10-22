// boolean and comparision operator
let a = 2;
let b = 2;
console.log(a<=b);

//  == vs ===
let c = "4";
let d = 4;
console.log(c == d);
// O/P true because == checks only the value not data-type.

c = "5";
d = 5;
console.log(c === d);
// O/P false because === checks data and data-types also.
 
// != vs !==

c = 5;
d = 5;
console.log(c != d);

// it prints false, c != d checks whether the two values are not equal. Since both c and d are 5, they are equal, so the “not equal” comparison is false.
d = 6;
console.log(c != d);
// now it is printing true because now they aren't equal.
// ** this only chaecks the data not the data-type.

console.log(c !== d);

// find even and odd
let xyz = 12;
if(xyz%2 == 0)
{
    console.log("even");
}
else{
    console.log("odd");
}
