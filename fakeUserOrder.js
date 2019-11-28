const axios = require('axios')

var purchase = 'http://18.224.200.58'
var count = 0;
while(count < 10){
	axios.post(purchase+'/purchase?item=Hotdog&quantity=12', {
		item: 'Hotdog'
		quantity: '15'
	});
	
	axios.post(purchase+'/purchase?item=Hotdog&quantity=12', {
		item: 'Hamburger'
		quantity: '15'
	});
	
	axios.post(purchase+'/purchase?item=Hotdog&quantity=12', {
		item: 'Soda'
		quantity: '15'
	});
	
	axios.post(purchase+'/purchase?item=Hotdog&quantity=12', {
		item: 'Cookie'
		quantity: '15'
	});
	
	count++;
}
