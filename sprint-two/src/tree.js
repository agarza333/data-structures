var Tree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = {};  
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
	var newTree = Tree(value);
	this.children[this.getSize()] = newTree;
};


treeMethods.contains = function(target){
	var child = this;
	var traverseTrees = function(child){
		if(child.value === target){
			return true;
		}
		else {
			if(child.children){
			for(var i=0; i < Object.keys(child.children).length; i++){
				if(traverseTrees(child.children[i])){
					return true; 
				}
			}
		}
	}
		return false;
	};

	return traverseTrees(child);
};

treeMethods.getSize = function(){
	
 return Object.keys(this.children).length; 

};

/*
 * Complexity: What is the time complexity of the above functions?
 find N
 insert 1
 remove 1
 */
