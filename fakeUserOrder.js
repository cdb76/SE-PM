const axios = require('axios')

var purchase = 'http://18.224.200.58';
var count = 0;
while(count < 10){
	axios.post(purchase+'/purchase', {
		item: 'Hotdog',
		quantity: '9'
	});
	sleep(1000);
	axios.post(purchase+'/purchase', {
		item: 'Hamburger',
		quantity: '5'
	});
	sleep(1000);
	axios.post(purchase+'/purchase', {
		item: 'Soda',
		quantity: '8'
	});
	sleep(1000);
	axios.post(purchase+'/purchase', {
		item: 'Cookie',
		quantity: '3'
	});
	sleep(1000);
	count++;
}

function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}