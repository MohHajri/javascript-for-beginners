/* Create a method that prints out Lorem ipsum
sentence (”Lorem Ipsum dolor sit amet, consectetur
adipiscing elit. ”) ten times. Call this method.  */

function RepeatedPrint(sentence, times){
    let result = sentence.repeat(times);
    console.log(result);
    
}
RepeatedPrint("Lorem Ipsum dolor sit amet, consectetur adipiscing elit\n", 10);
