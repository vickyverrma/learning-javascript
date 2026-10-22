// falsy values
// false
// ""
// null
// undefined
// 0
// all these are treated as false.

// ex 1
let firstname = "";
if(firstname)
{
    console.log(firstname);
}
else{
    console.log("firstname is empty");
}
// ex 2
let lastname;
if(lastname)
{
    console.log(lastname);
}
else{
    console.log("lastname is undefined ");
}
// ex 3
let a=0;
if(a){
    console.log(a);
}
else{
    console.log("a is " + a);
}

// ex 4
let name = null;
if(name)
{
    console.log(name);
}
else{
    console.log("name is "+ name);
}

// truthy values
// except falsy all other values are truthy.

// ex 1
a = 1;
if(a)
{
    console.log("a is not falsy ")
}
else{
    console.log("a is falsy");
}

// ex 2
name = "vicky"
if(name)
{
    console.log("name is not falsy ")
}
else{
    console.log("name is falsy");
}