'use strict';
const util = require('util');
const Graph = require('./graph');

// Argument: (graph, arr of city names)
// return: Bool and cost/ 0 for cost

let businessTrip = () => {

}

let graph = new Graph();

const pandora = graph.addVertex('Pandora');
const arendelle = graph.addVertex('Arendelle');
const metroville = graph.addVertex('Metroville');
const narnia = graph.addVertex('Narnia');
const naboo = graph.addVertex('Naboo');
const monstropolis = graph.addVertex('Monstropolis');

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

console.log(util.inspect(graph, false, null, true));
