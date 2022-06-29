import dotenv from 'dotenv';

dotenv.config({ silent: process.env.NODE_ENV === 'production' });
console.log(`port: ${process.env.port}, connection string: ${process.env.db_connection_string}`);