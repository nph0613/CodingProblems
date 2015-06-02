function reverseIntOrder(intToReverse){
    var isNegative = false;
    if(intToReverse < 0){
        isNegative = true;
        intToReverse *= -1;
    }
    intToReverse += '';
    var reversedString = '';

    for(var i=intToReverse.length - 1; i > -1 ; i--){
        reversedString = reversedString + intToReverse.charAt(i);

    }

    return isNegative ? -1 * Number(reversedString) : Number(reversedString);
}