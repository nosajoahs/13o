var betterTotal = 0;
var dealerTotal = 0;
var buston10 = 0;


function getRandomArbitrary() {
	var betterSum = 0;
	var dealerSum = 0;
	while (betterSum < 10) {
  		betterSum += Math.floor(Math.random() * 6) + 1;
	}
	if (betterSum > 13) {
		buston10 += 1;
		dealerTotal += 1;
	}
	else {
		while (dealerSum < betterSum) { //betterSum is 11,12,13
	  		dealerSum += Math.floor(Math.random() * 6) + 1;
		}
		if (dealerSum > betterSum && dealerSum <= 13) {
			dealerTotal += 1;
		}
		else if (dealerSum === betterSum) {
			getRandomArbitrary();
		}
		else {
			console.log("dealerSum: " + dealerSum + " betterSum: " + betterSum)
			betterTotal += 1;
		}
	}
}

for (var i = 0; i < 50000; i++) {
console.log(getRandomArbitrary());
console.log("betterTotal:" + betterTotal + " dealerTotal:" + dealerTotal + " buston10:" + buston10)
}





