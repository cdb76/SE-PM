const axios = require('axios')

var purchase = 'http://18.224.200.58';
var count = 0;
while(count < 10){
	
	    axios({
            method: 'post',
            url: purchase + '/purchase/',
            data: {
                item: 'Hotdog',
				quantity: '10'
            }
        });
	count++;
	
	
}

function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}