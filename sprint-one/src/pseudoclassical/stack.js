var Stack = function() {

  this.counter = 0;
  this.storage = {};

};

Stack.prototype.push = function(value) {
  this.counter++;
  this.storage[this.counter] = value;
};

Stack.prototype.pop = function() {
  if(this.counter > 0) {
    var value = this.storage[this.counter];
    delete this.storage[this.counter];
    this.counter--;
    return value;
  }
};

Stack.prototype.size = function() {
  return this.counter;
};
