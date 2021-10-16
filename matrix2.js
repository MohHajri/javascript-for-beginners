// Create a matrix with three rows and two columns

// Initialize the matrix with *

// **

// **

// **



let numberOfRows = 3;

let matrix = new Array();

for(let i = 0; i < numberOfRows; i++) {

    matrix[i] = new Array('*', '*' );

} 



let jumps = [

        ['Mike Powell', 8.95, 8.22],

        ['Bob Beamon', 8.9, 'x'],

        

    ];

    

    

process.stdout.write("\nThe first row, first column value is " + jumps[0][0] + "\n");

jumps.splice(1, 0, ['Carl Lewis', 8.87, 8.24]);

jumps.splice(1, 1);

console.table(jumps);



process.stdout.write("Results\n");

// Outer loop to loop through rows

for(let i = 0; i < jumps.length; i ++) {

    // Inner loop for columns

    for(let j = 0; j < jumps[i].length; j++) {

        process.stdout.write("\t" + jumps[i][j]);

    }

    process.stdout.write("\n");

}



// Create a csv string of matrix content

jumps.forEach((row) => {

    row.forEach((col) => {

        process.stdout.write(col + ", ");

    })



})