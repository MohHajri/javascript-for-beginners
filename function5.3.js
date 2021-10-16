/* Create a program that has a method sum(firstNumber,
    secondNumber) that returns the sum of the numbers passed to
    the method as input parameters. Call this method, save the return value in a variable and print it out. Do
    this three times with different variable values   */

    process.stdout.write("Enter two numbers separated by space : ");
    process.stdin.on("data", function(inputFromUser)
    {
    let NumberOne= inputFromUser.toString().split(" ")[0];
    let NumberTwo = inputFromUser.toString().split(" ")[1];
    let myArray= new Array();
    myArray.push([Number(NumberOne), Number(NumberTwo)]);

function SumOfTwoNumbers(NumberOne, NumberTwo)
{
     
    return process.stdout.write("First sum is: " + NumberOne+NumberTwo);


}

})  