var BinarySearchTree = function(value){
	var tree = {};

	tree.value = value;
	tree.left = null;
	tree.right = null;

	tree.insert = function(val){

		if(val < this.value){
			if(this.left === null){
				this.left = new BinarySearchTree(val);
			} else {
				this.left.insert(val);
			}
		} else {
			if(this.right === null){
				this.right = new BinarySearchTree(val);
			} else {
				this.right.insert(val);
			}
		}
	};

	tree.contains = function(target){
		var rightChild = this.right;
		var leftChild = this.left;

		var checkChild = function(side, target) {
				return !! side && side.contains(target);
		};

		if(this.value === target) {
			return true;
		}
		return 	checkChild(rightChild, target) || checkChild(leftChild, target);
	};

	tree.depthFirstLog = function(cb){


		var rightChild = this.right;
		var leftChild = this.left;

		var checkChild = function(side, func){
			return !! side && side.depthFirstLog(func);  // logically checks if node present and if it is, runs depthFirstLog recursively
		}
			if(this){
				cb(this.value);
			}
			return checkChild(rightChild, cb) || checkChild(leftChild, cb);

		};


	return tree;
};


