process.stdin.on("data", function (inputfromuser)
{
    //the statement below will automatically be excuted once the usr has input something in
let giveninput = inputfromuser;
process.exit();
});


process.stdout.write (util.format( "\nFirst number is %d and second number is % .\n", number1.toFixed(2), number2));
