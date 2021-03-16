'use strict';
import mysql from 'mysql2';

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USERNAME,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
