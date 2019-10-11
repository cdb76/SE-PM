const express = require('express')
const app = express()
const port = 80

var fs = require('fs');
var util = require('util');
var logFile = fs.createWriteStream('log.log', { flags: 'w' });

my.log = function () {
  logFile.write(util.format.apply(null, arguments) + '\n');
}

app.get('/', (req, res) => {
 my.log(`Connected to Route: /`);
 res.send('Go to /version or /logs');
 my.log(`Responded to Route: /`);
});

app.get("/version", (req, res) => {
 my.log(`Connected to Route: /version`);
 res.send(`This is version 0 of the HotBurger service`);
 my.log(`Responded to Route: /version`);
});

app.get("/logs", (req, res) => {
 my.log(`Connected to Route: /logs`);
 var fs = require('fs');
 var buffer = new Buffer(fs.readFileSync('index.html','utf8'));
 res.send(Buffer.toString());
 my.log(`Responded to Route: /version`);
});

app.listen(port, () => {
 my.log(`Server running on port: ${port}`);
});