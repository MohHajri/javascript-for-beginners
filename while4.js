/* Asking the user to enter a number and then printing out corresponding multiplication
table using a loop */

process.stdout.write("Enter a Number Homeboy: \n");
process.stdin.on("data", function(inputfromuser){

let input = Number(inputfromuser);
let i = 0;
let maximum = 10;
process.stdout.write("*****************************************************************");
process.stdout.write("\n");
while(i < maximum)
{
process.stdout.write( "*                         "+ input + " * " + i + " = " +input * i +"                                *");
process.stdout.write("\n");
i++;

}
process.stdout.write("*****************************************************************");





})