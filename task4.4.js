/* Create a program that asks the user for a string and then
prints it out so that all odd characters are in uppercase
and all even characters are in lower case. Use a for loop. */

process.stdout.write("please enter a string: \n")
process.stdin.on("data", function(inputfromuser){
input = String (inputfromuser)
let length_of_string = Number (input.length);

for (let i = 0; i <= length_of_string; i++ ){

if  (i % 2 == 0 ) {

    process.stdout.write(input.toUpperCase().charAt(i) + "\n");
}
else {
    process.stdout.write(input.charAt(i) + "\n");
}

}


})