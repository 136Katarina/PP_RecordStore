var assert = require('assert');
var RecordStore = require('../record_store');
var Record = require('../record');

describe('RecordStore', function(){

var recordStore;
var record1;
var record2;
var record3;

beforeEach(function() {
  recordStore = new RecordStore("HMV", "Edinburgh");
  record1 = new Record("Manic Street Preachers", "Everything Must Go", "Rock", 10.00);
  record2 = new Record("Bob Dylan", "Blood on the tracks", "folk", 8.99);
  record3 = new Record("David Bowie", "Hunky Dory", "rock", 8.99);

  recordStore.addRecord(record1);
  recordStore.addRecord(record2);
  recordStore.addRecord(record3);

})

it('can add record', function() {
  assert.strictEqual(recordStore.inventory.length, 3);
})

xit('can print out record properties as a string', function() {
  assert.strictEqual(record.printStringProp("The record is David Bowie Hunky Dory, a rock record for 8.99"), record3);
})

it('can list the inventory', function(){
  assert.deepStrictEqual(recordStore.inventoryList(),[record1,record2,record3]);
})

it('can sell record and increase balance', function() {
  recordStore.sellRecord(record1);
  assert.strictEqual(recordStore.inventory.length, 2);
  assert.strictEqual(recordStore.balance, 10.00);
})

it('can create financial report', function() {
  recordStore.sellRecord(record1);
  assert.strictEqual(recordStore.totalValue(), 17.98);
  assert.strictEqual(recordStore.balance, 10.00);
})












})
