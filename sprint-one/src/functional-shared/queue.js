var Queue = function(){
  var api = {}

  api.counter = 0;
  api.somePos = 1;
  api.storage = {};

  _.extend(api, queueMethods);

  return api;
};

var queueMethods = {

   enqueue: function(value){
      this.counter++;
      this.storage[this.counter] = value;
   },
   dequeue: function(){
      if(this.counter > 0){
        var value = this.storage[this.somePos];
        delete this.storage[this.somePos];
        this.somePos++;
        return value;
      }

   },
   size: function(){
    var total = 0;
    for(var k in this.storage){
      total++;
    }
    return total;

   }
};



