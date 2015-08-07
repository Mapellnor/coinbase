var mysql = require ('mysql');


function addContentToDatabase(content,callback) {
var connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'math1ass',
database: 'node',
});

connection.query('INSERT INTO test (content) ' +
'VALUES ("' + content + '")',
function(err) {
if (err) {
console.log(err);
console.log('Could not insert content "' + content +
'" into database.');
}
connection.end();
callback();
});
}

module.exports.addContentToDatabase = addContentToDatabase;
