process.stdout.write("Enter a number: \n ");
// let us read the input
process.stdin.on("data", function (MyVariable)
{
    // let us covert the given input into a number
    let GivenNumber = Number (MyVariable)
// add number 5 to that number
// covert it into a string
let result = Number( GivenNumber  + 5).toString();

process.stdout.write(result);
//let us terminate the program
process.exit();
});