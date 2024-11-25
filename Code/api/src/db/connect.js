const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit:10,
    host:'localhost',
    user:'alunods',
    password:'senai@604',
    database:'agenda'
})

module.exports = pool;