/* asking the user to write an string input and loop through the string and print out the string letter by letter saying 1.
character is [first letter of given string] */

process.stdout.write("Enter a string baby \n");
process.stdin.on("data", function (inputfromuser){

let input = inputfromuser.toString().trim();
let x = 0;
let counter = 1;

while (x< input.length)
{

    process.stdout.write( counter + "."+  " character is: "+input.charAt(x));
    process.stdout.write("\n");
x++;
counter++;
}
 process.exit();

})