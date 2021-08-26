const Pool = require('pg').Pool

const pool = new Pool({
    user: 'dtvkjtio',
    password: process.env.DB_PASSWORD,
    host: 'hattie.db.elephantsql.com',
    port: 5432,
    database: 'dtvkjtio'
})

module.exports = pool;