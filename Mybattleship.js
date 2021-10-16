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


process.stdout.write("Enter x and y coordinates separated by space : ");

/* setting a dimensional array to store coordinates from user that would hit the ships 
In other words, the corrdinates that are equal to "*"       */
let EnteredNumbers = new Array();

process.stdin.on("data", function(inputFromUser)
{
let InputOne = inputFromUser.toString().split(" ")[0];
let InputTwo = inputFromUser.toString().split(" ")[1];
 
         /* checking if the stored arrays inside our EnteredNumbers array are equal to the six stars "*" (ships) we 
         have inside the Board dimensional array  */
         if (Board[Number(InputOne)][ Number(InputTwo)]  === "*" && EnteredNumbers.length !== 6  )    
                {
                        EnteredNumbers.push([Number(InputOne), Number(InputTwo)]);
                        process.stdout.write("You hit a ship!\nEnter different x and y coordinates separated by space again:\n"); 
                }

               
                              else if (EnteredNumbers.length === 6 )
                                       {
                                           process.stdout.write("All ships are down!\n"); 
                                           console.log("You needed "+ Number( EnteredNumbers.length + MyNumbers.length)+ "\n");
                                           process.exit();
         
                                       }
                                
                                       
            
});                 




/*  setting another new dimensional arrays to store coordinates from user that would not hit the ships
In other words, the coordinates that are not equal to "*"  */
let MyNumbers = new Array();

process.stdin.on("data", function(InputFromUser)
{
let NumberOne = InputFromUser.toString().split(" ")[0];
let NumberTwo = InputFromUser.toString().split(" ")[1];


         let Number_of_Shots_Allowed = MyNumbers.length;
         /* checking if the stored arrays inside our EnteredNumbers array are NOT equal to the six stars "*" (ships) we 
          have inside the Board dimensional array  */
          /*  Setting the number of shots allowed for user to try which are only three shots  */
          if (Board[Number(NumberOne)][ Number(NumberTwo)]  !== "*"  && Number_of_Shots_Allowed !== 3 )
                 {
                         process.stdout.write("Miss!\nEnter different x and y coordinates separated by space again:\n"); 
                         MyNumbers.push([Number(NumberOne), Number(NumberTwo)]);
          
        
                 }
                            else if (Number_of_Shots_Allowed === 3 )
                                    {
                                         process.stdout.write("You used all your shots !\n"); 
                                         console.log("You needed "+ Number( enteredNumbers.length +MyNumbers.length)+ "\n");
                                         process.exit();
         
                  }


});
