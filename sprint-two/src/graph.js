

// Instantiate a new graph
var Graph = function () {
  this.allNodes = {};
};

let datGraphDoe = new Graph();

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this.allNodes[node] = { 'value': node, 'edges': [] };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  let contain = false;
  for (let key in this.allNodes) {
    if (this.allNodes[key].value === node) {
      contain = true;
      break;
    }
  }
  return contain;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  for (let key in this.allNodes) {
    if (this.allNodes[key].value === node) {
      //REMOVE EDGES TOO!
      for (let i = 0; i < this.allNodes[key].edges.length; i++) {
        this.removeEdge(this.allNodes[key].value, this.allNodes[key].edges[i].value);
      }
      delete this.allNodes[key];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  let bool = false;
  for (let edge of this.allNodes[fromNode].edges) {
    if (edge.value === toNode) {
      bool = true;
    }
  }
  return bool;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  this.allNodes[fromNode].edges.push(this.allNodes[toNode]);
  this.allNodes[toNode].edges.push(this.allNodes[fromNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  let fromNodeEdges = this.allNodes[fromNode].edges;
  let toNodeEdges = this.allNodes[toNode].edges;
  for (let i = 0; i < fromNodeEdges.length; i++) {
    if (fromNodeEdges[i].value === toNode) {
      fromNodeEdges.splice(i, 1);
      break;
    }
  }
  for (let i = 0; i < toNodeEdges.length; i++) {
    if (toNodeEdges[i].value === fromNode) {
      toNodeEdges.splice(i, 1);
    }
    break;
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  for (let key in this.allNodes) {
    cb(this.allNodes[key].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode is a constant complexity
 * contains is linear complexity, check all the nodes
 * removeNode is O(n^3), iterate to find the node, iterate over all the edges, removeEdge also iterates over all edges
 * hasEdge is linear complexity, check all the nodes
 * addEdge is constant complexity
 * removeEdge is linear complexity, check all the edges
 * forEachNode is linear complexity, does something for each node
 */