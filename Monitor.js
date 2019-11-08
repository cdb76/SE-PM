const express = require('express')
const app = express()
const port = 8080

var fs = require('fs');
var util = require('util');
var logger = fs.createWriteStream('../logs/log.log', { flags: 'a' });

app.get("/gettotal", (req, res) => {
	res.send(`/gettotal`);
});
app.get("/gettopseller", (req, res) => {
	res.send(`/gettopseller`);
});
app.get("/getrequestcount", (req, res) => {
	res.send(`/getrequestcount`);
});
app.get("/getrequeststatus", (req, res) => {
	res.send(`/getrequeststatus`);
});
app.get("/getrequesttime", (req, res) => {
	res.send(`/getrequesttime`);
});

app.listen(port, () => {
 logger.write('Server running on port: ' + port + '<br/>');
});