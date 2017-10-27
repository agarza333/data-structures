var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){

	this._storage[item] = item;

};

setPrototype.contains = function(item){

	for(var k in this._storage){
		if(this._storage[k] === item){
			return true;
		}
	}
	return false;
};

setPrototype.remove = function(item){
	for(var k in this._storage){
		if(this.contains(item)){
			delete this._storage[k];
		}
	}
};

