// var Record = required('./record.js');
var _ = require('lodash');
const RecordStore = function(name, city) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}

  RecordStore.prototype.addRecord = function (record) {
    this.inventory.push(record);
  };

  RecordStore.prototype.inventoryList = function(){
    return this.inventory;
  }

  RecordStore.prototype.sellRecord = function(record) {
    this.balance += record.price;
    this.inventory = _.without(this.inventory, record);
  }

  RecordStore.prototype.totalValue = function() {
    var total = 0;
    this.inventory.forEach(function(record) {
      total += record.price;
    })
    return total;
  }

module.exports = RecordStore;
