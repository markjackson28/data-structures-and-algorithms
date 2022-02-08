'use strict';
const util = require('util');
const Graph = require('./graph');

// Argument: (graph, arr of city names)
// return: Bool and cost/ 0 for cost

let businessTrip = (graph, arr) => {
  if (!graph) return 'Invalid or missing graph';
  for (let i = 0; i <= arr.length - 1; i++) {
    console.log('graph', graph.getNeighbors(arr[i]));
  }
  // console.log('arr', arr);
  // return graph;
}


// Graph
let graph = new Graph();

// Cites/Verticies
const pandora = graph.addVertex('Pandora');
// console.log(pandora);
const arendelle = graph.addVertex('Arendelle');
const metroville = graph.addVertex('Metroville');
const narnia = graph.addVertex('Narnia');
const naboo = graph.addVertex('Naboo');
const monstropolis = graph.addVertex('Monstropolis');

// Edges/Flights
// Pandora
graph.addEdge(pandora, arendelle, 150);
graph.addEdge(pandora, metroville, 82);
// Arendelle
graph.addEdge(arendelle, metroville, 99);
graph.addEdge(arendelle, monstropolis, 42);
graph.addEdge(arendelle, pandora, 150);
// Metroville
graph.addEdge(metroville, narnia, 37);
graph.addEdge(metroville, naboo, 26);
graph.addEdge(metroville, monstropolis, 105);
graph.addEdge(metroville, pandora, 82);
graph.addEdge(metroville, arendelle, 99);
// Narnia
graph.addEdge(narnia, metroville, 37);
graph.addEdge(narnia, naboo, 250);
// Naboo
graph.addEdge(naboo, narnia, 250);
graph.addEdge(naboo, metroville, 26);
graph.addEdge(naboo, monstropolis, 73);
// Monstropolis
graph.addEdge(monstropolis, arendelle, 42);
graph.addEdge(monstropolis, metroville, 105);
graph.addEdge(monstropolis, naboo, 73);

// console.log('***', graph.getNeighbors(pandora))

console.log(businessTrip(graph, [metroville, pandora]))
// console.log(businessTrip(graph, ['Metroville', 'Pandora']));
// console.log(businessTrip(graph, ['Arendelle', 'Monstropolis', 'Naboo']))
// console.log(businessTrip(graph, ['Naboo', 'Pandora']))
// console.log(businessTrip(graph, ['Narnia', 'Adrendelle', 'Naboo']))
// console.log(util.inspect(graph, false, null, true));
