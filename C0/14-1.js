function commonElements(a,b){
    var common = [];
    var i = 0; j = 0;
    while(i < a.length && j < b.length){
        if(a[i]<b[j]){
            i++;
        } else if(a[i] > b[j]){
            j++
        } else {
            common.push(a[i]);
            i++
            j++
        }
    }
    
    return common;
}


var array1 = [2,3,5,7,11];
var array2 = [3,7,15,31];

console.log(commonElements(array1, array2));