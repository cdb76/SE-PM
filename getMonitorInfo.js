var fs = require('fs');

exports.getTotal = function() {
	var logContents = fs.readFileSync('../logs/log.log', 'utf8').toString().split('\n');
	var total = 0;
	for (i in logContents) {
		var info = logContents[i].split(":");
		
		if(info[0] == "POST") {
			if(info[1] == "Hotdog") {
				total = total + (info[2] * 20);
			}
			else if(info[1] == "Hamburger") {
				total = total + (info[2] * 35);
			}
			else if(info[1] == "Soda") {
				total = total + (info[2] * 4);
			}
			else if(info[1] == "Cookie") {
				total = total + (info[2] * 6);
			}
		}
	}

	return total;
};

exports.getTopSeller = function() {
	var logContents = fs.readFileSync('../logs/log.log', 'utf8').toString().split('\n');
	var totalDog = 0;
	var totalBurger = 0;
	var totalSoda = 0;
	var totalCookie = 0;
	for (i in logContents) {
		var info = logContents[i].split(":");
		
		if(info[0] == "POST") {
			if(info[1] == "Hotdog") {
				totalDog = totalDog + info[2];
			}
			else if(info[1] == "Hamburger") {
				totalBurger = totalBurger + info[2];
			}
			else if(info[1] == "Soda") {
				totalSoda = totalSoda + info[2];
			}
			else if(info[1] == "Cookie") {
				totalCookie = totalCookie + info[2];
			}
		}
	}
	var topSeller = totalDog;
	var topSellerName = "Hotdog";
	if(totalBurger > topSeller) {
		topSeller = totalBurger;
		topSellerName = "Hamburger";
	}
	else if(totalSoda > topSeller) {
		topSeller = totalSoda;
		topSellerName = "Soda";
	}
	else if(totalCookie > topSeller) {
		topSeller = totalCookie;
		topSellerName = "Cookie";
	}
	
	return topSellerName;
};