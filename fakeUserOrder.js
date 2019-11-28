const axios = require('axios')

var purchase = 'http://18.224.200.58/purchase';
const headers = {
  'Content-Type': 'application/json',
}
	var data = {
		'item': 'Hotdog',
		'quantity': '10'
	}
var count = 0;
while(count < 10){

	axios.post(purchase, data, {
		headers: headers
	});
	sleep(1000);
}

function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}