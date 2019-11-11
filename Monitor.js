const express = require('express')
const app = express()
const port = 80

var info = require('./getMonitorInfo');
var util = require('util');

app.get("/gettotal", (req, res) => {
	res.send(`Profits: $` + info.getTotal());
});
app.get("/gettopseller", (req, res) => {
	res.send(`Top Seller: ` + info.getTopSeller());
});
app.get("/getrequestcount", (req, res) => {
	res.send(`Total number of requests: ` + info.getRequestCount());
});
app.get("/getlastrequeststatus", (req, res) => {
	res.send(`Last request: ` + info.getLastRequestStatus());
});
app.get("/getlastrequesttime", (req, res) => {
	res.send(`Last request occured: ` + info.getLastRequestTime());
});

app.listen(port, () => {
});