const express = require('express')
const app = express()
const port = 80

var fs = require('fs');
var util = require('util');
var logFile = fs.createWriteStream('log.log', { flags: 'w' });

console.log = function () {
  logFile.write(util.format.apply(null, arguments) + '\n');
}

app.get('/', (req, res) => {
 console.log(`Connected to Route: /`);
 res.send('Go to /version or /logs');
 console.log(`Responded to Route: /`);
});

app.get("/version", (req, res) => {
 console.log(`Connected to Route: /version`);
 res.send(`This is version 0 of the HotBurger service`);
 console.log(`Responded to Route: /version`);
});

app.get("/logs", (req, res) => {
 console.log(`Connected to Route: /logs`);
 var fs = require('fs');
 var buffer = new Buffer(fs.readFileSync('index.html','utf8'));
 res.send(Buffer.toString());
 console.log(`Responded to Route: /version`);
});

app.listen(port, () => {
 console.log(`Server running on port: ${port}`);
});