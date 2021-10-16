// Write a simple program that asks user a simple yes or no question
// and printing out corresponding message

process.stdout.write("Are you single? \nplease respond only with Yes or No\n: ");
process.stdin.on("data", function(answer)
{
let answer2 = String (answer)[0];

if (answer2 == "Y"){ 
    process.stdout.write("well you are a living legend !");
}
else if (answer2 == "N"){
    process.stdout.write("well I do not care ...");
}
else {
    process.stdout.write("input is not recognized, try again.");
}
}


)