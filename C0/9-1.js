function Stack(){
    this.array = [];
    this.max = 0;
    this.auxMax = 0;
}

Stack.prototype.push = function(val){
    this.array.push(val);
    if(val > this.max){
        this.max = val;
    }
}

Stack.prototype.pop = function(){
    if(this.array[this.array.length-1] == this.max){
        var newMax = this.array[0];
        for(var i=0; i<this.array.length; i++){
            if(this.array[i] > newMax && this.array[i] < this.max){
                newMax = this.array[i];
            }
        }
        this.max = newMax;
    }
    return this.array.pop();
}

Stack.prototype.max = function(){
    return this.max;
}


var myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(4);
myStack.push(3);
console.log("max: " + myStack.max);
console.log("top of the stack to you " + myStack.pop());
console.log("top of the stack to you " + myStack.pop());
console.log("top of the stack to you " + myStack.pop());
console.log("max: " + myStack.max);
myStack.push(5);
console.log("max: " + myStack.max);
myStack.push(6);
console.log("max: " + myStack.max);
console.log("top of the stack to you " + myStack.pop());
console.log("max: " + myStack.max);
myStack.push(8);
console.log("max: " + myStack.max);
myStack.push(12);
console.log("max: " + myStack.max);
console.log("top of the stack to you " + myStack.pop());
console.log("top of the stack to you " + myStack.pop());