const express = require('express')
const app = express()
const port = 80

var fs = require('fs');
var util = require('util');
var logger = fs.createWriteStream('log.txt', { flags: 'w' });

console.log = function () {
  logFile.write(util.format.apply(null, arguments) + '\n');
}

app.get('/', (req, res) => {
 logger.write(`Connected to Route: /`);
 res.send('Go to /version or /logs');
 logger.write(`Responded to Route: /`);
});

app.get("/version", (req, res) => {
 clogger.write(`Connected to Route: /version`);
 res.send(`This is version 0 of the HotBurger service`);
 logger.write(`Responded to Route: /version`);
});

app.get("/logs", (req, res) => {
 logger.write(`Connected to Route: /logs`);
 var logContents = fs.readFileSync('log.log').toString();
 res.send(logContents);
 logger.write(`Responded to Route: /version`);
});

app.listen(port, () => {
 logger.write(`Server running on port: ${port}`);
});