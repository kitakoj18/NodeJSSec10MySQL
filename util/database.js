const mysql = require('mysql2');

// set up connection to database
// want pool of connections to run multiple queries
// configure database host we're connecting to
const pool = mysql.createPool({
    //information about database server
    host: 'localhost',
    user: 'root',
    //information about specific database
    database: 'node-complete',
    password: '###'
})

// promise chains
module.exports = pool.promise();