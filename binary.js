/* This program converts binary numbers that the user input into decimal numbers   */

process.stdout._write("Enter a binary number laaaan");
process.stdin.on("data", function (inputfromuser){

  let binaryNumber = Number(inputfromuser);

for (let i = 0; i< binaryNumber.toString().length; i++ ){
 let Convert =( 2**i ) /( binaryNumber.toString().charAt(i) ) ;

process.stdout.write(Convert);
}

})