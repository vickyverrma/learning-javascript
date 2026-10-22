// game -> winning number is 19
//   19 your guess is right
//   17 too low
//   20 too high

let winningnumber = 19;
let userguess = +prompt("Enter your number");
if(userguess == winningnumber)
{
    console.log("your guess is right");
} else{
    if(userguess > winningnumber)
    {
        console.log("Your guess is too high");
    } else{
        console.log("Your guess is too low ");
    }
}

// eles if condition

let tempinDegree = 46;
if(tempinDegree <= 0)
{
    console.log("Extremely cold outside ");
} else if(tempinDegree < 16){
    console.log("It is cold outside");
}else if(tempinDegree<25){
    console.log("weather is okay");
}else if(tempinDegree<35){
    console.log("we can go for swim ?");
}else if(tempinDegree < 45){
    console.log("switch on the AC ");
}else{
    console.log("its too hot outside.");
}
console.log("i think I LOVE YOU ");