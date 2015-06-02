function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
    return this;
}

Node.prototype.insert = function(newNode){
    if(newNode.value < this.value){
        if(this.left === null){
            this.left = newNode;
        } else {
            this.left.insert(newNode);    
        }
    } else if (newNode.value > this.value){
        if(this.right === null){
            this.right = newNode;
        } else {
            this.right.insert(newNode);    
        }
    } else {
        return true;
    }
}
    
function BinaryTree(){
    this.head = null;
}

BinaryTree.prototype.add = function(val){
    this.head.insert(val);
}

BinaryTree.prototype.isSymmetric = function(){
    
}

var testMethod = function(){
    
}