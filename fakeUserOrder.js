const axios = require('axios')

var purchase = 'http://18.224.200.58/purchase';

function f() {
	axios.post(purchase+'?item=Soda&quantity=6');
	axios.post(purchase+'?item=Hamburger&quantity=6');
	axios.post(purchase+'?item=Hotdog&quantity=6');
	axios.post(purchase+'?item=Cookie&quantity=6');
	if(true){
		setTimeout(f, 3000);
	}
}

f();