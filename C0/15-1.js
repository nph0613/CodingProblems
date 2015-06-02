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

function isBST(root){
    // console.log("current node value: " + root.value);
    if(root.left === null && root.right === null){
        return true;
    } else if ( root.left.value > root.value ){
        return false;
    } else if ( root.right.value < root.value ){
        return false;
    } else {
        return isBST(root.left) && isBST(root.right);
    }
}

var testBST = new BinarySearchTree();
testBST.insert(5);
testBST.insert(3);
testBST.insert(7);
testBST.insert(4);
testBST.insert(2);
testBST.insert(6);
testBST.insert(8);

console.log(isBST(testBST.root));