function bruteForceParity(word){
    var parityNum = 0;
    while(word){
        parityNum ^= word & 1;
        word >>= 1;
    }
    return parityNum;
}

function printBinary(word){
    var binary = '';
    while(word){
        binary =  (word & 1) + binary;
        word >>=1;
    }
    console.log(binary);
}