const{curdProfileDbDetails} = require('../config/dbConfig')
const Mysql = require('mysql2/promise');
//console.log(tpiDbDetails.host);

const sql = Mysql.createPool({
    host: curdProfileDbDetails.host,
    user: curdProfileDbDetails.username,
    password: curdProfileDbDetails.password,
    database: curdProfileDbDetails.dbname
});
//console.log(sql);

module.exports = sql