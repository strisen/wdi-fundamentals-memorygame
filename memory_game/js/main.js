// console.log("Up and running!");
// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardTwo);

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function () {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You've found a match!");
	} else {
			alert("Sorry, try again.");
	}
};

var flipCard = function (cardId) {

cardsInPlay.push(cards[cardId]);
console.log("User flipped " + cards[cardId]);

if (cardsInPlay.length === 2) {
	checkForMatch();
};
};

flipCard(0);
flipCard(2);