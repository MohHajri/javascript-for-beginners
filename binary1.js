/* This program converts binary numbers that the user input into decimal numbers   */

process.stdout._write("Enter a binary number laaaan");
process.stdin.on("data", function (inputfromuser){

  let binary= inputfromuser.toString().trim();

for (let i = 0; i< binary.length; i++ ){
process.stdout.write(binary.charAt(i));
}

})