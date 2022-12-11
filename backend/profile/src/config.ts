import * as dotenv from 'dotenv';

dotenv.config();

if (typeof process.env.PORT == 'undefined' 
  || typeof process.env.DB_CONNECTION_STRING == 'undefined') {
  console.error('Error: PORT or DB_CONNECTION_STRING is not set.');
  console.error('Please check .env file');
  process.exit(1);
} else {
  console.log(`ENV -> port: ${process.env.PORT}, connection string: ${process.env.DB_CONNECTION_STRING}`);
  console.log(`ENV -> default password: ${process.env.DEFAULT_PASSWORD}, jwt secret: ${process.env.JWT_SECRET}`)
}
