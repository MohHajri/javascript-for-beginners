// Writing a simple program that asks user for three numbers and create these logical operations
// If all three numbers are equal print out “You entered three matching numbers”.
// If all three numbers are different print out “You entered three different numbers”.
// If first two are the same, but the third one is different, print out “Third one doesn’t fit”.
// If any of the numbers is 2, enter “You entered the magic number 2!”.

process.stdout.write("Enter three numbers separated by space \n");
process.stdin.on("data", function(Input){

let number = Number(Input.toString().split(" ")[0]);
let number2 = Number(Input.toString().split(" ")[1]);
let number3 = Number(Input.toString().split(" ")[2]);


if (number == number2 && number == number3 && number3 == number2 ){
    process.stdout.write("you entered three matching numbers");
}

if (number !== number2 && number !== number3 && number3 !== number2){
    process.stdout.write("you entered three different numbers\n");
}

if (number == number2 && number !== number3 && number3 !== number2  ){
    process.stdout.write("third number does not fit\n");
}

if (number == 2 || number2 == 2 || number3 == 2){
    process.stdout.write("you entered the magic number 2\n");
}

process.exit();
}
);