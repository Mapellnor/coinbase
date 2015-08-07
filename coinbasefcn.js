var coinbase = require('coinbase');
var CoinbaseExchange = require('coinbase-exchange');

var mykey = 'y2xOTBJpMNqgjaXB';
var mysecret = 'pXVguyyAHzHzSMT2HUosID0ebGic3jXH';
var publicClient = new CoinbaseExchange.PublicClient();

function startCoinbase(callback){
	
	publicClient.getProductOrderBook({'level': 2},function(err, response, data) {

	var bidlimit = 0.2;
	var bidvalue = 0;
	var i=0;
	while (bidvalue < bidlimit){
		bidvalue = bidvalue + parseFloat(data.bids[i][1]);
		var bid = data.bids[i][0];
		i++;
	}

	// var asks  = data.asks[0];
	console.log(bidvalue);
	// callback(data);
});
	
}
module.exports.startCoinbase = startCoinbase;

startCoinbase();
