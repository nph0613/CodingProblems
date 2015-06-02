function Queue(capacity){
    this.array = [];
    this.array.length = capacity;
    this.start=0;
    this.end=0;
    this.max = 0;
}

Queue.prototype.enqueue = function(val){
    if(this.max == this.array.length){
        console.log("queue is full!");
    } else {
        this.array[this.end] = val;
        this.end = (this.end + 1) % this.array.length;
        this.max += 1;
    }
}

Queue.prototype.dequeue = function(){
    var temp = this.array[this.start];
    this.array[this.start] = undefined;
    this.start = (this.start+1) % this.array.length;
    this.max -= 1;
    return temp;
}

Queue.prototype.print = function(){
    console.log("Queue contains: ");
    for(var i=0; i< this.array.length; i++){
        console.log(this.array[i]);
    }
}

var testMethod = function(){
    var testQueue = new Queue(10);
    testQueue.print();
    testQueue.enqueue(1);
    testQueue.print();
    testQueue.enqueue(2);
    testQueue.print();
    testQueue.enqueue(3);
    testQueue.print();
    testQueue.enqueue(4);
    testQueue.print();
    testQueue.enqueue(5);
    testQueue.print();
    console.log("dequeueing: " + testQueue.dequeue());
    console.log("dequeueing: " + testQueue.dequeue());
    testQueue.print();
}