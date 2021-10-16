process.stdout.write("Enter a distance in meters please: \n");
process.stdin.on("data", function (inputfromuser)
{
    let giveninput = Number(inputfromuser);
    let KL = giveninput * 0.001;
    let ML = giveninput * 0.0006;
    let YA = giveninput * 1.09361;
    let FE = giveninput * 3.2808;
    let IN = giveninput * 39.370;
    let LY = giveninput * 0.00000000000000010570;
    process.stdout.write(giveninput + " meter or meters is :\n" + KL + 
    " kilometers.\n" + ML+ " miles.\n" + YA + " yards.\n" + FE + " feets.\n" + IN + " inches.\n" + LY + " light years.");
process.exit();
});