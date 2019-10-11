const express = require('express')
const app = express()
const port = 80

var fs = require('fs');
var util = require('util');
var logger = fs.createWriteStream('log.log', { flags: 'w' });

app.get('/', (req, res) => {
 logger.write(('Connected to Route0: / ') + '<br/>');
 res.send('Go to /version or /logs');
 logger.write('Responded to Route: / <br/>');
});

app.get("/version", (req, res) => {
 logger.write('Connected to Route: /version <br/>');
 res.send(`This is version 0 of the HotBurger service`);
 logger.write('Responded to Route: /version <br/>');
});

app.get("/logs", (req, res) => {
 logger.write('Connected to Route: /logs <br/>');
 var logContents = fs.readFileSync('log.log', 'utf8');
 res.send(logContents);
 logger.write('Responded to Route: /version <br/>');
});

app.listen(port, () => {
 logger.write('Server running on port: ' + port + '<br/>');
});