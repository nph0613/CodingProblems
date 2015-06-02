//myMethod
function minBatteryRequired(heights){
    var batCap = 0; //batteryCapacityUsage
    var currentH = 0;

    for(var i=0; i <heights.length; i++){
        if(heights[i] > currentH){
            batCap++;
        } else if(heights[i] < currentH){
            batCap--;
        }
        currentH = heights[i];
    }
    console.log("I say capacity is: " + batCap);
    return batCap;
}

function min(a,b){
    if(a<b){
        return a;
    } else {
        return b;
    }
}
function max(a,b){
    if(a>b){
        return a;
    } else {
        return b;
    }
}

//book's method
function findBatteryCapacity(heights){
    var minHeight = 0, capacity = 0;
    for(var i=0; i <heights.length; i++){
        capacity = max(capacity, heights[i] - minHeight);
        minHeight = min(minHeight, heights[i]);
    }
    console.log("Book says capacity is: " + capacity);
    return capacity;
}

var zCoords = [1,2,3,4,3,4,3,2,4,5,6,7,8,9,10,9,7,6,5,4,4,4,4,5,6,7,8,9,10,11];

minBatteryRequired(zCoords);
findBatteryCapacity(zCoords);