var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = new Node(value);
    if(this.head === null){
      this.head = newNode;   
      this.tail = newNode;    
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };

  list.removeHead = function(){
    if(this.head !== null){
      var oldHead = this.head;
      this.head = this.head.next;
      return oldHead.value;

    }
  };

  list.contains = function(target, currentNode){
    var currentNode = currentNode || this.head;
   
      if (currentNode.value === target){
        return true;
      }
      else if(currentNode.next === null){
        return false;
      }
      else{
        return this.contains(target, currentNode.next);
      }
  };

  return list;
};

/*
  lookup N
  find N
  append 1
  insert 1
  remove 1
*/

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;


  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 /// addToTail = constant time
 /// removeHead = constant time
 /// contains = n
