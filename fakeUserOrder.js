const axios = require('axios')

var purchase = 'http://18.224.200.58';
var count = 0;
while(count < 10){
	axios.post('http://18.224.200.58/purchase?item=Hotdog&quantity=6');
	axios.post('http://18.224.200.58/purchase?item=Hamburger&quantity=6');
	axios.post('http://18.224.200.58/purchase?item=Soda&quantity=6');
	axios.post('http://18.224.200.58/purchase?item=Cookie&quantity=6');
	count++;
}