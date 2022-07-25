const{agentCareDbDetails} = require('./../config/dbConfig')
const Mysql = require('mysql2/promise');
//console.log(tpiDbDetails.host);

const sql = Mysql.createPool({
    host: agentCareDbDetails.host,
    user: agentCareDbDetails.username,
    password: agentCareDbDetails.password,
    database: agentCareDbDetails.dbname
});
//console.log(sql);

module.exports = sql