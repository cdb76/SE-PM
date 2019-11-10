var logger = fs.createWriteStream('../logs/log.log', { flags: 'a' });

exports.getTotal = function() {
	var logContents = fs.readFileSync('../logs/log.log', 'utf8').toString().split("<br/>");
	var total = 0;
	for (i in logContents) {
		var info = logContents[i].split(":");
		
		if(info[0] == "POST") {
			if(info[1] == "Hotdog") {
				total = total + (info[2] * 20);
			}
		}
	}

	return total;
};