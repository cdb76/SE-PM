const axios = require('axios')

var purchase = 'http://18.224.200.58';
while(true){
	axios.post(purchase+'/purchase', {
		item: 'Hotdog'
		quantity: '15'
	});
	sleep(1000);
	axios.post(purchase+'/purchase', {
		item: 'Hamburger'
		quantity: '15'
	});
	sleep(1000);
	axios.post(purchase+'/purchase', {
		item: 'Soda'
		quantity: '15'
	});
	sleep(1000);
	axios.post(purchase+'/purchase', {
		item: 'Cookie'
		quantity: '15'
	});
	sleep(1000);
}

function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}