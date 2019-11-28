const axios = require('axios')

var purchase = 'http://18.224.200.58';
var count = 0;
while(count < 10){
	axios.post('http://18.224.200.58/purchase?item=Hotdog&quantity=10');
	sleep(1000);
}

function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}