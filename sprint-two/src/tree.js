var Tree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = {};  // fix me...this was newTree.children = null
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
		console.log(child);
		if(child.value === target){
			return true;
		}
		else {
			if(child.children){
			console.log("object keys of children = ", Object.keys(child.children).length);
			for(var i=0; i < Object.keys(child.children).length; i++){
				return traverseTrees(child.children[i]); //need to be able to point from currentNode to first child
			}
		}
		return false;
	};

	return traverseTrees(child);
};

treeMethods.getSize = function(){
	
 return Object.keys(this.children).length; //gets the lenth of the object

}

/*
 * Complexity: What is the time complexity of the above functions?
 */
