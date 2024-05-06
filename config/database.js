const { Pool } = require("pg");

require('dotenv').config();

const pool = new Pool({
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    port: process.env.DATABASE_PORT,
    host: process.env.DATABASE_HOST
});

module.exports = pool;