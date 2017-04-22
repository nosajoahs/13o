var betterTotal = 0;
var dealerTotal = 0;

function getRandomArbitrary() {
	var betterSum = 0;
	var dealerSum = 0;
	while (betterSum <= 10) {
  		betterSum += Math.floor(Math.random() * 6) + 1;
	}
	if (betterSum > 13) {
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
			betterTotal += 1;
		}
	}
}

for (var i = 0; i < 100000; i++) {
getRandomArbitrary();
if (i === 99999) console.log((betterTotal / 1000) + "%");
}
