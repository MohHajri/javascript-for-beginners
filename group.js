process.stdout.write("Enter two numbers please : \n ")
process.stdin.on("data", function (inputfromuser)
{
    let number = Number (inputfromuser.toString().split(" ")[0]);
    let number2 = Number (inputfromuser.toString().split(" ")[1]);

if (number > number2)
{

process.stdout.write(number+ " is bigger than "+ number2);

}
else 
{
    process.stdout.write(number2+ " is bigger than " + number); 

}

})