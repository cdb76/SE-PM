var fs = require('fs');

exports.getTotal = function() {
	var logContents = fs.readFileSync('../logs/log.log', 'utf8').toString().split('\n');
	var total = 0;
	for (i in logContents) {
		var info = logContents[i].split(":");
		
		if(info[0] == "POST") {
			if(info[1] == "Hotdog") {
				//return "TEST";
				total = total + (info[2] * 20);
			}
		}
	}

	return total;
};