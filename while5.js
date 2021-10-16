/* counting down from 0 to 10 using a loop */

let i = 0;
let maximum = 10;
while (maximum > i){

process.stdout.write("...."+ maximum.toString()+".....");
process.stdout.write("\n");

maximum--;

}
process.exit();