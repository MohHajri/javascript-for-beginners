
// Here we specify a function that will be called later.
// This function takes one parameter (argument)
// The internal statements of the function will be executed only 
// when it is called.

process.stdout.write("HOW MANY LEVELS DO YOU WANT THE PYRAMID TO HAVE?\n");
process.stdin.on("data", function (InputFromUser){
   let Input = Number(InputFromUser);

process.stdout.write("WHAT KIND OF SIGN DO YOU WANT THE PYRAMID TO BE MADE OF? NOTE: enter the sign twice with no space between them!\n");
process.stdin.on("data", function (InputFromUser){
   
   let Input2 = (InputFromUser).toString().trim();


//first function
function print_pyramid( desired_number_of_levels )
{
   if ( desired_number_of_levels > 2 && desired_number_of_levels < 21 )
   {
      for ( let level_counter = 1 ;
                level_counter <= desired_number_of_levels ;
                level_counter ++ )
      {
         process.stdout.write( "\n" ) ;  // New line for new level

         // We'll print space characters so that the top of the pyramid will be
         // close to the character position 40.

         for ( let space_counter = 0 ;
                   space_counter < 40 - level_counter ;
                   space_counter ++ )
         {
            process.stdout.write(" ") ; // print a single space character
         }

         // The body of the pyramid will consist of double characters "=="

         for ( let double_character_counter = 0 ;
                   double_character_counter < level_counter ;
                   double_character_counter ++ )
         {
            process.stdout.write(String(Input2)) ; // print double character
         }
      }
   }
   else
   {
      process.stdout.write( "\n  Number of pyramid levels not acceptable. \n" ) ;
   }

   process.stdout.write( "\n" ) ;
}

// second function
function print_Hollow_pyramid(desired_number_of_levels){

   if ( desired_number_of_levels > 2 && desired_number_of_levels < 21 )
   {
      for(level_counter = 1;
         level_counter <= desired_number_of_levels ;
          level_counter++ )
{
    process.stdout.write("\n");
    for(space_counter = 0 ;
       space_counter < 40 -level_counter;
        space_counter ++)
    {
        process.stdout.write(" ");
        
    }
    process.stdout.write(String(Input2));
        for (double_character_counter = 1;
         double_character_counter<level_counter;
         double_character_counter++)
        {
            process.stdout.write("  ");
            
        }
        process.stdout.write(String(Input2));
        for(space_counter_two=0; 
         space_counter_two < 40-level_counter; 
         space_counter_two++)
        {
            process.stdout.write(" ");
        }
       
}
console.log("\n"+String(Input2).padStart(space_counter_two+1," ") + String(Input2).padStart((double_character_counter*2)+2,String(Input2)));
console.log("\n");
}

else
{
   process.stdout.write( "\n  Number of pyramid levels not acceptable. \n" ) ;
}

process.stdout.write( "\n" ) ;
}


// third function
function print_inverted_pyramid( desired_number_of_levels )
{
   if ( desired_number_of_levels > 2 && desired_number_of_levels < 21 )
   {
      for ( let level_counter = desired_number_of_levels ;
                level_counter >= 1 ;
                level_counter -- )
      {
         process.stdout.write( "\n" ) ;  

         for ( let space_counter = 40-level_counter ;
                   space_counter >0 ;
                   space_counter -- )
         {
            process.stdout.write(" ") ;
         }


         for ( let double_character_counter = level_counter ;
                   double_character_counter >= 1 ;
                   double_character_counter -- )
         {
            process.stdout.write(String(Input2)) ; 
         }
      }
   }
   else
   {
      process.stdout.write( "\n  Number of pyramid levels not acceptable. \n" ) ;
   }

   process.stdout.write( "\n" ) ;
}



console.log("\n\nFirst Pyramid: \n");
print_pyramid( Input ) ;
console.log("\n\nInverted Pyramid: \n");
print_inverted_pyramid(Input);
console.log("\n\nHollow Pyramid: \n");
print_Hollow_pyramid(Input);


})

})