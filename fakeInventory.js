const express = require('express')
const app = express()
const port = 80

var fs = require('fs');
app.use(express.json())

let hotdogCount = 10;
let hamburgerCount = 15;
let sodaCount = 25;
let cookieCount = 20;

app.get("/getcount", (req, res) => {
	if(req.query.item === 'Hotdog'){
		if(req.query.quantity <= hotdogCount){
			res.send('Success');
		}
		else{
			res.send('Fail');
		}
	}
	else if(req.query.item === 'Hamburger'){
		if(req.query.quantity <= hamburgerCount){
			res.send('Success');
		}
		else{
			res.send('Fail');
		}
	}
	else if(req.query.item === 'Soda'){
		if(req.query.quantity <= sodaCount){
			res.send('Success');
		}
		else{
			res.send('Fail');
		}
	}
	else if(req.query.item === 'Cookie'){
		if(req.query.quantity <= cookieCount){
			res.send('Success');
		}
		else{
			res.send('Fail');
		}
	}
	else{
		res.send('Invalid');
	}	
});

app.post('/setcount', function (req, res) {
	res.send(req.query.item + ':' + req.query.quantity + '\n');
});

app.listen(port, () => {
});

	res.send(req.query.item + ':' + req.query.quantity + '\n');