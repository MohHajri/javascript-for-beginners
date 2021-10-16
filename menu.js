process.stdout.write("Enter a number \n");
process.stdin.on("data", function(inputfromuser){

let input = Number(inputfromuser);
let today = new Date();
let date = today.getFullYear() + " - " + (today.getMonth()+1) + " - " + today.getDate();


switch(input){

    case 1:
        process.stdout.write("Hello world\n");
       process.exit();

    case 2:
        process.stdout.write(today + " ");
        process.exit();
    
}
})
