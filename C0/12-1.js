Array.prototype.find1stK = function(k){
    var lower = 0, upper = this.length - 1;
    var mid = 0;
    while(lower <= upper){
        mid = Math.floor((lower + upper) / 2);
        if(this[mid] < k){
            lower = mid;
        } else if (this[mid] > k){
            upper = mid;
        } else {
            var temp = mid;
            while(this[temp] == k){
                temp--;
            }
            return temp + 1;
        }
    }
}


var test = [1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,7,8,9];

console.log("1: " + test.find1stK(1));
console.log("2: " + test.find1stK(2));
console.log("3: " + test.find1stK(3));
console.log("4: " + test.find1stK(4));
console.log("5: " + test.find1stK(5));