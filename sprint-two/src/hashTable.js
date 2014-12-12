var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};


HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var newTuple = new Tuple(k,v);
  var valCheck = this._storage.get(i);
  if(!!valCheck){
    valCheck.push(newTuple);
    //console.log(valCheck);
  }
  else{
  valCheck = [newTuple];
  }
  this._storage.set(i, valCheck);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var value = this._storage.get(i);
  console.log(value);
  if(value === undefined){
    return false;
  }
  if(value.length === 1){
    return value[0][1];
  }
  for(var i=0; i<value.length; i++){
    if(value[i][0] === k){
      return value[i][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var value = this._storage.get(i);
  if(value.length === 1){
    value[0][1] = null;
  }
  //console.log(value);
  this._storage.set(i,value);

};


var Tuple = function(k, v){

  return [k,v];
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
