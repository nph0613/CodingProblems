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
    } else {
        current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = node;
    }

}

LinkedList.prototype.initializeList = function(bool, array){
    if(bool){
        this.head = null;
    }
    for(var i=0;i<array.length; i++){
        this.push(array[i])
    }
}

function printList(list){
    var tempNode = list.head;
    while(tempNode.next){
        console.log(tempNode.value);
        tempNode = tempNode.next;
        
    }
    console.log(tempNode.value);
}

function mergeLists(list1, list2){
    var mergedList = new LinkedList();
    var temp1 = list1.head;
    var temp2 = list2.head;
    while(temp1 !== null || temp2 !== null){
        if(temp1 === null){
            mergedList.push(temp2.value);
            temp2 = temp2.next;
        } else if(temp2 === null){
            mergedList.push(temp1.value);
            temp1 = temp1.next;
        } else{
            if(temp1.value < temp2.value){
                mergedList.push(temp1.value);
                temp1 = temp1.next;
            } else {
                mergedList.push(temp2.value);
                temp2 = temp2.next;
            }
        }
    }
    return mergedList
}

var listA = new LinkedList();
var listB = new LinkedList();
var listC = new LinkedList();

listA.initializeList(true, [1,3,5,7,9]);
listB.initializeList(true, [0,2,4,6,8]);
console.log("listA contains: ");
printList(listA);
console.log("listB contains: ");
printList(listB);
var mergedList = mergeLists(listA, listB);
console.log("mergedList contains: ");
printList(mergedList);


listA.initializeList(true, [1,2,3,4,5]);
listB.initializeList(true, [6,7,8,9,10]);
console.log("listA contains: ");
printList(listA);
console.log("listB contains: ");
printList(listB);
var mergedList = mergeLists(listA, listB);
console.log("mergedList contains: ");
printList(mergedList);