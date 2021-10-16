process.stdout.write("writew a number homeboy")
process.stdin.on("data", function(number){




if ( Math.sign(number) ===1 )
{
    console.log("positive");
}

else if (Math.sign(number) === -1)
{
    console.log("negative");
}

else {
console.log("zero");
}

})