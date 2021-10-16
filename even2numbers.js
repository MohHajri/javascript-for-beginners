// asking the user to print two digits and then
// print out wether is it an even number or an odd one
process.stdout.write("Enter two numbers please: ");
process.stdin.on("data", function (inputfromuser)
{
let number = Number (inputfromuser.toString().split(" ")[0]);
let number2 = Number (inputfromuser.toString().split(" ")[1]);

 if (number % 2 == 0 && number2 % 2 == 0){
    process.stdout.write("both numbers you entered are even");
}
 else if (number % 2 ==! 0 && number2 % 2 ==! 0){
    process.stdout.write("both numbers you entered are odd");
}

else if (number % 2 == 0 ){
    process.stdout.write(number+ " is even");
}
else if (number % 2 ==! 0){

    process.stdout.write(number+ " is odd");
}
else if (number2 % 2 == 0){
    process.stdout.write(number2 + " is even");
}
else {
    process.stdout.write(number2 + " is odd");
}
})