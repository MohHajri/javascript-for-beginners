/* find the largest and samllest number from the numbers that the user enters */ 
// using functions 


let arrayToSearch = [];
process.stdout.write("\n\nPlease enter a number (zero terminates the program): ");

process.stdin.on("data", function(inputFromUser) {
    let userInput = inputFromUser.toString().trim();

    /* FindLargest() function finds the largest item given in an array */
    // Parameters: an array to find the largest item from return value.
    // we want to return the largest value found in the array.
    function FindLargest(arrayToSearch){
        // Find the largest value in the array using a loop and print it out
        let largest = arrayToSearch[0];
        for (let i = 1; i < arrayToSearch.length; i++) 
        {
            if (arrayToSearch[i] > largest) {
                largest = arrayToSearch[i];
            }
       }
       return largest;
}

       function FindSmallest(arrayToSearch)
       {
      // Find the smallest value in the array using a loop and print it out
      let smallest = arrayToSearch[0];
      for (let i = 1; i < arrayToSearch.length; i++) 
      {
      if (arrayToSearch[i] < smallest) 
      {
         smallest = arrayToSearch[i];
      }
      }
      return smallest;
      }



      if (userInput == 0) 
      {
        
        // call our function
        let largest = FindLargest(arrayToSearch);
        process.stdout.write("\nLargest number is " + largest + "\n");

    // call our function
        let smallest = FindSmallest(arrayToSearch);
        process.stdout.write("\Smallest number is " + smallest + "\n\n");
        process.exit();
     } 
     else 
    {
        // Add the number into array
        arrayToSearch.push(userInput);
        // Keep asking for numbers
        process.stdout.write("\n\nPlease enter a number (zero terminates the program): ");
    }
})