process.stdout.write("Enter a distance please: \n");
process.stdin.on("data", function (inputfromuser)
{
    let giveninput = Number(inputfromuser);
    let KM = giveninput * 1.60934;
    process.stdout.write(giveninput+" mile or miles is " +KM +" kilometers.");
process.exit();
});