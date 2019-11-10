const express = require('express')
const app = express()
const port = 80

var fs = require('fs');
var util = require('util');
var logger = fs.createWriteStream('../logs/log.log', { flags: 'a' });

app.use(express.json())

app.get('/', (req, res) => {
 logger.write('GET:/\n');
 res.send('Go to /version or /logs');
 logger.write('SUCCESS/\n');
});

app.get("/version", (req, res) => {
 logger.write('GET:/version\n');
 res.send(`This is version 1 of the HotBurger service`);
 logger.write('SUCCESS:/version\n');
});

app.post('/purchase', function (req, res) {
	logger.write('POST:' + req.query.item + ':' + req.query.quantity + '\n');
	res.send(req.query.item);
	logger.write('SUCCESS:/purchase<item><quantity>\n');
});

app.listen(port, () => {
 logger.write('Server running on port: ' + port + '\n');
});