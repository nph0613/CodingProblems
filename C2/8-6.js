function LinkedList(){ //even though lists are sharing same tail, we are checking value rather than reference
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

function initializeLists(){
    listA.push(1);
    listA.push(2);
    listA.push(3);
    listA.push(4);
    listA.push(5);
    
    listB.push(2.5);
    listB.push(3.5);
    listB.head.next.next = listA.head.next.next;
    
    listC.push('A');
    listC.push('B');
    listC.push('C');
    listC.push('D');
    listC.push('E');
}

function printList(list){
    var tempNode = list.head;
    while(tempNode.next){
        console.log(tempNode.value);
        tempNode = tempNode.next;
        
    }
    console.log(tempNode.value);
}

function isSharedList(list1, list2){
    var tail;
    var tempNode = list1.head;
    while(tempNode.next){
        tempNode = tempNode.next;
    }
    tail = tempNode;
    tempNode = list2.head;
    while(tempNode.next){
        tempNode = tempNode.next;
    }
    if(tail.value == tempNode.value){
        return true;
    } else {
        return false;
    }
}

function testMethod(){
    initializeLists();
    console.log("listA contains: ");
    printList(listA);
    console.log("listB contains: ");
    printList(listB);
    console.log("listC contains: ");
    printList(listC);
    
    console.log("listA and listB: " + isSharedList(listA, listB));
    console.log("listB and listC: " + isSharedList(listB, listC));
    console.log("listC and listA: " + isSharedList(listC, listA));
}
