

var coinbase = require("./coinbase.js");
var databaselog = require("./databaselog.js");
var mysql = require ('mysql');

function test (){
	coinbase.startCoinbase(function(data){
console.log(data);
databaselog.addContentToDatabaselog(data,test);
});
}

test();



