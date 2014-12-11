var Queue = function() {


  this.counter = 0;
  this.storage = {};
  this.somePos = 1;
};

Queue.prototype.enqueue = function(value){
  this.counter++;
  this.storage[this.counter] = value;
};

Queue.prototype.dequeue = function(){
  if(this.counter > 0){
    var value = this.storage[this.somePos];
    delete this.storage[this.somePos];
    this.somePos++;
    return value;
  }
};

Queue.prototype.size = function(){
  var total = 0;
  for(var key in this.storage){
    total++;
  }
  return total;
};

