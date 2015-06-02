function stringToInt(num){
    var isNeg = false;
    var stringAsInt = 0;
    var bottomLimit = -1;
    
    if(num.charAt(0) == '-'){
        isNeg = true;
        bottomLimit = 0;
    }
    for(var i=num.length-1; i>bottomLimit; i--){
        power = num.length - 1 - i;
        // console.log("power: " + power);
        stringAsInt += (Math.pow(10, power) * num.charAt(i));
    }
    if(isNeg){
        stringAsInt *= -1;
    }
    console.log("type is: " + typeof stringAsInt);
    return stringAsInt;
}

function intToString(num){
    var temp = num + '';
    console.log("type is: " + typeof temp);
    return temp;
    
}

console.log("string to int: ");
console.log("123   : " + stringToInt('123'));
console.log("0     : " + stringToInt('0'));
console.log("-1    : " + stringToInt('-1'));
console.log("5005  : " + stringToInt('5005'));
console.log("-2590 : " + stringToInt('-2590'));

console.log("int to string: ");
console.log("123   : " + intToString(123));
console.log("0     : " + intToString(0));
console.log("-1    : " + intToString(-1));
console.log("5005  : " + intToString(5005));
console.log("-2590 : " + intToString(-2590));