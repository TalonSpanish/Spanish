var shuffle = function(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

var Deck = function() {
	this.library = [];
	this.current = [];
}

Deck.prototype.init = function(words) {
	this.library = words;
	return this;
}

Deck.prototype.select = function(start, end) {
	this.current = this.library.slice(start, end);
	return this;
}

Deck.prototype.shuffle = function() {
	this.current = shuffle(this.current);
	return this;
}

Deck.prototype.next = function() {
	return this.current.pop();
}

export default Deck;