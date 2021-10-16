// Write a JavaScript function that checks whether a passed string is palindrome or not? 


process.stdout.write("enter a string to check if it is a plindrome or not: \n ");
process.stdin.on("data", function (inputfromuser){


    // Change the string into lower case and remove  all non-alphanumeric characters
    let input = inputfromuser.toString().trim();
        let count = 0;
    // Check whether the string is empty or not
        if(input==="") {
           process.stdout.write("Nothing found!");
            process.exit();
        }
    // Check if the length of the string is even or odd 
        if ((input.length) % 2 === 0) {
            count = (input.length) / 2;
        } else {
    // If the length of the string is 1 then it becomes a palindrome
            if (input.length === 1) {
                process.stdout.write("Entry is a palindrome.");
                process.exit();
            } else {
    // If the length of the string is odd ignore middle character
                count = (input.length - 1) / 2;
            }
        }
    // Loop through to check the first character to the last character and then move next
        for (let x = 0; x < count; x++) {
    // Compare characters and drop them if they do not match 
            if (input.charAt(x) !== input.charAt(input.length - 1 - x)) {
                console.log("Entry is not a palindrome.");
                process.exit();
            }
        }
        console.log("The entry is a palindrome.");
        return true;
    
    })