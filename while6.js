/* Asking the user to give a string and then check if it’s a palindrome
(a word, phrase, or sequence that reads the same backwards
as forwards, e.g. madam or nurses run) or not. we Use loops to
solve this. */

process.stdout.write("enter a string to check if it is a plindrome or not: \n ");
process.stdin.on("data", function (inputfromuser){

    let input = inputfromuser.toString().trim();
   if (input.length % 2 == 0){



    for (let i = 0; i < input.length; i++)
    {

    if (input.charAt(i) === input.charAt(input.length - 1- i))
    {
        process.stdout.write(" Word you entered is a palindrome");

    process.exit();

    }
    else {
        process.exit();
    }

}
   }
   else {
       process.stdout.write("Word has an even number of charecter. I have not figured out how to do the odd ones ");
   }

})