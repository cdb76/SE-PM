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