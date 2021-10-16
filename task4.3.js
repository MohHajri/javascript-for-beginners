/*  Creating a program that asks the user for a string and then
prints it out from the last letter to the first. Use a for loop.   */


process.stdout.write("please enter a string: \n")
process.stdin.on("data", function(inputfromuser){
input = String (inputfromuser)

let length_of_string = Number (input.length);

for (let i = 0; i <= length_of_string; i++){

 process.stdout.write(input.charAt(length_of_string - i) +"\n"); 

}





})
