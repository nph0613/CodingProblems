var testArray = [1,0,0,1,1,2,2,0,2];

Array.prototype.swap = function(a, b){
    console.log("lt: " + a);
    console.log("eq: " + b);
    var temp= this[a];
    this[a] = this[b];
    this[b] = temp;
    console.log("swapped");
    console.log("lt: " + a);
    console.log("eq: " + b);
}

//doesn't sort it completely, just puts everything less than pivot on one side, and everything equal to or greater than pivot on other side
function countingSort(array, index){
    console.log(array);
    //get value for reference
    var pivot = array[index];
    //indices for less than, equal, greater than, and unknown
    var lt = 0, eq = 0, gt = array.length-1;
    
    console.log("eq: " + eq);
    console.log("gt: " + gt);
    while(eq <= gt){
        if(array[eq] < pivot){
            console.log("<");
            array.swap(lt++, eq++);
            console.log("lt: " + lt);
            console.log("eq: " + eq);
            console.log(array);
        } else if (array[eq] == pivot){
            console.log("=");
            console.log("eq: " + eq);
            ++eq;
            console.log("eq: " + eq);
        } else {
            console.log(">");
            array.swap(eq, gt--);
            console.log(array);
        }
        console.log("eq: " + eq);
        console.log("gt: " + gt);
    }
    return array;
}

countingSort(testArray, 5);