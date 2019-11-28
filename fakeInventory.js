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
		res.send('{"quantity": '+hotdogCount+'}');
	}
	else if(req.query.item == "Hamburger"){
		res.send('{"quantity": '+hamburgerCount+'}');
	}
	else if(req.query.item == "Soda"){
		res.send('{"quantity": '+sodaCount+'}');
	}
	else if(req.query.item == "Cookie"){
		res.send('{"quantity": '+cookieCount+'}');
	}
	else{
		res.send('{"quantity": "-1"}');
	}

});

app.post('/setcount', function (req, res) {
	if(req.query.item == 'Hotdog'){
		hotdogCount = req.query.quantity;
		res.send('SUCCESS');
	}
	else if(req.query.item == 'Hamburger'){
		hamburgerCount = req.query.quantity;
		res.send('SUCCESS');
	}
	else if(req.query.item == 'Soda'){
		sodaCount = req.query.quantity;
		res.send('SUCCESS');
	}
	else if(req.query.item == 'Cookie'){
		cookieCount = req.query.quantity;
		res.send('SUCCESS');
	}
	else{
		res.send('Invalid');
	}
});

app.listen(port, () => {
});