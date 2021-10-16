// nested loops for multi-dimensional objects.
// we can use nested loops to acess all the elements.
// inside multi-dimentional arrays or objects

//this is multi-dimensional array
let twoB = [
     [1,2,3,4,5,6,7],
     [8,10,5,7,3,22,6,42],
     [123,54,12,11,9,15],
];

// nested for loops to print out all multi-dimensional object content
let rows = twoB.length;
for (let i =0; i<rows; i++)
{
    let items = twoB[i].length;
    console.log(i,"      " + items);
    for (let n=0; n<items;n++) {
console.log(twoB[i][n]);
    } 
}

// it is an object containing an array which contains objects
let bigHero = { characters: [
             {name: "Hiro", voice: "Rayan Potter"},
             {name: "Baymax", voice: "Scott Adsit"},
             {name: "Go Go Tamago", voice: "Jamie Chung"},
             {name: "Fred", voice: "T.J. Miller"}
]};

// printig out all object content using nested loop
let chars = bigHero = bigHero["characters"] //bigHero.characters
for (let i = 0; len=chars.length; i < len, i++)
{

for (let prop in chars[i]){
    console.log(prop, chars[i][prop]);
}}


/* 
console.log("\n\n\n")
// another way using normal loop to print out the object contents
let CHAR = bigHero = bigHero["characters"] //bigHero.characters
for (let n = 0; len=CHAR.length; n < len, n++)
{
   console.log(CHAR[n]);
   console.log(CHAR[n]["name"]);
   console.log(CHAR[n]["voice"]);
}  */
