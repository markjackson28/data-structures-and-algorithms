'use strict';

let Hashtable = require('./hashtable');

// let repeatedTerm = (string) => {
//   let stringSplit = string.toLowerCase().split(" ");
//   // hashset for storing words
//   let hashSet = new Hashtable(stringSplit.length);

//   // store the words of string in hashset
//   for (let i = 0; i < stringSplit.length; i++) {
//     // console.log(i)
//     // if word exists return
//     if (hashSet.contains(stringSplit[i])) {
//       return stringSplit[i];
//     }
//     // insert new word to set
//     hashSet.add(stringSplit[i]);
//   }
//   return 'No Repetition';
// }

// From class solution!!
function repeatedWord(string) {
  let newString = string.match(/[^_\W]+/g).join(' '); // .toLowerCase()
  let hm = new Hashtable(1024);
  let arr = newString.split(" ");
  for (el of arr) {
    // go through entire array of strings
    // hash each value
    // check to see if there is a hashed value
    // if same value is returned, return that string
    // otherwise, if undefined or a string is returned then continue on
    let check = hm.get(el);
    if (el === check) {
      console.log('Dupes', el);
      res = el;
      break;
    }
    hm.add(el, el)
  }
  console.log(res)
  return res;
}

let testString = 'Once upon a time, there was a brave princess who...';
let testString2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way - in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...'
let testString3 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn\'t know what I was doing in New York...';
console.log(repeatedWord(testString))
console.log(repeatedWord(testString2));
console.log(repeatedWord(testString3));
