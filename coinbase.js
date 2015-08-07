var coinbase = require('coinbase');
var CoinbaseExchange = require('coinbase-exchange');

var mykey = 'y2xOTBJpMNqgjaXB';
var mysecret = 'pXVguyyAHzHzSMT2HUosID0ebGic3jXH';
var publicClient = new CoinbaseExchange.PublicClient();

// function startCoinbase(){
// 	var publicClient = new CoinbaseExchange.PublicClient();
// 	return publicClient;
// }

// function getValues(){
// 	publicClient.getProductOrderBook(function(err, response, data) {
  
// 	bids = data.bids[0];
// 	asks  = data.asks[0];
// 	console.log(bids[0]);
// });
// }

// exports.startCoinbase = startCoinbase;
// exports.getValues = getValues;

function startCoinbase(callback){
	
	publicClient.getProductOrderBook({'level': 2},function(err, response, data) {

	var bids = parseFloat(data.bids[1][0]);
	var bids2 = parseFloat(data.bids[2][0]);
	bids3 = bids+bids2;
	// var asks  = data.asks[0];
	console.log(data);
	console.log(bids);
	console.log(bids3);
	console.log(data.bids[0][2]);
	// callback(data);
});
	
}
module.exports.startCoinbase = startCoinbase;

startCoinbase();