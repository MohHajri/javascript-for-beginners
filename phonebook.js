/* 
create a simple phone application
*/
// define constant for fields
const NAME_FIELD = 0;
const NUMBER_FIELD = 1;
// ask the user to enter a person with a phone number
process.stdout.write("please enter name and number separated by space")

// read the user input.
process.stdin.on("data", function(inputFromUser){
let UserInput = inputFromUser.toString().trim().split(" ");

let name = UserInput [NAME_FIELD]
let number = UserInput [NUMBER_FIELD]

// let us create an object literal for person
let person = {
    name: UserInput [NAME_FIELD],
    number: UserInput [NUMBER_FIELD],
 printInfo()
 {
    process.stdout.write("Name:"+ person.name);
    process.stdout.write("Number:" + person.number);
 }

}

person.printInfo();

})
// print out the phonebook.
