// jwt secret
const jwtSecret: string | undefined = process.env.JWT_SECRET;
let JWT_SECRET: string;
if (typeof jwtSecret === "undefined") {
  JWT_SECRET = "jwt12345";
} else {
  JWT_SECRET = jwtSecret
}

// port
const port: string | undefined = process.env.PORT;
let PORT: string;
if (typeof port === "undefined") {
  PORT = "8080";
} else {
  PORT = port;
}


export {
  // config string
  JWT_SECRET,
  PORT
}