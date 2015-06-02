function plusOne(array){
    for(var i=array.length-1; i>-1; i--){
        array[i] += 1;
        if(array[i] > 9){
            array[i] = 0;
        } else {
            break;
        }
        if(i===0 && array[i] === 0){
            array = [1].concat(array);
        }
    }
    return array;
}