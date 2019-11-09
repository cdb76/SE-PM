const express = require('express')
const app = express()
const port = 80

var fs = require('fs');
var util = require('util');
var logger = fs.createWriteStream('../logs/log.log', { flags: 'a' });

app.get('/', (req, res) => {
 logger.write(('Connected to Route: / ') + '<br/>');
 res.send('Go to /version or /logs');
 logger.write('Responded to Route: / <br/>');
});

app.get("/version", (req, res) => {
 logger.write('Connected to Route: /version <br/>');
 res.send(`This is version 1 of the HotBurger service`);
 logger.write('Responded to Route: /version <br/>');
});

app.post('/purchase', function (req, res) {
	res.send(req.body.item);
	logger.write(req.body.item + ',' + req.body.quantity);
});

app.get("/logs", (req, res) => {
 var logContents = fs.readFileSync('../logs/log.log', 'utf8');
 res.send(logContents);
});

app.listen(port, () => {
 logger.write('Server running on port: ' + port + '<br/>');
});