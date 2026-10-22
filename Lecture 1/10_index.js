// and , or operator
// && gives true when all condition is true
// || gives true when atleast one condition is true.

let age = 22;
let firstname = "Vicky";
if(firstname[0]==="V" && age>=18)
{
    console.log("name start with 'V' and above 18 ");
}
else{
    console.log("insode the else block");
}

if(firstname[0]==="V" || age<= 18)
{
    console.log("Inside if ");
}
else {
    console.log("inside else");
}