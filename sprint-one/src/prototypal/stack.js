var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var api = Object.create(stackMethods);

  api.counter = 0;
  api.storage = {};

  return api;
};

var stackMethods = {
  push: function(value) {
    this.counter++;
    this.storage[this.counter] = value;
  },

  pop: function() {
    if(this.counter > 0) {
      var value = this.storage[this.counter];
      delete this.storage[this.counter];
      this.counter--;
      return value;
    }
  },

  size: function() {
    return this.counter;
  }

};


