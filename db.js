const Pool = require('pg').Pool

const pool = new Pool({
    user: 'dtvkjtio',
    password: 'Ea7jGySWS8PFtGtrhTDUk-6ekgc2jGLj',
    host: 'hattie.db.elephantsql.com',
    port: 5432,
    database: 'dtvkjtio'
})

module.exports = pool;