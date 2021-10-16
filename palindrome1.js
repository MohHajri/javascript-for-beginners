process.stdout.write("enter a string to check if it is a plindrome or not: \n ");
process.stdin.on("data", function (inputfromuser){


    // Change the string into lower case and remove  all non-alphanumeric characters
    let wordToCheck = inputfromuser.toString().trim();

let i = 0;

let j = wordToCheck.length - 1 ;

let isOk = true;

while( i < wordToCheck.length && isOk) {

    console.log(wordToCheck.charAt(i));

    console.log("Letter in position " + j + " is " + wordToCheck.charAt(j));

    if (wordToCheck.charAt(i) != wordToCheck.charAt(j)) {

        isOk = false;

    }

    i++;

    j--;
    process.stdout.write("the word is not a plindrome");
}

else { process.stdout.write("the word is not a plindrome");


}
})