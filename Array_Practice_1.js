// practice for arrays!

let integerArray = [5, 7, 32, 31, 8];
let doubleArray = [12.4, -13.55, 67.44];
let stringArray= ["Helsinki", "Lissabon", "New York", "Shanghai"];

process.stdout.write("the value from the index number 3 is " + stringArray[2] + "\n");
process.stdout.write("the foruth item in the integer array is " + integerArray[3].toString() + "\n");
process.stdout.write("in the double array there are " +(doubleArray.length.toString() + "\n")
process.stdout.write("\n");

for(let i =0; i < integerArray.length-1; i++ ){

    process.stdout.write(integerArray[i].toString());
    process.stdout.write("\n");
}
process.stdout.write("\n");
for ( let x = doubleArray.length-1; x>= 0; x--){

    process.stdout.write("\n" + doubleArray[x].toString());
    
    }
    process.stdout.write("\n");

    stringArray.length = 0;
for (m =0; m < stringArray.length-1; m++){
    process.stdout.write(stringArray[m].toString() + "\n");
}
