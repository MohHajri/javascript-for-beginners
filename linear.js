/* Create a program that finds specific items in an array.
1. Create an array with the following items: 55, 23,
6456, 324, 21, 234, 72, 21
2. Ask the user what they want to search for in the
integer array.
3. Loop through the array and compare the values with the input given by the user.
4. If the item is found, print out in which index the value was found.
5. If the item is not found, print out a message saying item was not found.  */


let array = [1];
process.stdout.write("What do you wan to search for in the integer array ? : ");
process.stdin.on("data", function(inputfromuser){

let Input = Number(inputfromuser);


for (let i = 0; i< array.length; i++)
{
 if (Input == array[i])
 {
   console.log("Number you are searching for is found in index number "+  i);

 }
 else{
     console.log("Item is not found");
     process.exit();
 }



}










})