// using for in loop with objects and arrays
let monsters = {"canada": "sasquatch", "Nepal": "Yeti", "Scotland":"Loch Ness Monster"};
// proint put the object
console.log(monsters + "\n\n");
// let us loop through the object and get what is inside
// variable in object
// we used for in because there is no length prpoerty.
for (let prop in monsters){

// console.log(prop);
//console.log(monsters[porp]);

console.log("In", prop, "we have the", monsters[prop]);

}
let pets = ["Woody", "Roxy", "Bob"];
console.log("\n\n\n")
for (let digit in pets)
{
    console.log("In", digit, "we have the", pets[digit]);

}

console.log("\n\n\n\n");
// let us do another loop.
// Array foreach loop

let countries = ["Finland", "Sweden", "Norway", "Germany", "France", "Italy"];

// convert all the names to lowercase except Finland
//anonymous function

countries.forEach(function(item, index, array){
 if ( item === "Finland"){
     item = item.toUpperCase();
 }
 else {
     item = item.toLowerCase();
 }
console.log(index, item);
});








