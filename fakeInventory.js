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
		res.send('10');
	}
	else if(req.query.item === 'Hamburger'){
		res.send('15');
	}
	else if(req.query.item === 'Soda'){
		res.send('25');
	}
	else if(req.query.item === 'Cookie'){
		res.send('20');
	}
	else{
		res.send('Invalid');
	}	
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