/*  Create a program that asks user for number and
calculates the average for them. Numbers will be asked
till the user enters a letter.
  */


let Array_To_Average = [];
process.stdout.write( "\nThe program stops when you enter a letter.\n" ) ;
process.stdout.write("Enter a number: \n");
process.stdin.on("data", function (inputfromuser){
    let input = Number(inputfromuser);
    
     if (isNaN(input) && Array_To_Average.length > 0)
       {
        let NumberSum = 0;
            for (n =0; n < Array_To_Average.length; n++)
            { 
              
              NumberSum += Array_To_Average[n];
            }
        
        if (Array_To_Average.length > 0 )
       {
            let Average = NumberSum / Array_To_Average.length;
            process.stdout.write("\nThe average is: " + Average + " \n\n");
            process.exit();
       }
      }
       else if (input === 0)
       {
             console.log(Array_To_Average);
       }
     
     else {
           Array_To_Average.push(input);
           process.stdout.write("Enter another number: ");
          }

})
