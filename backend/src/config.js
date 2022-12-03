import dotenv from 'dotenv';

dotenv.config();

if (typeof process.env.DEFAULT_PASSWORD == 'undefined') {
  process.env.DEFAULT_PASSWORD = "123456"
}

if (typeof process.env.JWT_SECRET == 'undefined') {
  process.env.JWT_SECRET = "my_secret_12345"
}

if (typeof process.env.PORT == 'undefined' 
  || typeof process.env.DB_CONNECTION_STRING == 'undefined') {
  console.error('Error: PORT or DB_CONNECTION_STRING is not set.');
  console.error('Please check .env file');
  process.exit(1);
} else {
  process.env.port = process.env.PORT;
  process.env.db_connection_string = process.env.DB_CONNECTION_STRING;
  process.env.default_password = process.env.DEFAULT_PASSWORD;
  process.env.jwt_secret = process.env.JWT_SECRET;
  console.log(`ENV -> port: ${process.env.port}, connection string: ${process.env.db_connection_string}`);
  console.log(`ENV -> default password: ${process.env.default_password}, jwt secret: ${process.env.jwt_secret}`)
}
