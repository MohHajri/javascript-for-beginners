/* writing numbers from 0 to 20 next to each other without space  */

process.stdout.write("Numbers from 0 to 20 are the following\n");
let i = 0;
while (i < 21)
{
    process.stdout.write (i.toString());
    i++;
}