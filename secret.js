process.stdout.write("Enter a number please: ");
process.stdin.on("data", function (inputfromuser)
{
    let A = Number(inputfromuser);
    let B = A + A;
    let C = A * A;
    let D = A / A;
    let E = A - A;
    let F = A % A;
    let G = A++;
    let H =  A--;

process.stdout.write("\n" + A +" + "+ A +" = " +B + "\n"+A +" * "+A+ " = " +C + "\n" +A +" / "+ A+" = "+ D + "\n" + A+ " - "+A + " = "+ E + "\n"+ A+" % "+A +" = "+ F +
 "\n"+A+ "++"+" = " + G + "\n"+A+"--" +" = "+ H + "\n")
process.exit();


});