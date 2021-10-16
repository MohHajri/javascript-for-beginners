process.stdout.write("Enter two numbers separated by space : \n ");
// let us read the input
process.stdin.on("data", function (MyVariable)
{
// let us create a varaiable where we split the two numbers

    // let us covert the given input into a number
    let GivenNumber = Number (MyVariable).toString().split(  );
let FirstNumber = Number( GivenNumber [0]);
let SecondNumber = Number( GivenNumber[1]);
// covert it into a string
let result = ( FirstNumber  + SecondNumber).toString();

process.stdout.write(result);
//let us terminate the program
process.exit();
});