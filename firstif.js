process.stdout.write("enter a number: ");
process.stdin.on("data", function (inputfromuser) {

let number = inputfromuser;
 if (number == 0) {

    process.stdout.write("you are right!");
 }
 else {

    process.stdout.write("sorry wrong input ...");
 }

 process.exit();
})