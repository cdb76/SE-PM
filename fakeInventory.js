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
	res.send(req.query.item + ':' + req.query.quantity + '\n');
});

app.post('/setcount', function (req, res) {
	res.send(req.query.item + ':' + req.query.quantity + '\n');
});

app.listen(port, () => {
});