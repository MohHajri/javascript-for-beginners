process.stdout.write("Enter a number: \n ")

process.stdin.on("data", function (inputfromuser)
{
let giveninput = Number(inputfromuser);
let AA = giveninput + 1;
process.stdout.write("You typed in " + giveninput + "\nMy number is " + AA +"\nSorry you LOST");
process.exit();
});