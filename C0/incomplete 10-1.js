function BinarySearchTree(){
    this.root = null;
}

BinarySearchTree.prototype.insert = function(val){
    var node = {
        value : val,
        left : null,
        right : null
    };
    
    if(this.root === null){
        console.log("root: " + node.value);
        this.root = node;
    } else {
        console.log("node: " + node.value)
        var temp = this.root;
        var setNode = false;
        while (!setNode){
            if(node.value < temp.value){
                if (temp.left === null){
                    temp.left = node;
                    setNode = true;
                } else {
                    temp = temp.left;    
                }
            } else { //node value being inserted greater than current node
                if (temp.right === null){
                    temp.right = node;
                    setNode = true;
                } else {
                    temp = temp.right;    
                }
            }
        }
    }
}

BinarySearchTree.prototype.isBalanced = function(root){
    
    
    return true;
}


var bst = new BinarySearchTree();
bst.insert(2);
bst.insert(1);
bst.insert(3);
    