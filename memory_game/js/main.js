var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[1];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardsInPlay);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match! I'm so proud of you!")
	} else {
		alert("Try again. You'll get it I promise.")
	};
};