/* Create a program with two methods:
1. printLetters(): prints letters from a-z
2. printNumbers(): prints numbers from 1-9
Call first printLetters() method, then printNumbers() and after that printLetters() again   */


function PrintLetters(){
let x = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  console.log(x + "\n");

}
PrintLetters();

function PrintNumbers(){

 for (let i =0; i <= 9; i++)
 {
     console.log(i);
 }

}
PrintNumbers();
PrintLetters();