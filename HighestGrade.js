// Create a function findHighestGrade(grades) that takes an array as a parameter and returns the highest value in the array.

let grades = [];
process.stdout.write("\n\nPlease enter a grade (zero terminates the program): ");

process.stdin.on("data", function(inputFromUser) {
let userInput = inputFromUser.toString().trim();
    
        function FindHighestGrade(grades)
       {
                 let Highest = grades[0];
                 for (let i = 1; i<grades.length; i++)
                     {
                           if (grades[i]>Highest)
                              {
                                 Highest = grades[i];
                              }
                     }
                 return Highest;
     
       }
if (userInput == 0)
    {
        let Highest = FindHighestGrade(grades);
        process.stdout.write("\nHighest number is " + Highest + "\n");
        process.stdout.write("\n" + grades + "\n");
        process.exit();

    }
else 
   {
       grades.push(userInput)
       process.stdout.write("\n\nPlease enter a grade again (zero terminates the program): ");
   }

});