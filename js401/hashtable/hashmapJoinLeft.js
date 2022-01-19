'use strict';

let Hashtable = require('./hashtable');
const util = require('util');

let leftJoin = (HT1, HT2) => {
  let firstArray = [];
  for(let i = 0; i < HT1.map.length; i++){
    // console.log(HT1.map);
    let secondArray = [];
    if (HT1.map[i] !== undefined) {
      // console.log(HT1.map[i])
      let key = (Object.keys(HT1.map[i].head.value)[0]);
      // console.log(HT1.map[i].head.value[key]);
      secondArray.push(key);
      secondArray.push(HT1.map[i].head.value[key]);
      // console.log(HT1.map[i].head.value[key]);
      if (HT2.contains(key)) {
        secondArray.push(HT2.map[i].head.value[key]);
        // console.log(HT2.map[i].head.value[key]);
      } else {
        secondArray.push(null);
      }
      firstArray.push(secondArray);
    }
  }
  // console.log(firstArray);
  return firstArray;
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

let test = leftJoin(ht1, ht2);

console.log(test);

module.exports = leftJoin;
