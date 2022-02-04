'use strict';

// ****** Most of this was from Review ******** //

// *********** INSTRUCTIONS ************* //
/*
Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:

add node
  - Arguments: value
  - Returns: The added node
  - Add a node to the graph

add edge
  - Arguments: 2 nodes to be connected by the edge, weight (optional)
  - Returns: nothing
  - Adds a new edge between two nodes in the graph
  - If specified, assign a weight to the edge
  - Both nodes should already be in the Graph

get nodes
  - Arguments: none
  - Returns all of the nodes in the graph as a collection (set, list, or similar)

get neighbors
  - Arguments: node
  - Returns a collection of edges connected to the given node
  - Include the weight of the connection in the returned collection

size
  - Arguments: none
  - Returns the total number of nodes in the graph


*/


// Vertex = Node
class Vertex {
  constructor(value) {
    this.value = value
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    //this.startNode;
    //this.endNode;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    let vertex = new Vertex(value)
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  // Adds a directional edge
  addEdge(startVertex, endVertex, weight = 0) {
    if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
      throw new Error('__ERROR__ Invalid Vertices');
    }
    const adjancancies = this.adjacencyList.get(startVertex);
    adjancancies.push(new Edge(endVertex, weight));
  }

  getVertices() {
    return this.adjacencyList;
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('__ERROR__ Invalid Vertex', vertex);
    }
    return [...this.adjacencyList.get(vertex)];
  }

  size() {
    return this.adjacencyList.size;
  }

  /*
  
  ALGORITHM BreadthFirst(vertex)
  DECLARE nodes <-- new List()
  DECLARE breadth <-- new Queue()
  DECLARE visited <-- new Set()

  breadth.Enqueue(vertex)
  visited.Add(vertex)

  while (breadth is not empty)
      DECLARE front <-- breadth.Dequeue()
      nodes.Add(front)

      for each child in front.Children
          if(child is not visited)
              visited.Add(child)
              breadth.Enqueue(child)   

  return nodes;
  */


  bfs(startNode) {
    const queue = [];
    const visitedVertices = new Set();

    queue.push(startNode);
    visitedVertices.add(startNode);

    while (queue.length) {
      const currentNode = queue.shift();

      const neighbors = this.getNeighbors(currentNode);

      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;

        if (visitedVertices.has(neighborNode)) {
          continue;
        } else {
          visitedVertices.add(neighborNode)
        }
        queue.push(neighborNode);
      }

    }
    console.log('visitedNodes', visitedNodes);
    return;
  }

  dfs(startNode) {
    /*
      Push the root node into the stack
      Start a while loop while the stack is not empty
      Peek at the top node in the stack
      If the top node has unvisited children, mark the top node as visited, and then Push any unvisited children back into the stack.
      If the top node does not have any unvisited children, Pop that node off the stack
      repeat until the stack is empty.
    */
  }

}

const graph = new Graph();

// adding 'nodes/vertex'
const a = graph.addVertex('A');
const b = graph.addVertex('B');
const c = graph.addVertex('C');

graph.addEdge(a, c);
graph.addEdge(b, a);
graph.addEdge(c, b);

// console.log(graph.getNeighbors(b));
// console.log(graph.getVertices());

module.exports = Graph;
