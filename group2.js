// asking the user to write three numbers and
// then print out the largest one among them.

process.stdout.write("Enter three  numbers please : \n ")
process.stdin.on("data", function (inputfromuser)
{
    let number = Number (inputfromuser.toString().split(" ")[0]);
    let number2 = Number (inputfromuser.toString().split(" ")[1]);
    let number3 = Number (inputfromuser.toString().split(" ")[2]);

if (number > number2 && number > number3)
{
process.stdout.write( number+ " is the largest number." );
}
else if (number2 > number3)
{
    process.stdout.write(number2+ " is the biggest. "); }
  else {

    process.stdout.write(number3+ " is the biggest. "); 
  }

 process.exit();
})