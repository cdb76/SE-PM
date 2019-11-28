const axios = require('axios')

var purchase = 'http://18.224.200.58';
var count = 0;
while(count < 10){
	
	let info = {item: 'Hotdog', quantity: '5'};
	postData(info);
	count++;
	sleep(5000);
	
	
}

function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

function postData(var info){
	return axios.post('http://18.224.200.58/purchase', info);
}