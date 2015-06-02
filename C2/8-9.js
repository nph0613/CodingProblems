function LinkedList(){
  this.head = null;
}

LinkedList.prototype.push = function(val){
    var node = {
       value: val,
       next: null
    }
    if(!this.head){
      this.head = node;      
    }
    else{
      current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
  }

var listA = new LinkedList();
var listB = new LinkedList();
var listC = new LinkedList();

function initializeList(){
    listA.push(1);
    listA.push(2);
    listA.push(3);
    listA.push(4);
    listA.push(5);
    listA.push(6);
    listA.push(7);
    listA.push(8);
    listA.push(9);
    listA.push(10);
}

function printList(list){
    var tempNode = list.head;
    while(tempNode.next){
        console.log(tempNode.value);
        tempNode = tempNode.next;
        
    }
    console.log(tempNode.value);
}

function deleteKthFromEnd(linkedList, k){
    var tempK = k;
    var it1 = linkedList.head;
    var it2 = linkedList.head;
    
    while(tempK--){ //will be one ahead of k places in - this is so that the trailing iterator gets the node before kth from the last. we want to delete k and so need to point to just before it.
        it1 = it1.next;
    }
    console.log("it1.value: " + it1.value);
    
    while(it1.next){
        it1 = it1.next;
        it2 = it2.next;
    } //now it2 points to node just before k

    it1 = it2.next.next; //point iterator at the node after k
    
    console.log("Deleting " + k + " from the end");
    console.log("Value of node: " + it2.next.value);
    it2.next = it1;
}

function testMethod(k){
    initializeList();
    console.log("LinkedList contains: ");
    printList(listA);
    deleteKthFromEnd(listA, k);
    printList(listA);
}