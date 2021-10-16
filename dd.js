const util = require( "util" );
console.log('Please enter a number :');

process.stdin.on('data', function(inputFromUser){
    let enterNumber = Number(inputFromUser);
    let star = " ";
    let i = 1;
    let j = 10;
    
        console.log('Multiplication for number :' + enterNumber +'\n' + star.padStart(32,"*"));
    while(i < j) {
        console.log(util.format("*" + String(star).padStart(10," ") + '%d * %d = %d' + String(star).padEnd(10," ")+ "*"), i, enterNumber, i*enterNumber);

        i++;

    }
    console.log( star.padStart(32,"*"));
    process.exit();
});