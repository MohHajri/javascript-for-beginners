/* process.stdout.write("Write a text homeboy\n")
process.stdin.on("data", function(inputFromUser){   */


function censorA(MohamedAlhajri){
    let censored = '';
    for (let i = 0; i < MohamedAlhajri.length; i++) {
        if(text.charAt(i).toLowerCase() == 'a') {
            censored += '*';
        } else {
            censored += MohamedAlhajri.charAt(i);
        }
    }
    return censored;
}
     
     