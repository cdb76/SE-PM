const express = require('express')
const http = require('http')
const axios = require('axios')
const app = express()
const port = 80

var fs = require('fs');
var util = require('util');
var logger = fs.createWriteStream('../logs/log.log', { flags: 'a' });
var time = require('./getTime');
var host = '18.224.200.58:8081';

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
	var data = axiosGet();
	res.send(data);
	//return axios.get('http://18.224.200.58:8081/getcount')
	/.then((response) => {
	//	res.send(response.data);
	//})
	//.catch(error => {
	//	res.send('this happensx23');
	//	console.log(error);
	//});
	
	res.send(" i am here");
	
	logger.write('SUCCESS:/purchase<item><quantity>\n');
});

app.listen(port, () => {
 logger.write('Server running on port: ' + port + '\n');
});

function axiosGet() {
	return axios.get('http://18.224.200.58:8081/getcount')
	.then((response) => {
		return response.data;
	})
	.catch(error => {
		res.send('this happensx23');
    console.log(error);
	});
}