'use strict';

let Hashtable = require('./hashtable');
const util = require('util');

const leftJoin = (HT1, HT2) => {
  let combinedHT = new Hashtable(1024);
  
  return combinedHT;
}

let ht1 = new Hashtable(20);
ht1.add('diligent', 'employed');
ht1.add('fond', 'enamored');
ht1.add('guide', 'usher');
ht1.add('outfit', 'garb');
ht1.add('wrath', 'anger');
let ht2 = new Hashtable(20);
ht2.add('diligent', 'idle');
ht2.add('fond', 'averse');
ht2.add('guide', 'follow');
ht2.add('flow', 'jam');
ht2.add('wrath', 'delight');

// console.log(JSON.stringify(ht1));

module.exports = leftJoin;
