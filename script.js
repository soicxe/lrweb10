let name;
let countUser = 0;
let countGame = 0;
let cards = ["*", "/", "+", "-", "%"];
let cardsTemp1 = [];
let cardsTemp2 = [];
let cardsTemp3 = [];
function isEmpty(str) {
	if ((str == undefined ? '' : str.trim() == '') || str === null) {
		return true;
	}
	return false;
}
function enterName() {
	do {
		name = prompt("Enter your name:");
		console.log(name);
	} while (isEmpty(name));
	document.getElementById("pp").textContent = "Player " + name;
}
function randCard() {
	for (var j = 1; j <= 3; j++) {
		let card1 = Math.floor(Math.random() * cardsTemp1.length);
		let card2 = Math.floor(Math.random() * cardsTemp2.length);
		let card3 = Math.floor(Math.random() * cardsTemp3.length);
		if ((cardsTemp1[card1] == cardsTemp2[card2]) && cardsTemp2[card2] == cardsTemp3[card3]) countUser++;
		document.getElementById("row" + j + "-1").value = cardsTemp1[card1];
		cardsTemp1.splice(card1, 1);
		document.getElementById("row" + j + "-2").value = cardsTemp2[card2];
		cardsTemp2.splice(card2, 1);
		document.getElementById("row" + j + "-3").value = cardsTemp3[card3];
		cardsTemp3.splice(card3, 1);
		console.log(cardsTemp1);
		console.log(cardsTemp2);
		console.log(cardsTemp3);
	}
	cardsTemp1.length = 0;
	cardsTemp2.length = 0;
	cardsTemp3.length = 0;
}
function randNum() {
	cardsTemp1.push.apply(cardsTemp1, cards);
	cardsTemp2.push.apply(cardsTemp2, cards);
	cardsTemp3.push.apply(cardsTemp3, cards);
	if (countGame == 0) document.getElementById("newGame").textContent = "Try Again";
	if (countGame > 3) endGame();
	randCard();
	document.getElementById("score").textContent = "Score " + countUser + "/3";
	document.getElementById("attempts").textContent = "Number of attempts: " + ++countGame + "/3";
	if (countGame == 3) {
		//alert("The end of game. To see the result press 'OK'");
		endGame();
	}
}
function endGame() {
	countGame = 0;
	countUser = 0;
	document.getElementById("newGame").textContent = "New Game";
}
window.onload = enterName();