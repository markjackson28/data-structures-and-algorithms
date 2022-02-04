# Graphs
'A Graph consists of a finite set of vertices(or nodes) and set of Edges which connect a pair of nodes.'

## Challenge

Challenge Type: New Implementation

The graph should be represented as an adjacency list, and should include the following methods:

- add node
  - Arguments: value
  - Returns: The added node
  - Add a node to the graph
- add edge
  - Arguments: 2 nodes to be connected by the edge, weight (optional)
  - Returns: nothing
  - Adds a new edge between two nodes in the graph
  - If specified, assign a weight to the edge
  - Both nodes should already be in the Graph
- get nodes
  - Arguments: none
  - Returns all of the nodes in the graph as a collection (set, list, or similar)
- get neighbors
  - Arguments: node
  - Returns a collection of edges connected to the given node
  - Include the weight of the connection in the returned collection
- size
  - Arguments: none
  - Returns the total number of nodes in the graph

Challenge Type: Extending an Implementation

- BFS
  - breadth first
  - Arguments: Node
  - Return: A collection of nodes in the order they were visited.
  - Display the collection

Challenge Type: Code Challenge / Algorithm

- Write a function called business trip
- Arguments: graph, array of city names
- Return: cost or null

Determine whether the trip is possible with direct flights, and how much it would cost.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

## References
[GeeksforGeeks - Graphs](https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/)
[Map MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
