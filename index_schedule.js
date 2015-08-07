

var coinbase = require("./coinbase.js");
var database = require("./database.js");
var mysql = require ('mysql');

// coinbase.startCoinbase(function(bids){
// console.log(bids);
// database.addContentToDatabase(bids);
// });

// var getValues = coinbase.getValues();

// console.log(bids[0]);

var period = 5000; // 1 second
setInterval(function() {
coinbase.startCoinbase(function(bids){
console.log(bids);
database.addContentToDatabase(bids);
});
}, period);