/* Create a program that keeps asking the user to input
numbers. These numbers are stored in an array. Keep asking
till zero is entered. After that the numbers are printed out in
a reverse order. Don’t use array methods for this but only
simple loops */




     process.stdout.write("enter a number: \n ");
     process.stdin.on("data", function (inputfromuser){
 
     let i = Number(inputfromuser);
 
 process.stdout.write(i + "\n");

 if (i == 0){
     process.exit();
 }
 
 
     })
 
