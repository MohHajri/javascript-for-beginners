/*  Write code for a function that checks whether a given string is a valid email (NOTE! the validation doesn't need to perfect, it's enough that it fulfills the requirements listed here).

The requirements are:                                                                                                                                                 

String must contain following characters: ".", "@"
There must be at least two characters after the period.    
                                                                                                
The first letter cannot be a "." or a "@".
Hint: String functions you might want to consider using: includes(), charAt(), indexOf(), slice() and property length.     */



process.stdout.write("enter an emmail: \n ");
process.stdin.on("data", function (inputfromuser){

let email =  inputfromuser.toString().trim();

   if (email.charAt(0) === ".")
    {
          process.stdout.write("Email is invalid\n");
          process.exit("\n");                                            
    } 
    if ( email.charAt(0) === "@")
    {
         process.stdout.write("Email is invalid\n");
         process.exit("\n");
    }
    if (email.charAt(email.length - 1 ) === "." )
    {
        process.stdout.write("Email is invalid\n");
        process.exit("\n");
    }
    if (email.charAt(email.length - 2 ) === "." )
    {
        process.stdout.write("Email is invalid\n");
        process.exit("\n");
   }

   if (email.includes("@") === false || email.includes(".") === false)
   {
      process.stdout.write("Email is invalid\n");
      process.exit("\n");
   }
 
  else
   {
      process.stdout.write("Email is ok\n");
   }

});