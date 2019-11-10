const express = require('express')
const app = express()
const port = 80

var fs = require('fs');
var util = require('util');
var logger = fs.createWriteStream('../logs/log.log', { flags: 'a' });

app.get("/gettotal", (req, res) => {
	logger.write(('GET:/gettotal') + '<br/>');
	res.send(`/gettotal`);'
	logger.write(('GET:SUCCESS:/gettotal') + '<br/>');
});
app.get("/gettopseller", (req, res) => {
	logger.write(('GET:/gettopseller') + '<br/>');
	res.send(`/gettopseller`);
	logger.write(('GET:SUCCESS:/gettopseller') + '<br/>');
});
app.get("/getrequestcount", (req, res) => {
	logger.write(('GET:/getrequestcount') + '<br/>');
	res.send(`/getrequestcount`);
	logger.write(('GET:SUCCESS:/getrequestcount') + '<br/>');
});
app.get("/getrequeststatus", (req, res) => {
	logger.write(('GET:/getrequeststatus') + '<br/>');
	res.send(`/getrequeststatus`);
	logger.write(('GET:SUCCESS:/getrequeststatus') + '<br/>');
});
app.get("/getrequesttime", (req, res) => {
	logger.write(('GET:/getrequesttime') + '<br/>');
	res.send(`/getrequesttime`);
	logger.write(('SUCCESS:/getrequesttime') + '<br/>');
});

function parseLog() {
	var hotdogSale;
	var hamburgerSale;
	var sodaSale;
	var cookieSale;
	var requestCount;
	var requestStatus;
	var requestTime;
	
	var logContents = fs.readFileSync('../logs/log.log', 'utf8').toString().split("<br/>");
	
	for(i in logContents) {
		var info = logContents[i].split(":");
		if("POST" == info[0]) {
			if("Hotdog" == info[1]) {
				hotdogSale = hotdogSale + info[2];
			}
			else if("Hamburger" == info[1]) {
				hamburgerSale = hamburgerSale + info[2];
			}
			else if("Soda" == info[1]) {
				sodaSale = sodaSale + info[2];
			}
			else if("Cookie" == info[1]) {
				cookieSale = cookieSale + info[2];
			}
			requestCount++;
		}
		else if ("GET" == info[0]) {
			requestCount++;
		}
		else if ("SUCCESS" == info[1]) {
				requestStatus = logContents[i];
		}
	}
}

app.listen(port, () => {
 logger.write('Server running on port: ' + port + '<br/>');
});