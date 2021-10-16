// code printing out wether a given number
// is odd or even.

process.stdout.write("Enter a number homie! \n")
process.stdin.on("data", function (inputfromuser)
{
let number = Number(inputfromuser);
if (number % 2 == 0){
    process.stdout.write(number+ " is even.")
}
else {
    process.stdout.write(number+ " is odd.")
}


})