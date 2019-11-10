const express = require('express')
const app = express()
const port = 80

var info = require('./getMonitorInfo');
var fs = require('fs');
var util = require('util');
var logger = fs.createWriteStream('../logs/log.log', { flags: 'a' });

app.get("/gettotal", (req, res) => {
	logger.write(('GET:/gettotal') + '<br/>');
	res.send(`/gettotal ` + info.getTotal());
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

app.get("/logs", (req, res) => {
 var logContents = fs.readFileSync('../logs/log.log', 'utf8');
 logContents = logContents.split('\n').join('<br/>');
 res.send(logContents);
});

app.listen(port, () => {
 logger.write('Server running on port: ' + port + '<br/>');
});