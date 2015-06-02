function reverseWordOrder(sentence){ //doesn't work with commas
    //example: Alice likes Bob becomes Bob likes Alice
    var reverseSentence = "";
    var tempArray = sentence.split(" ");
    for(var i=tempArray.length-1;i>-1; i--){
        reverseSentence += tempArray[i];
        if(i != 0){
            reverseSentence += " ";
        }
    }
    return reverseSentence
}