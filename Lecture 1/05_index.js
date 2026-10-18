// typeof operator

// string
// numbers
// boolean
// null
// BigInt
// undefined
// symbols

naam = "vicky";
console.log(typeof naam);

// convert number into string
let age = 22;
age = age+"";

// 22 -> "22"
console.log(typeof age);

// another way of doing it
let age2 = 23;
age2 = String(age2);
console.log(typeof age2);

// convert string into number
let age3 = "23";
age3 = +age3;
console.log(typeof age3);

let age4 = "24";
age4 = Number(age4);
console.log(typeof age4);

// undefined
// undefined can go with let and var but not with const
// o/p-> Missing initializer in const declara
let xyz;
console.log(typeof xyz);

const abs = 1;
console.log(typeof abs);

// null
let bv = null;
console.log(typeof bv);
// op -> object

// BigInt
// js can store number upto 9007199254740991
// but if you want to store number beyond its then you must use BigInt

let mynumber = 123;
console.log(Number.MAX_SAFE_INTEGER);

let bi = 987877199254740992;
console.log(bi)
// o/p -> 987877199254741000 which is wrong.

bi = BigInt(bi);
console.log(bi)
// o/p -> 987877199254740992n

