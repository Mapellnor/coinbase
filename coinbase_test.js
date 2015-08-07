
var mykey = 'y2xOTBJpMNqgjaXB';
var mysecret = 'pXVguyyAHzHzSMT2HUosID0ebGic3jXH';

var coinbase = require('coinbase');
var client   = new coinbase.Client({'apiKey': mykey, 'apiSecret': mysecret});

client.getAccounts(function(err, accounts) {
  accounts.forEach(function(acct) {
    console.log('my bal: ' + acct.balance.amount + ' for ' + acct.name);
  });
});