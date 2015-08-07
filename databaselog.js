var mysql = require ('mysql');


function addContentToDatabaselog(data) {
var connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'math1ass',
database: 'node',
});
console.log('in database');
connection.query('INSERT INTO coinbase (type,size,price,side,time) ' +
'VALUES ("'+data.type+'","'+data.size+'","'+data.price+'","'+data.side+'",NOW())',
function(err) {
if (err) {
console.log(err);
console.log('Could not insert content "' + content +
'" into database.');
}
connection.end();

});
}

module.exports.addContentToDatabaselog = addContentToDatabaselog;
