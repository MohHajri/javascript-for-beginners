// an excerise from the multideminsional array lecture

Jumps = [
        
    ["Mike Powell", 8.95, 8.22],
    ["Bob Beamon", 8.9, "x"],
    ["Carl Lewis", 8.87, 8.24],
]; 

// using table to print out the whole thing
console.table(Jumps );
console.log("\n\n\n");


// nested loop to print out the matrix
for (let i = 0; i < Jumps.length; i++) {
for (let j = 0; j < Jumps[i].length; j++) {
process.stdout.write("\t" + Jumps[i][j]);
}
process.stdout.write("\n");
}

// using foreach to print out the matrix contents

process.stdout.write("Contents of a matrix as csv.:\n");
Jumps.forEach((Jump) => {
process.stdout.write("\t" + Jump + ",");
process.stdout.write("\n");
});
process.stdout.write("\n\n\n");
