const express = require('express')
const http = require('http')
const axios = require('axios')
const app = express()
const port = 80

var fs = require('fs');
var util = require('util');
var logger = fs.createWriteStream('../logs/log.log', { flags: 'a' });
var time = require('./getTime');
var host = 'http://18.224.200.58:8081';

app.use(express.json())

app.get('/', (req, res) => {
 logger.write('GET:/\n');
 res.send('Welcome to the ordering service!');
 logger.write('SUCCESS/\n');
});

app.get("/version", (req, res) => {
 logger.write('GET:/version:' + time.getTime() + '\n');
 res.send(`This is version 1 of the HotBurger service`);
 logger.write('SUCCESS:/version\n');
});

app.get("/getmenu", (req, res) => {
 logger.write('GET:/getmenu:' + time.getTime() + '\n');
 res.send(`Hotdog: $20 <br/> Hamburger: $35 <br/> Soda: $4 <br/> Cookie: $6 <br/>`);
 logger.write('SUCCESS:/getmenu\n');
});

app.post('/purchase', function (req, res) {
	logger.write('POST:' + req.query.item + ':' + req.query.quantity + ':' + time.getTime() + '\n');
	
	return axios.get('http://18.224.200.58:8081/getcount?item='+req.query.item)
	.then((response) => {
		if(parseInt(req.query.quantity) <= parseInt(response.data.quantity)){
			res.send('success');	
			logger.write('SUCCESS:/purchase<item><quantity>\n');
		}
		else{
			res.send('fail');
				logger.write('FAIL:/purchase<item><quantity>\n');
		}
	})
	.catch(error => {
		res.send('error');
		logger.write('FAIL:/purchase<item><quantity>\n');
	});
	
	res.send('error');
	logger.write('FAIL:/purchase<item><quantity>\n');
});

app.listen(port, () => {
 logger.write('Server running on port: ' + port + '\n');
});