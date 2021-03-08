import mysql from 'mysql2';

// creates a pool of mysql connections
const pool: mysql.Pool = mysql.createPool({
  host: process.env.DB_HOSTNAME,
  user: process.env.DB_USERNAME,
  database: process.env.DATABASE,
  password: process.env.DB_PASSWORD
});

// returns the connection as a promise
export default pool.promise();
