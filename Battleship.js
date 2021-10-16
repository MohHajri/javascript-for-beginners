/* Create a 5x5 Battleship game using a multidimensional array. Use asterisks to mark the ships. Ask the user
for coordinates to shoot and give feedback to the user whether they hit a ship or not. Keep asking for as
long as there are ships left. Keep count of how many shots the player needed  */

// initialize everything space
// set the ships (add asterisks to the indexes)
// ask the user to enter coordinates
// read the input
//check coordinates
// as asterik -> found 
// otherwise ->  miss


let Board = new Array();
for(let i = 0; i < 5; i++) {
Board[i] = new Array(" ", " ", " ", " ", " ",  " " ); }
//first ship
Board[0][1] = "*";
Board[1][1] = "*";
Board[2][1] = "*";
// second ship
Board[4][2] = "*";
Board[4][3] = "*";
Board[4][4] = "*";

// console.table(Board); //we are not gonna print this because we do not want the user to see the ships
// ask the user to enter cordinates 
 
/*

process.stdout.write("Enter x and y coordinates separated by space again: ");
let enteredNumbers = new Array();
process.stdin.on("data", function(inputFromUser){
let InputOne = inputFromUser.toString().split(" ")[0];
let InputTwo = inputFromUser.toString().split(" ")[1];
 
  
  if (Board[Number(InputOne)][ Number(InputTwo)]  === "*" && enteredNumbers.length !== 6 )
  {
   process.stdout.write("You hit a ship!\nEnter x and y coordinates separated by space again:\n")
   enteredNumbers.push([Number(InputOne), Number(InputTwo)]);
   
  }
  


    else if (enteredNumbers.length === 6 )
    {
        process.stdout.write("You used all your shots!\n"); 
        process.exit();
         
    }

    })                  


    let MyNumbers = new Array();
    process.stdin.on("data", function(InputFromUser){
    let NumberOne = InputFromUser.toString().split(" ")[0];
    let NumberTwo = InputFromUser.toString().split(" ")[1];


    let Number_of_Shots_Allowed = MyNumbers.length;
     if (Board[Number(NumberOne)][ Number(NumberTwo)]  !== "*"  && Number_of_Shots_Allowed !== 3 )
    {
          process.stdout.write("Miss!\nEnter x and y coordinates separated by space again:\n"); 
         
          MyNumbers.push([Number(NumberOne), Number(NumberTwo)]);
          
        
    }
    else if (Number_of_Shots_Allowed === 3 )
    {
        process.stdout.write("All ships are sunk!\n"); 
        process.exit();
         
    }


    })


    */
console.log(Board);

