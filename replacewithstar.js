/*  Write code for function that replaces all a's, i's and e's in a given word with asterisks (*) and prints the new word out. */

process.stdout.write("enter a number: \n ");
process.stdin.on("data", function (inputfromuser){

    let word = inputfromuser.toString().trim();
    let newWord = "";
    for (let i =0; i < word.length; i++) {
        if (word.charAt(i) == 'a' || word.charAt(i) == 'e' || word.charAt(i) == 'i' ) {
            newWord += '*';
        } else {
            newWord += word.charAt(i);
        }
    }
    process.stdout.write(newWord);


});

