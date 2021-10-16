/* Asking the user to give a string and then check if it’s a palindrome
(a word, phrase, or sequence that reads the same backwards
as forwards, e.g. madam or nurses run) or not. we Use loops to
solve this. */

process.stdout.write("enter a string to check if it is a plindrome or not: \n ");
process.stdin.on("data", function (inputfromuser){

    let input = inputfromuser.toString().trim();
  
    // loop through half of the string

    for (let i = 0; i < (input.length /2); i++) {     
      // check each position
      // between the first and the last character
      if (input.charAt(i) !== input.charAt(input.length - 1 - i)) {
        process.stdout.write("NOT a palindrome");
        process.exit();
      }}
    
    process.stdout.write("The string is a palindrome");
      
})