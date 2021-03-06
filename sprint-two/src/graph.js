

var Graph = function(){
	this.nodes = {};
};

Graph.prototype.addNode = function(node){
	this.nodes[node] = {};
	this.nodes[node].value = node;
	this.nodes[node].edge = [];
};

Graph.prototype.contains = function(node){
	for(var key in this.nodes){
		if(this.nodes[key].value === node){
			return true;
		}
	}
	return false;
};

Graph.prototype.removeNode = function(node){
	for(var k in this.nodes){
		if(this.contains(node)){
			delete this.nodes[k];
	}
	}
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	if(this.nodes[fromNode][toNode] === true || this.nodes[toNode][fromNode] === true){
		return true;
	}
	return false
};

Graph.prototype.addEdge = function(fromNode, toNode){
	this.nodes[fromNode][toNode] = true;
	this.nodes[toNode][fromNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	if(this.hasEdge(fromNode, toNode)){
		delete this.nodes[fromNode][toNode];
		delete this.nodes[toNode][fromNode];
	}
};

Graph.prototype.forEachNode = function(cb){
	for(var key in this.nodes){
		cb(this.nodes[key].value, key, this.nodes);
	}
};




