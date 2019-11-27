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
	var s = req.query.item;
	res.send('{quantity: "25"}');
});

app.post('/setcount', function (req, res) {
	if(req.query.item === 'Hotdog'){
		hotdogCount = parseInt(req.query.quantity,10);
	}
	else if(req.query.item === 'Hamburger'){
		hamburgerCount = parseInt(req.query.quantity,10);
	}
	else if(req.query.item === 'Soda'){
		sodaCount = parseInt(req.query.quantity,10);
	}
	else if(req.query.item === 'Cookie'){
		cookieCount = parseInt(req.query.quantity,10);
	}
	else{
		res.send('Invalid');
	}	
});

app.listen(port, () => {
});