const Record = function(artist, title, genre, price) {
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
}


Record.prototype.printStringProp = function(record) {

return "The record is ${record.artist} ${record.title}, a ${record.genre} record for ${record.price}"

}

module.exports = Record;
