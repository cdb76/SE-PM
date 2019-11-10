const express = require('express')
const app = express()
const port = 80

var info = require('./getMonitorInfo');
var fs = require('fs');
var util = require('util');
var logger = fs.createWriteStream('../logs/log.log', { flags: 'a' });

app.get("/gettotal", (req, res) => {
	logger.write('GET:/gettotal\n');
	res.send(`/gettotal ` + info.getTotal());
	logger.write('SUCCESS:/gettotal\n');
});
app.get("/gettopseller", (req, res) => {
	logger.write('GET:/gettopseller\n');
	res.send(`/gettopseller`);
	logger.write('SUCCESS:/gettopseller\n');
});
app.get("/getrequestcount", (req, res) => {
	logger.write('GET:/getrequestcount\n');
	res.send(`/getrequestcount`);
	logger.write('SUCCESS:/getrequestcount\n');
});
app.get("/getrequeststatus", (req, res) => {
	logger.write('GET:/getrequeststatus\n');
	res.send(`/getrequeststatus`);
	logger.write('SUCCESS:/getrequeststatus\n');
});
app.get("/getrequesttime", (req, res) => {
	logger.write('GET:/getrequesttime\n');
	res.send(`/getrequesttime`);
	logger.write('SUCCESS:/getrequesttime\n');
});

app.get("/logs", (req, res) => {
 var logContents = fs.readFileSync('../logs/log.log', 'utf8');
 logContents = logContents.split('\n').join('<br/>');
 res.send(logContents);
});

app.listen(port, () => {
 logger.write('Server running on port: ' + port + '<br/>');
});