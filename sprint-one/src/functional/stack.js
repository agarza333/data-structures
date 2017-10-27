var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  someInstance.push = function(value){
    counter++;
    storage[counter] = value;
  };

  someInstance.pop = function(){
    if(counter > 0){
      var value = storage[counter];
      delete storage[counter];
      counter--;
      return value
    }
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};
