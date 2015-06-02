function isPalindrome(sentence){
    //examples
    var manPlanCanal = "A man, a plan, a canal, Panama";
    var racecar = "racecar";
    var rayray = "Ray is Ray";
    var helloWorld = "Hello World!";
    
    sentence = sentence.toLowerCase();
    var i = 0;
    var j = sentence.length;
    while (i <= j){
        if( sentence.substring(i,i+1) == " "
            || sentence.substring(i,i+1) == "," ){
            i++;
            continue;
        }
        if( sentence.substring(j-1,j) == " "
            || sentence.substring(j-1,j) == "," ){
            j--;
            continue;
        }
        
        if( sentence.substring(i,i+1) == sentence.substring(j-1,j) ){
            i++;
            j--;
        } else {
            return false;
        }
    }
    return true;
}