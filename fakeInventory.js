const express = require('express')
const app = express()
const port = 80

var fs = require('fs');
app.use(express.json())

let hotdogCount = "10";
let hamburgerCount = "15";
let sodaCount = "25";
let cookieCount = "20";

app.get("/getcount", (req, res) => {
	//new
	if(req.query.item == "Hotdog"){
		res.send('{"quantity": "10"}');
	}
	else if(req.query.item == "Hamburger"){
		res.send('{"quantity": "15"}');
	}
	else if(req.query.item == "Soda"){
		res.send('{"quantity": "25"}');
	}
	else if(req.query.item == "Cookie"){
		res.send('{"quantity": "20"}');
	}
	else{
		res.send('{"quantity": "-1"}');
	}
	
	//old
	//var s = req.query.item;
	//res.send('{"quantity": "25"}');
});

app.post('/setcount', function (req, res) {
	if(req.query.item == 'Hotdog'){
		hotdogCount = req.query.quantity;
	}
	else if(req.query.item == 'Hamburger'){
		hamburgerCount = req.query.quantity;
	}
	else if(req.query.item == 'Soda'){
		sodaCount = req.query.quantity;
	}
	else if(req.query.item == 'Cookie'){
		cookieCount = req.query.quantity,10;
	}
	else{
		res.send('Invalid');
	}	
});

app.listen(port, () => {
});