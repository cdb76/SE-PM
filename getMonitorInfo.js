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
				totalDog = totalDog + parseInt(info[2], 10);
			}
			else if(info[1] == "Hamburger") {
				totalBurger = totalBurger + parseInt(info[2], 10);
			}
			else if(info[1] == "Soda") {
				totalSoda = totalSoda + parseInt(info[2], 10);
			}
			else if(info[1] == "Cookie") {
				totalCookie = totalCookie + parseInt(info[2], 10);
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

exports.getRequestCount = function() {
	var logContents = fs.readFileSync('../logs/log.log', 'utf8').toString().split('\n');
	var requestCount = 0;
	for (i in logContents) {
		var info = logContents[i].split(":");
		
		if(info[0] == "POST" || info[0] == "GET") {
			requestCount++;
		}
	}
	return requestCount;
};

exports.getLastRequestStatus = function() {
	var logContents = fs.readFileSync('../logs/log.log', 'utf8').toString().split('\n');
	
	var requestStatus = logContents[(logContents.length)-3]
	var info = requestStatus.split(":");
	return info[0];
};

exports.getLastRequestTime = function() {
	var logContents = fs.readFileSync('../logs/log.log', 'utf8').toString().split('\n');
	
	var requestStatus = logContents[(logContents.length)-4]
	var info = requestStatus.split(":");
	return info[0];
};