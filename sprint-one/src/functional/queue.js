var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var somePos = 1;
  // Implement the methods below

  someInstance.enqueue = function(value){
    counter++;
    storage[counter] = value;
  };

  someInstance.dequeue = function(){
    if(counter > 0) {
      var value = storage[somePos];
      delete storage[somePos];
      somePos++;
      return value;
    }
  };

  someInstance.size = function(){
    var total = 0;
    for(var k in storage) {
      total++;
    }
    return total;
  };

  return someInstance;
};
