const mysql = require('mysql')

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'vaksin'
})

conn.connect(function(err){
    if (err) throw error;
    console.log('Database connected')
})

module.exports = conn