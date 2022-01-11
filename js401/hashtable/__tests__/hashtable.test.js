'use strict';

const Hashtable = require('../hashtable');
const util = require('util');
const exp = require('constants');


describe('Hashtable', () => {

  it('Can create a hashtable', () => {
    let myTable = new Hashtable(10);
    expect(myTable).toBeDefined();
  });

  it('Can add a key and value pair', () => {
    let myTable = new Hashtable(10);
    myTable.add('Octane', 'Speed runner');
    let test = myTable.contains('Octane');
    expect(test).toBeTruthy();
  });

  it('Can get a key and value', () => {
    let myTable = new Hashtable(10);
    myTable.add('Octane', 'Speed runner');
    let test = myTable.get('Octane');
    expect(test.head.value).toEqual({"Octane": "Speed runner",});
    let failTest = myTable.get('Oct');
    expect(failTest).toEqual('Key does not exist')
  });

  it('Can return true or false is key is in hashtable', () => {
    let myTable = new Hashtable(10);
    myTable.add('Octane', 'Speed runner');
    let test = myTable.contains('Octane');
    expect(test).toBeTruthy();
    let failTest = myTable.contains('Oct');
    expect(failTest).toBeFalsy()
  });

  it('Can hash a key', () => {
    let myTable = new Hashtable(10);
    let hashTest = myTable.hash('Octane', 'Speed Runner');
    expect(hashTest).toBeDefined();
    expect(hashTest).toBe(8);
  });

});


