var coinbase = require('coinbase');
var CoinbaseExchange = require('coinbase-exchange');
var databaselog = require("./databaselog.js");
var mysql = require ('mysql');

var mykey = 'y2xOTBJpMNqgjaXB';
var mysecret = 'pXVguyyAHzHzSMT2HUosID0ebGic3jXH';
var publicClient = new CoinbaseExchange.PublicClient();

var websocket = new CoinbaseExchange.WebsocketClient();
websocket.on('message', function(data) { test(data);

});


function test (data){
	
console.log(data);
if (data.type == "match") {
	databaselog.addContentToDatabaselog(data);
}
}




