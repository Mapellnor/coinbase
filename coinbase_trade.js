
var mykey = 'y2xOTBJpMNqgjaXB';
var mysecret = 'pXVguyyAHzHzSMT2HUosID0ebGic3jXH';

var coinbase = require('coinbase');
var mysql = require ('mysql');
var CoinbaseExchange = require('coinbase-exchange');
var databaselog = require("./databaselog.js");
var coinbasefcn = require("./coinbasefcn.js");

var client   = new coinbase.Client({'apiKey': mykey, 'apiSecret': mysecret});

// client.getAccounts(function(err, accounts) {
//   accounts.forEach(function(acct) {
//     console.log('my bal: ' + acct.balance.amount + ' for ' + acct.name);
//   });
// });


var publicClient = new CoinbaseExchange.PublicClient();

var websocket = new CoinbaseExchange.WebsocketClient();
websocket.on('message', function(data) { 
	
	if (data.type == "match") {
		console.log(data.time);
		// lagg till data i databasen
		databaselog.addContentToDatabaselog(data);

		coinbasefcn.startCoinbase(function(data){

		});
	//
	}




});

// var callback = function(err, response, data) {
  
// bids = data.bids[0];
// asks  = data.asks[0];
// console.log(bids[0]);
// };
// publicClient.getProductOrderBook(callback);


// var connection = mysql.createConnection({
// 		host: 'localhost',
// 		user: 'root',
// 		password: 'math1ass'
// });

// connection.query('USE node', function(err){
// 	if (err) {
// 		console.log('could not switch database to "node".');
// 		}
// 		else console.log('could database to "node".');
// });


// publicClient.getProductOrderBook(function(err, response, data) {
  
// bids = data.bids[0];
// asks  = data.asks[0];
// console.log(bids[0]);
// connection.query('INSERT INTO test(content) VALUES ('+bids[0]+');');
// });


// var CoinbaseExchange = require('coinbase-exchange');
