process.stdout.write("enter a number: ");
process.stdin.on("data", function (inputfromuser) {

let number = Number (inputfromuser);
 switch (number) {

    case 0:
    process.stdout.write("you are right!");
 
 break;
 default:
    
    process.stdout.write("sorry wrong input ...");
 }

 process.exit();
})