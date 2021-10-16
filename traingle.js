/* Creating a program that prints a triangle. Program asks the
user for the height of the triangle and then prints out a
triangle.  */


process.stdout.write("please enter the size of the traingle: \n")
process.stdin.on("data", function(inputfromuser){
Size_Of_Traingle = Number (inputfromuser)
 
    for (let i = 0; i < Size_Of_Traingle; i++)    
    {
          for ( let j = 0; j <= i; j++)      
          {
          process.stdout.write("*".toString());
          }
    process.stdout.write("\n");
    }




})