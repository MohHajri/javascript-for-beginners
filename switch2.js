// ask the user to input two numbers

process.stdout.write("enter two numbers sparated by space: ");
process.stdin.on("data", function (inputfromuser) {

let number = Number (inputfromuser.toString().split(" ")[0]);
let number2 = Number (inputfromuser.toString().split(" ")[1]);
 switch (number) {

    case 0:
    process.stdout.write("you are right!");
 
 break;
 default:
    
    process.stdout.write("sorry wrong input ...");
 }

 process.exit();
})